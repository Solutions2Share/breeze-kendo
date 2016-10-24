# Breeze Kendo DataSource

[![Build status](https://ci.appveyor.com/api/projects/status/q7qkbl7ic27hbj7g/branch/master?svg=true)](https://ci.appveyor.com/project/bastianjohn/breeze-kendo/branch/master)

This is a fork of [Teleriks Breeze Kendo DataSource](https://github.com/kendo-labs/breeze-kendo) containing additional features and bug fixes.

### Features

- creates a Kendo DataSource object that is kept in sync with the
  Breeze entities.  For instance when an entity changes, the Kendo DS
  is updated automatically; also when the data changes on the Kendo
  side, the Breeze entities are updated automatically.

  This means that for an app that is properly configured to use Breeze
  (i.e. has metadata and breezeManager.saveChanges() works) adding in
  Kendo widgets that support a Kendo DataSource should be a snap.

- `kendo.data.breeze.SchedulerSource` object for using with the [Kendo UI Scheduler](http://docs.telerik.com/kendo-ui/web/scheduler/overview).

- auto-generates a Kendo-compatible data model (`schema.model`) based
  on metadata defined in the Breeze EntityManager.

- supports server-side pagination, sort, filters.

### Known Limitations

- Doesn't support nested entities (see [Nested objects in Datagrid #1](https://github.com/iozag/breeze-kendo/issues/1))

### Usage
See the [Wiki](https://github.com/iozag/breeze-kendo/wiki) for documentation.
