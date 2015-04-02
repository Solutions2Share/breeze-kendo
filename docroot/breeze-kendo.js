/* global breeze, kendo */

/**
 * This is a forked version of the breeze-kendo bridge (https://github.com/kendo-labs/breeze-kendo).
 * You can get the latest version at https://github.com/iozag/breeze-kendo.
 * 
 * Released under Apache 2.0 licence (http://kendoui-labs.telerik.com/#license)
 *
 */

(function ($, kendo, breeze) {
    'use strict';

    var exports = kendo.data.breeze = {},
        Predicate = breeze.Predicate,
        Operators = breeze.FilterQueryOp;

    /**
     * Creates a new instance of a BreezeTransport object.
     * @param {object} options - Options object of a Kendo data source.
     * @param {object} kendoModelType - Type of the Kendo model in the data source. Should be kendo.data.Model or a class inherited from kendo.data.Model.
     */
    function BreezeTransport(options, kendoModelType) {
        if (!options.manager) {
            throw new Error('Please specify a Breeze EntityManager via `manager` option');
        }
        if (!options.query) {
            throw new Error('Please specify a Breeze EntityQuery via `query` option');
        }

        this.manager = options.manager;
        this.query = options.query;
        this.scheduler = options.scheduler;
        this.kendoModelType = kendoModelType;

        // Object containing the Breeze Entity object for each item in the data source.
        this.breezeEntityMapping = Object.create(null);
    }

    function makeOperator(op) {
        return {
            eq: Operators.Equals,
            neq: Operators.NotEquals,
            lt: Operators.LessThan,
            lte: Operators.LessThanOrEqual,
            gt: Operators.GreaterThan,
            gte: Operators.GreaterThanOrEqual,
            startswith: Operators.StartsWith,
            endswith: Operators.EndsWith,
            contains: Operators.Contains
        }[op];
    }

    function makeFilters(args) {
        var filters = args.filters.map(function (f) {
            var field = 'tolower(' + f.field + ')',
                operator = makeOperator(f.operator),
                value = f.value;
            return Predicate.create(field, operator, value);
        });
        if (args.logic === 'and') {
            return Predicate.and(filters);
        }
        if (args.logic === 'or') {
            return Predicate.or(filters);
        }
        throw new Error('Unsupported predicate logic ' + args.logic);
    }

    function recursiveIteration(object, callback, prefix) {
        var property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                if (typeof object[property] === 'object') {
                    recursiveIteration(object[property], callback, (prefix || '') + property + '.');
                } else {
                    callback(object, (prefix || '') + property);
                }
            }
        }
    }

    function mutex() {
        var locked = false;
        return function (f) {
            return function () {
                if (!locked) {
                    locked = true;
                    try {
                        f.apply(this, arguments);
                    }
                    finally {
                        locked = false;
                    }
                }
            };
        };
    }

    function syncItems(breezeEntityMapping, observable, entity) {
        var protect = mutex();
        observable.bind({
            'change': protect(function (e) {
                if (e.field) {
                    entity[e.field] = observable[e.field];
                } else {
                    console && console.error && console.error('Unhandled ObservableObject->Breeze change event', e);
                }
            })
        });
        entity.entityAspect.propertyChanged.subscribe(protect(function (e) {
            if (e.propertyName) {
                observable.set(e.propertyName, e.newValue);
            } else if (e.entity) {
                recursiveIteration(
                    e.entity._backingStore,
                    function (obj, prop) {
                        observable.set(prop, obj[prop]);
                    }
                );
            }
        }));

        // Add original entity to the mapping list.
        breezeEntityMapping[observable.id] = entity;
    }

    /**
     * Transport which uses Breeze for accessing data.
     */
    $.extend(
        BreezeTransport.prototype,
        {
            // The configuration used when the data source loads data items from a remote service
            read: function (options) {
                var self = this,
                    query = self.query,
                    args = options.data,
                    schedulerWidget,
                    schedulerView,
                    startDate,
                    endDate;

                if (args.filter) {
                    query = query.where(makeFilters(args.filter));
                }

                // If data source of a scheduler widget, filter by visible date range of current view.
                if (self.scheduler) {
                    schedulerWidget = self.scheduler.getKendoScheduler();
                    // Make sure scheduler widget is already created.
                    if (schedulerWidget) {
                        schedulerView = schedulerWidget.view();
                        startDate = schedulerView.startDate();
                        endDate = schedulerView.endDate();
                        query = query.where(
                            Predicate.or([
                                // Include all recuring events, since they might contain appointments
                                // inside the current date range.
                                Predicate.create(
                                    'recurs',
                                    Operators.Equals,
                                    true
                                ),
                                // Limit single events to the date range of the current scheduler view.
                                Predicate.create(
                                    'end',
                                    Operators.GreaterThanOrEqual,
                                    startDate
                                ),
                                Predicate.create(
                                    'start',
                                    Operators.LessThanOrEqual,
                                    endDate
                                )
                            ])
                        );
                    }
                }

                if (args.sort && args.sort.length > 0) {
                    query = query.orderBy(args.sort.map(function (col) {
                        return col.field + (col.dir === 'desc' ? ' desc' : '');
                    }).join(', '));
                }

                if (args.page) {
                    query = query
                        .skip(args.skip)
                        .take(args.take)
                        .inlineCount();
                }

                try {
                    self.manager.executeQuery(query,
                         function (data) {
                             options.success(self._makeResults(data));
                        },
                        function (err) {
                            options.error(err);
                        }
                    );
                } catch (ex) {
                    console.error(ex);
                }
            },

            // The configuration used when the data source saves newly created data items.
            create: function (options) {
                this._saveChanges().then(
                        function (saveResult) {
                            options.success(saveResult.httpResponse);
                        }
                    ).catch(
                        function (error) {
                            this._handleError(options, error);
                        }
                    );
            },

            // The configuration used when the data source saves updated data items.
            update: function (options) {
                this._saveChanges().then(
                        function (saveResult) {
                            options.success(saveResult.httpResponse);
                        }
                    ).catch(
                        function (error) {
                            this._handleError(options, error);
                        }
                    );
            },

            // The configuration used when the data source destroys data items.
            destroy: function (options) {
                this._saveChanges().then(
                        function (saveResult) {
                            options.success(saveResult.httpResponse);
                        }
                    ).catch(
                        function (error) {
                            this._handleError(options, error);
                        }
                    );
            },

            /**
             * Returns an error to the data source.
             * @param {object} options - Options object on which the error should be set.
             * @param {object} error - Error object.
             */
            _handleError: function(options, error) {
                options.error(
                    error.httpResponse,
                    error.statusText || (error.innerError && error.innerError.statusText));
            },

            /**
             * Save the changes.
             * @returns {promise} Promise of the save operation.
             */
            _saveChanges: (function () {
                // Throttle, since we will get multiple calls even in "batch" mode.
                var timer = null;
                return function () {
                    var self = this,
                        deferred = breeze.Q.defer();
                    clearTimeout(timer);
                    setTimeout(function () {
                        self.manager.saveChanges().then(
                            function (saveResult) {
                                deferred.resolve(saveResult);
                            }
                        ).catch(
                            function (error) {
                                deferred.reject(error);
                            }
                        );
                    }, 10);
                    return deferred.promise;
                };
            })(),

            /**
             * Cancel the changes.
             * @param {object} dataItem - Model to cancel.
             */
            _cancelChanges: function (dataItem) {
                var manager = this.manager,
                    breezeEntityMapping = this.breezeEntityMapping,
                    breezeEntity;

                if (dataItem) {
                    // Read Breeze entity for data item from mapping list.
                    breezeEntity = breezeEntityMapping[dataItem.id];

                    if (breezeEntity && breezeEntity.entityManager) {
                        breezeEntity.entityAspect.rejectChanges();
                    }
                    else {
                        manager.rejectChanges();
                    }
                } else {
                    manager.rejectChanges();
                }
            },

            /**
             * Transforms the result of a Breeze query into an array usable by Kendo.
             * @returns {kendo.data.ObservableArray} Array containing the data.
             */
            _makeResults: function (data) {
                var manager = this.manager,
                    query = this.query,
                    kendoModelType = this.kendoModelType,
                    breezeEntityMapping = this.breezeEntityMapping,
                    meta,
                    typeName,
                    typeObj,
                    schema,
                    props,
                    a;

                try {
                    meta = manager.metadataStore,
                    typeName = meta.getEntityTypeNameForResourceName(query.resourceName),
                    typeObj = meta.getEntityType(typeName || query.resourceName);
                } catch (ex) {
                    // Without metadata Breeze returns plain JS objects so we can just return
                    // the original array.
                    data.results.total = data.inlineCount;
                    return data.results;
                }

                // Let's get (or try to get) the schema and create a correct model, so that things like
                // isNew() work
                schema = this._makeSchema();

                // With the metadata, some complex objects are returned on which we can't call
                // ObservableArray/Object (would overrun the stack).

                props = typeObj.dataProperties,
                a = data.results.map(function (rec) {
                    var obj = {},
                        schemaModel;

                    props.forEach(function (prop) {
                        obj[prop.name] = rec[prop.name];
                    });

                    // bind to the schema if available
                    if (schema && schema.model) {
                        schemaModel = kendoModelType.define(schema.model);
                        obj = new schemaModel(obj);
                    } else {
                        obj = new kendoModelType(obj);
                    }

                    syncItems(breezeEntityMapping, obj, rec);
                    return obj;
                });

                a = new kendo.data.ObservableArray(a);
                a.bind('change', function (ev) {
                    switch (ev.action) {
                        case 'remove':
                            ev.items.forEach(function (item) {
                                // Mark the Breeze entity of the current data source item as deleted.
                                breezeEntityMapping[item.id].entityAspect.setDeleted();
                            });
                            break;
                        case 'add':
                            ev.items.forEach(function (item) {
                                var entity = manager.createEntity(typeName || query.resourceName, item);
                                manager.addEntity(entity);
                                syncItems(breezeEntityMapping, item, entity);
                            });
                            break;
                    }
                });
                a.total = data.inlineCount;
                return a;
            },

            /**
             * Returns the data schema.
             * @returns {object} Schema of the data.
             */
            _makeSchema: function () {
                var schema = {
                        total: function (data) {
                            return data.total;
                        }
                    },
                    meta,
                    typeName,
                    typeObj,
                    model,
                    proptype;

                try {
                    meta = this.manager.metadataStore,
                    typeName = meta.getEntityTypeNameForResourceName(this.query.resourceName),
                    typeObj = meta.getEntityType(typeName || this.query.resourceName);
                } catch (ex) {
                    return schema;
                }
                model = { fields: {} };
                if (typeObj.keyProperties) {
                    if (typeObj.keyProperties.length === 1) {
                        model.id = typeObj.keyProperties[0].name;
                    } else if (typeObj.keyProperties.length > 1) {
                        console && console.error && console.error('Multiple-key ID not supported');
                    }
                }

                try {
                    typeObj.dataProperties.forEach(function (prop) {
                        proptype = 'string';
                        if (prop.dataType.isNumeric) {
                            proptype = 'number';
                        }
                        else if (prop.dataType.isDate) {
                            proptype = 'date';
                        }
                        else if (prop.dataType.name === 'Boolean') {
                            proptype = 'boolean';
                        }
                        model.fields[prop.name] = {
                            type: proptype,
                            defaultValue: prop.defaultValue,
                            nullable: prop.isNullable,
                            required: prop.isNullable
                        };
                    });
                } catch (ex) {
                    return schema;
                }

                schema.model = model;
                return schema;
            }
        }
    );

    /**
     * Kendo DataSource using Breeze for accessing data.
     */
    exports.Source = kendo.data.DataSource.extend({
        init: function (options) {
            var transport = new BreezeTransport(options, kendo.data.Model);
            options = $.extend(
                {},
                {
                    transport: transport,
                    schema: transport._makeSchema(),
                    batch: true
                },
                options);
            kendo.data.DataSource.prototype.init.call(this, options);
        },

        cancelChanges: function (e) {
            var t = this;

            if (e instanceof kendo.data.Model) {
                t._cancelModel(e);
                t.transport._cancelChanges(e);
            } else {
                t._destroyed = [],
                t._detachObservableParents(),
                t._data = t._observe(t._pristineData),
                t.options.serverPaging && (t._total = t._pristineTotal);
                t._change();
                t.transport._cancelChanges();
            }
        }
    });

    /**
     * Kendo DataSource for the Scheduler widget using Breeze for accessing data.
     */
    exports.SchedulerSource = kendo.data.SchedulerDataSource.extend({
        init: function (options) {
            var transport = new BreezeTransport(options, kendo.data.SchedulerEvent);
            options = $.extend(
                {},
                {
                    transport: transport,
                    schema: transport._makeSchema(),
                    batch: true
                },
                options);
            kendo.data.SchedulerDataSource.prototype.init.call(this, options);
        },

        cancelChanges: function (e) {
            var t = this;

            if (e instanceof kendo.data.SchedulerEvent) {
                t._cancelModel(e);
                t.transport._cancelChanges(e);
            } else {
                t._destroyed = [],
                t._detachObservableParents(),
                t._data = t._observe(t._pristineData),
                t.options.serverPaging && (t._total = t._pristineTotal);
                t._change();
                t.transport._cancelChanges();
            }
        }
    });
})(jQuery, kendo, breeze);
