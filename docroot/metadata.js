window.METADATA = {
    "schema": {
        "namespace": "Breeze.Learn.Models",
        "alias": "Self",
        "xmlns": "http://schemas.microsoft.com/ado/2008/09/edm",
        "cSpaceOSpaceMapping": '[["Breeze.Learn.Models.Category","Breeze.Learn.Models.Category"],["Breeze.Learn.Models.Product","Breeze.Learn.Models.Product"],["Breeze.Learn.Models.OrderDetail","Breeze.Learn.Models.OrderDetail"],["Breeze.Learn.Models.Order","Breeze.Learn.Models.Order"],["Breeze.Learn.Models.Customer","Breeze.Learn.Models.Customer"],["Breeze.Learn.Models.Employee","Breeze.Learn.Models.Employee"],["Breeze.Learn.Models.EmployeeTerritory","Breeze.Learn.Models.EmployeeTerritory"],["Breeze.Learn.Models.Territory","Breeze.Learn.Models.Territory"],["Breeze.Learn.Models.Region","Breeze.Learn.Models.Region"],["Breeze.Learn.Models.InternationalOrder","Breeze.Learn.Models.InternationalOrder"],["Breeze.Learn.Models.Supplier","Breeze.Learn.Models.Supplier"],["Breeze.Learn.Models.PreviousEmployee","Breeze.Learn.Models.PreviousEmployee"],["Breeze.Learn.Models.Role","Breeze.Learn.Models.Role"],["Breeze.Learn.Models.UserRole","Breeze.Learn.Models.UserRole"],["Breeze.Learn.Models.User","Breeze.Learn.Models.User"]]',
        "entityType": [ {
            "name": "Category",
            "key": {
                "propertyRef": {
                    "name": "CategoryID"
                }
            },
            "property": [ {
                "name": "CategoryID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "CategoryName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Description",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Picture",
                "type": "Edm.Binary",
                "fixedLength": "false",
                "maxLength": "4000",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": {
                "name": "Products",
                "relationship": "Self.Category_Products",
                "fromRole": "Category_Products_Source",
                "toRole": "Category_Products_Target"
            }
        }, {
            "name": "Product",
            "key": {
                "propertyRef": {
                    "name": "ProductID"
                }
            },
            "property": [ {
                "name": "ProductID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "ProductName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "40",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "SupplierID",
                "type": "Edm.Int32",
                "nullable": "true"
            }, {
                "name": "CategoryID",
                "type": "Edm.Int32",
                "nullable": "true"
            }, {
                "name": "QuantityPerUnit",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "UnitPrice",
                "type": "Edm.Decimal",
                "precision": "18",
                "scale": "2",
                "nullable": "true"
            }, {
                "name": "UnitsInStock",
                "type": "Edm.Int16",
                "nullable": "true"
            }, {
                "name": "UnitsOnOrder",
                "type": "Edm.Int16",
                "nullable": "true"
            }, {
                "name": "ReorderLevel",
                "type": "Edm.Int16",
                "nullable": "true"
            }, {
                "name": "Discontinued",
                "type": "Edm.Boolean",
                "nullable": "false"
            }, {
                "name": "DiscontinuedDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "Category",
                "relationship": "Self.Category_Products",
                "fromRole": "Category_Products_Target",
                "toRole": "Category_Products_Source"
            }, {
                "name": "OrderDetails",
                "relationship": "Self.OrderDetail_Product",
                "fromRole": "OrderDetail_Product_Target",
                "toRole": "OrderDetail_Product_Source"
            }, {
                "name": "Supplier",
                "relationship": "Self.Product_Supplier",
                "fromRole": "Product_Supplier_Source",
                "toRole": "Product_Supplier_Target"
            } ]
        }, {
            "name": "OrderDetail",
            "key": {
                "propertyRef": [ {
                    "name": "OrderID"
                }, {
                    "name": "ProductID"
                } ]
            },
            "property": [ {
                "name": "OrderID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "ProductID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "UnitPrice",
                "type": "Edm.Decimal",
                "precision": "18",
                "scale": "2",
                "nullable": "false"
            }, {
                "name": "Quantity",
                "type": "Edm.Int16",
                "nullable": "false"
            }, {
                "name": "Discount",
                "type": "Edm.Single",
                "nullable": "false"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "Order",
                "relationship": "Self.Order_OrderDetails",
                "fromRole": "Order_OrderDetails_Target",
                "toRole": "Order_OrderDetails_Source"
            }, {
                "name": "Product",
                "relationship": "Self.OrderDetail_Product",
                "fromRole": "OrderDetail_Product_Source",
                "toRole": "OrderDetail_Product_Target"
            } ]
        }, {
            "name": "Order",
            "key": {
                "propertyRef": {
                    "name": "OrderID"
                }
            },
            "property": [ {
                "name": "OrderID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "CustomerID",
                "type": "Edm.String",
                "nullable": "true"
            }, {
                "name": "EmployeeID",
                "type": "Edm.Int32",
                "nullable": "true"
            }, {
                "name": "OrderDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "RequiredDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "ShippedDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "Freight",
                "type": "Edm.Decimal",
                "precision": "18",
                "scale": "2",
                "nullable": "true"
            }, {
                "name": "ShipName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "40",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ShipAddress",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "60",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ShipCity",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ShipRegion",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ShipPostalCode",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "10",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ShipCountry",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "Customer",
                "relationship": "Self.Customer_Orders",
                "fromRole": "Customer_Orders_Target",
                "toRole": "Customer_Orders_Source"
            }, {
                "name": "Employee",
                "relationship": "Self.Employee_Orders",
                "fromRole": "Employee_Orders_Target",
                "toRole": "Employee_Orders_Source"
            }, {
                "name": "OrderDetails",
                "relationship": "Self.Order_OrderDetails",
                "fromRole": "Order_OrderDetails_Source",
                "toRole": "Order_OrderDetails_Target"
            }, {
                "name": "InternationalOrder",
                "relationship": "Self.Order_InternationalOrder",
                "fromRole": "Order_InternationalOrder_Source",
                "toRole": "Order_InternationalOrder_Target"
            } ]
        }, {
            "name": "Customer",
            "key": {
                "propertyRef": {
                    "name": "CustomerID"
                }
            },
            "property": [ {
                "name": "CustomerID",
                "type": "Edm.String",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "CustomerID_OLD",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "5",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "CompanyName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "40",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "ContactName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ContactTitle",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Address",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "60",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "City",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Region",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PostalCode",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "10",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Country",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Phone",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Fax",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "concurrencyMode": "Fixed",
                "nullable": "true"
            } ],
            "navigationProperty": {
                "name": "Orders",
                "relationship": "Self.Customer_Orders",
                "fromRole": "Customer_Orders_Source",
                "toRole": "Customer_Orders_Target"
            }
        }, {
            "name": "Employee",
            "key": {
                "propertyRef": {
                    "name": "EmployeeID"
                }
            },
            "property": [ {
                "name": "EmployeeID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "LastName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "FirstName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "Title",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "TitleOfCourtesy",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "25",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "BirthDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "HireDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "Address",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "60",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "City",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Region",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PostalCode",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "10",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Country",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "HomePhone",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Extension",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Photo",
                "type": "Edm.Binary",
                "fixedLength": "false",
                "maxLength": "4000",
                "nullable": "true"
            }, {
                "name": "Notes",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PhotoPath",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "255",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ReportsToEmployeeID",
                "type": "Edm.Int32",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "DirectReports",
                "relationship": "Self.Employee_DirectReports",
                "fromRole": "Employee_DirectReports_Source",
                "toRole": "Employee_DirectReports_Target"
            }, {
                "name": "Manager",
                "relationship": "Self.Employee_DirectReports",
                "fromRole": "Employee_DirectReports_Target",
                "toRole": "Employee_DirectReports_Source"
            }, {
                "name": "EmployeeTerritories",
                "relationship": "Self.Employee_EmployeeTerritories",
                "fromRole": "Employee_EmployeeTerritories_Source",
                "toRole": "Employee_EmployeeTerritories_Target"
            }, {
                "name": "Orders",
                "relationship": "Self.Employee_Orders",
                "fromRole": "Employee_Orders_Source",
                "toRole": "Employee_Orders_Target"
            }, {
                "name": "Territories",
                "relationship": "Self.Employee_Territories",
                "fromRole": "Employee_Territories_Source",
                "toRole": "Employee_Territories_Target"
            } ]
        }, {
            "name": "EmployeeTerritory",
            "key": {
                "propertyRef": {
                    "name": "ID"
                }
            },
            "property": [ {
                "name": "ID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "EmployeeID",
                "type": "Edm.Int32",
                "nullable": "false"
            }, {
                "name": "TerritoryID",
                "type": "Edm.Int32",
                "nullable": "false"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "Employee",
                "relationship": "Self.Employee_EmployeeTerritories",
                "fromRole": "Employee_EmployeeTerritories_Target",
                "toRole": "Employee_EmployeeTerritories_Source"
            }, {
                "name": "Territory",
                "relationship": "Self.EmployeeTerritory_Territory",
                "fromRole": "EmployeeTerritory_Territory_Source",
                "toRole": "EmployeeTerritory_Territory_Target"
            } ]
        }, {
            "name": "Territory",
            "key": {
                "propertyRef": {
                    "name": "TerritoryID"
                }
            },
            "property": [ {
                "name": "TerritoryID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "TerritoryDescription",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "50",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "RegionID",
                "type": "Edm.Int32",
                "nullable": "false"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "EmployeeTerritories",
                "relationship": "Self.EmployeeTerritory_Territory",
                "fromRole": "EmployeeTerritory_Territory_Target",
                "toRole": "EmployeeTerritory_Territory_Source"
            }, {
                "name": "Region",
                "relationship": "Self.Region_Territories",
                "fromRole": "Region_Territories_Target",
                "toRole": "Region_Territories_Source"
            }, {
                "name": "Employees",
                "relationship": "Self.Employee_Territories",
                "fromRole": "Employee_Territories_Target",
                "toRole": "Employee_Territories_Source"
            } ]
        }, {
            "name": "Region",
            "key": {
                "propertyRef": {
                    "name": "RegionID"
                }
            },
            "property": [ {
                "name": "RegionID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "RegionDescription",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "50",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": {
                "name": "Territories",
                "relationship": "Self.Region_Territories",
                "fromRole": "Region_Territories_Source",
                "toRole": "Region_Territories_Target"
            }
        }, {
            "name": "InternationalOrder",
            "key": {
                "propertyRef": {
                    "name": "OrderID"
                }
            },
            "property": [ {
                "name": "OrderID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "CustomsDescription",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ExciseTax",
                "type": "Edm.Decimal",
                "precision": "18",
                "scale": "2",
                "nullable": "false"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": {
                "name": "Order",
                "relationship": "Self.Order_InternationalOrder",
                "fromRole": "Order_InternationalOrder_Target",
                "toRole": "Order_InternationalOrder_Source"
            }
        }, {
            "name": "Supplier",
            "key": {
                "propertyRef": {
                    "name": "SupplierID"
                }
            },
            "property": [ {
                "name": "SupplierID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "CompanyName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "40",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "ContactName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ContactTitle",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Address",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "60",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "City",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Region",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PostalCode",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "10",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Country",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Phone",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Fax",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "HomePage",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ],
            "navigationProperty": {
                "name": "Products",
                "relationship": "Self.Product_Supplier",
                "fromRole": "Product_Supplier_Target",
                "toRole": "Product_Supplier_Source"
            }
        }, {
            "name": "PreviousEmployee",
            "key": {
                "propertyRef": {
                    "name": "EmployeeID"
                }
            },
            "property": [ {
                "name": "EmployeeID",
                "type": "Edm.Int32",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "None",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "LastName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "FirstName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "Title",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "30",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "TitleOfCourtesy",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "25",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "BirthDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "HireDate",
                "type": "Edm.DateTime",
                "nullable": "true"
            }, {
                "name": "Address",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "60",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "City",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Region",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PostalCode",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "10",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Country",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "15",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "HomePhone",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "24",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Extension",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Photo",
                "type": "Edm.Binary",
                "fixedLength": "false",
                "maxLength": "4000",
                "nullable": "true"
            }, {
                "name": "Notes",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "4000",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "PhotoPath",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "255",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ReportsToEmployeeID",
                "type": "Edm.Int32",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Int32",
                "nullable": "false"
            } ]
        }, {
            "name": "Role",
            "key": {
                "propertyRef": {
                    "name": "Id"
                }
            },
            "property": [ {
                "name": "Id",
                "type": "Edm.Int64",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "Name",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "50",
                "unicode": "true",
                "nullable": "false"
            }, {
                "name": "Description",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "2000",
                "unicode": "true",
                "nullable": "true"
            } ],
            "navigationProperty": {
                "name": "UserRoles",
                "relationship": "Self.Role_UserRoles",
                "fromRole": "Role_UserRoles_Source",
                "toRole": "Role_UserRoles_Target"
            }
        }, {
            "name": "UserRole",
            "key": {
                "propertyRef": {
                    "name": "ID"
                }
            },
            "property": [ {
                "name": "ID",
                "type": "Edm.Int64",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "UserId",
                "type": "Edm.Int64",
                "nullable": "false"
            }, {
                "name": "RoleId",
                "type": "Edm.Int64",
                "nullable": "false"
            } ],
            "navigationProperty": [ {
                "name": "Role",
                "relationship": "Self.Role_UserRoles",
                "fromRole": "Role_UserRoles_Target",
                "toRole": "Role_UserRoles_Source"
            }, {
                "name": "User",
                "relationship": "Self.User_UserRoles",
                "fromRole": "User_UserRoles_Target",
                "toRole": "User_UserRoles_Source"
            } ]
        }, {
            "name": "User",
            "key": {
                "propertyRef": {
                    "name": "Id"
                }
            },
            "property": [ {
                "name": "Id",
                "type": "Edm.Int64",
                "nullable": "false",
                "d6p1:StoreGeneratedPattern": "Identity",
                "xmlns:d6p1": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
            }, {
                "name": "UserName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "UserPassword",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "200",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "FirstName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "LastName",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "Email",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "RowVersion",
                "type": "Edm.Decimal",
                "precision": "18",
                "scale": "2",
                "nullable": "false"
            }, {
                "name": "CreatedBy",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "CreatedByUserId",
                "type": "Edm.Int64",
                "nullable": "false"
            }, {
                "name": "CreatedDate",
                "type": "Edm.DateTime",
                "nullable": "false"
            }, {
                "name": "ModifiedBy",
                "type": "Edm.String",
                "fixedLength": "false",
                "maxLength": "100",
                "unicode": "true",
                "nullable": "true"
            }, {
                "name": "ModifiedByUserId",
                "type": "Edm.Int64",
                "nullable": "false"
            }, {
                "name": "ModifiedDate",
                "type": "Edm.DateTime",
                "concurrencyMode": "Fixed",
                "nullable": "false"
            } ],
            "navigationProperty": {
                "name": "UserRoles",
                "relationship": "Self.User_UserRoles",
                "fromRole": "User_UserRoles_Source",
                "toRole": "User_UserRoles_Target"
            }
        } ],
        "association": [ {
            "name": "Customer_Orders",
            "end": [ {
                "role": "Customer_Orders_Source",
                "type": "Edm.Self.Customer",
                "multiplicity": "0..1"
            }, {
                "role": "Customer_Orders_Target",
                "type": "Edm.Self.Order",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Customer_Orders_Source",
                    "propertyRef": {
                        "name": "CustomerID"
                    }
                },
                "dependent": {
                    "role": "Customer_Orders_Target",
                    "propertyRef": {
                        "name": "CustomerID"
                    }
                }
            }
        }, {
            "name": "Employee_DirectReports",
            "end": [ {
                "role": "Employee_DirectReports_Source",
                "type": "Edm.Self.Employee",
                "multiplicity": "0..1"
            }, {
                "role": "Employee_DirectReports_Target",
                "type": "Edm.Self.Employee",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Employee_DirectReports_Source",
                    "propertyRef": {
                        "name": "EmployeeID"
                    }
                },
                "dependent": {
                    "role": "Employee_DirectReports_Target",
                    "propertyRef": {
                        "name": "ReportsToEmployeeID"
                    }
                }
            }
        }, {
            "name": "Region_Territories",
            "end": [ {
                "role": "Region_Territories_Source",
                "type": "Edm.Self.Region",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            }, {
                "role": "Region_Territories_Target",
                "type": "Edm.Self.Territory",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Region_Territories_Source",
                    "propertyRef": {
                        "name": "RegionID"
                    }
                },
                "dependent": {
                    "role": "Region_Territories_Target",
                    "propertyRef": {
                        "name": "RegionID"
                    }
                }
            }
        }, {
            "name": "EmployeeTerritory_Territory",
            "end": [ {
                "role": "EmployeeTerritory_Territory_Source",
                "type": "Edm.Self.EmployeeTerritory",
                "multiplicity": "*"
            }, {
                "role": "EmployeeTerritory_Territory_Target",
                "type": "Edm.Self.Territory",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "EmployeeTerritory_Territory_Target",
                    "propertyRef": {
                        "name": "TerritoryID"
                    }
                },
                "dependent": {
                    "role": "EmployeeTerritory_Territory_Source",
                    "propertyRef": {
                        "name": "TerritoryID"
                    }
                }
            }
        }, {
            "name": "Employee_EmployeeTerritories",
            "end": [ {
                "role": "Employee_EmployeeTerritories_Source",
                "type": "Edm.Self.Employee",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            }, {
                "role": "Employee_EmployeeTerritories_Target",
                "type": "Edm.Self.EmployeeTerritory",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Employee_EmployeeTerritories_Source",
                    "propertyRef": {
                        "name": "EmployeeID"
                    }
                },
                "dependent": {
                    "role": "Employee_EmployeeTerritories_Target",
                    "propertyRef": {
                        "name": "EmployeeID"
                    }
                }
            }
        }, {
            "name": "Employee_Orders",
            "end": [ {
                "role": "Employee_Orders_Source",
                "type": "Edm.Self.Employee",
                "multiplicity": "0..1"
            }, {
                "role": "Employee_Orders_Target",
                "type": "Edm.Self.Order",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Employee_Orders_Source",
                    "propertyRef": {
                        "name": "EmployeeID"
                    }
                },
                "dependent": {
                    "role": "Employee_Orders_Target",
                    "propertyRef": {
                        "name": "EmployeeID"
                    }
                }
            }
        }, {
            "name": "Employee_Territories",
            "end": [ {
                "role": "Employee_Territories_Source",
                "type": "Edm.Self.Employee",
                "multiplicity": "*"
            }, {
                "role": "Employee_Territories_Target",
                "type": "Edm.Self.Territory",
                "multiplicity": "*"
            } ]
        }, {
            "name": "Order_OrderDetails",
            "end": [ {
                "role": "Order_OrderDetails_Source",
                "type": "Edm.Self.Order",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            }, {
                "role": "Order_OrderDetails_Target",
                "type": "Edm.Self.OrderDetail",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Order_OrderDetails_Source",
                    "propertyRef": {
                        "name": "OrderID"
                    }
                },
                "dependent": {
                    "role": "Order_OrderDetails_Target",
                    "propertyRef": {
                        "name": "OrderID"
                    }
                }
            }
        }, {
            "name": "Order_InternationalOrder",
            "end": [ {
                "role": "Order_InternationalOrder_Source",
                "type": "Edm.Self.Order",
                "multiplicity": "1"
            }, {
                "role": "Order_InternationalOrder_Target",
                "type": "Edm.Self.InternationalOrder",
                "multiplicity": "0..1"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Order_InternationalOrder_Source",
                    "propertyRef": {
                        "name": "OrderID"
                    }
                },
                "dependent": {
                    "role": "Order_InternationalOrder_Target",
                    "propertyRef": {
                        "name": "OrderID"
                    }
                }
            }
        }, {
            "name": "OrderDetail_Product",
            "end": [ {
                "role": "OrderDetail_Product_Source",
                "type": "Edm.Self.OrderDetail",
                "multiplicity": "*"
            }, {
                "role": "OrderDetail_Product_Target",
                "type": "Edm.Self.Product",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "OrderDetail_Product_Target",
                    "propertyRef": {
                        "name": "ProductID"
                    }
                },
                "dependent": {
                    "role": "OrderDetail_Product_Source",
                    "propertyRef": {
                        "name": "ProductID"
                    }
                }
            }
        }, {
            "name": "Product_Supplier",
            "end": [ {
                "role": "Product_Supplier_Source",
                "type": "Edm.Self.Product",
                "multiplicity": "*"
            }, {
                "role": "Product_Supplier_Target",
                "type": "Edm.Self.Supplier",
                "multiplicity": "0..1"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Product_Supplier_Target",
                    "propertyRef": {
                        "name": "SupplierID"
                    }
                },
                "dependent": {
                    "role": "Product_Supplier_Source",
                    "propertyRef": {
                        "name": "SupplierID"
                    }
                }
            }
        }, {
            "name": "Category_Products",
            "end": [ {
                "role": "Category_Products_Source",
                "type": "Edm.Self.Category",
                "multiplicity": "0..1"
            }, {
                "role": "Category_Products_Target",
                "type": "Edm.Self.Product",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Category_Products_Source",
                    "propertyRef": {
                        "name": "CategoryID"
                    }
                },
                "dependent": {
                    "role": "Category_Products_Target",
                    "propertyRef": {
                        "name": "CategoryID"
                    }
                }
            }
        }, {
            "name": "User_UserRoles",
            "end": [ {
                "role": "User_UserRoles_Source",
                "type": "Edm.Self.User",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            }, {
                "role": "User_UserRoles_Target",
                "type": "Edm.Self.UserRole",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "User_UserRoles_Source",
                    "propertyRef": {
                        "name": "Id"
                    }
                },
                "dependent": {
                    "role": "User_UserRoles_Target",
                    "propertyRef": {
                        "name": "UserId"
                    }
                }
            }
        }, {
            "name": "Role_UserRoles",
            "end": [ {
                "role": "Role_UserRoles_Source",
                "type": "Edm.Self.Role",
                "multiplicity": "1",
                "onDelete": {
                    "action": "Cascade"
                }
            }, {
                "role": "Role_UserRoles_Target",
                "type": "Edm.Self.UserRole",
                "multiplicity": "*"
            } ],
            "referentialConstraint": {
                "principal": {
                    "role": "Role_UserRoles_Source",
                    "propertyRef": {
                        "name": "Id"
                    }
                },
                "dependent": {
                    "role": "Role_UserRoles_Target",
                    "propertyRef": {
                        "name": "RoleId"
                    }
                }
            }
        } ],
        "entityContainer": {
            "name": "NorthwindContext",
            "entitySet": [ {
                "name": "Categories",
                "entityType": "Self.Category"
            }, {
                "name": "Products",
                "entityType": "Self.Product"
            }, {
                "name": "OrderDetails",
                "entityType": "Self.OrderDetail"
            }, {
                "name": "Orders",
                "entityType": "Self.Order"
            }, {
                "name": "Customers",
                "entityType": "Self.Customer"
            }, {
                "name": "Employees",
                "entityType": "Self.Employee"
            }, {
                "name": "EmployeeTerritories",
                "entityType": "Self.EmployeeTerritory"
            }, {
                "name": "Territories",
                "entityType": "Self.Territory"
            }, {
                "name": "Regions",
                "entityType": "Self.Region"
            }, {
                "name": "InternationalOrders",
                "entityType": "Self.InternationalOrder"
            }, {
                "name": "Suppliers",
                "entityType": "Self.Supplier"
            }, {
                "name": "PreviousEmployees",
                "entityType": "Self.PreviousEmployee"
            }, {
                "name": "Roles",
                "entityType": "Self.Role"
            }, {
                "name": "UserRoles",
                "entityType": "Self.UserRole"
            }, {
                "name": "Users",
                "entityType": "Self.User"
            } ],
            "associationSet": [ {
                "name": "Customer_Orders",
                "association": "Self.Customer_Orders",
                "end": [ {
                    "role": "Customer_Orders_Source",
                    "entitySet": "Customers"
                }, {
                    "role": "Customer_Orders_Target",
                    "entitySet": "Orders"
                } ]
            }, {
                "name": "Employee_DirectReports",
                "association": "Self.Employee_DirectReports",
                "end": [ {
                    "role": "Employee_DirectReports_Source",
                    "entitySet": "Employees"
                }, {
                    "role": "Employee_DirectReports_Target",
                    "entitySet": "Employees"
                } ]
            }, {
                "name": "Region_Territories",
                "association": "Self.Region_Territories",
                "end": [ {
                    "role": "Region_Territories_Source",
                    "entitySet": "Regions"
                }, {
                    "role": "Region_Territories_Target",
                    "entitySet": "Territories"
                } ]
            }, {
                "name": "EmployeeTerritory_Territory",
                "association": "Self.EmployeeTerritory_Territory",
                "end": [ {
                    "role": "EmployeeTerritory_Territory_Source",
                    "entitySet": "EmployeeTerritories"
                }, {
                    "role": "EmployeeTerritory_Territory_Target",
                    "entitySet": "Territories"
                } ]
            }, {
                "name": "Employee_EmployeeTerritories",
                "association": "Self.Employee_EmployeeTerritories",
                "end": [ {
                    "role": "Employee_EmployeeTerritories_Source",
                    "entitySet": "Employees"
                }, {
                    "role": "Employee_EmployeeTerritories_Target",
                    "entitySet": "EmployeeTerritories"
                } ]
            }, {
                "name": "Employee_Orders",
                "association": "Self.Employee_Orders",
                "end": [ {
                    "role": "Employee_Orders_Source",
                    "entitySet": "Employees"
                }, {
                    "role": "Employee_Orders_Target",
                    "entitySet": "Orders"
                } ]
            }, {
                "name": "Employee_Territories",
                "association": "Self.Employee_Territories",
                "end": [ {
                    "role": "Employee_Territories_Source",
                    "entitySet": "Employees"
                }, {
                    "role": "Employee_Territories_Target",
                    "entitySet": "Territories"
                } ]
            }, {
                "name": "Order_OrderDetails",
                "association": "Self.Order_OrderDetails",
                "end": [ {
                    "role": "Order_OrderDetails_Source",
                    "entitySet": "Orders"
                }, {
                    "role": "Order_OrderDetails_Target",
                    "entitySet": "OrderDetails"
                } ]
            }, {
                "name": "Order_InternationalOrder",
                "association": "Self.Order_InternationalOrder",
                "end": [ {
                    "role": "Order_InternationalOrder_Source",
                    "entitySet": "Orders"
                }, {
                    "role": "Order_InternationalOrder_Target",
                    "entitySet": "InternationalOrders"
                } ]
            }, {
                "name": "OrderDetail_Product",
                "association": "Self.OrderDetail_Product",
                "end": [ {
                    "role": "OrderDetail_Product_Source",
                    "entitySet": "OrderDetails"
                }, {
                    "role": "OrderDetail_Product_Target",
                    "entitySet": "Products"
                } ]
            }, {
                "name": "Product_Supplier",
                "association": "Self.Product_Supplier",
                "end": [ {
                    "role": "Product_Supplier_Source",
                    "entitySet": "Products"
                }, {
                    "role": "Product_Supplier_Target",
                    "entitySet": "Suppliers"
                } ]
            }, {
                "name": "Category_Products",
                "association": "Self.Category_Products",
                "end": [ {
                    "role": "Category_Products_Source",
                    "entitySet": "Categories"
                }, {
                    "role": "Category_Products_Target",
                    "entitySet": "Products"
                } ]
            }, {
                "name": "User_UserRoles",
                "association": "Self.User_UserRoles",
                "end": [ {
                    "role": "User_UserRoles_Source",
                    "entitySet": "Users"
                }, {
                    "role": "User_UserRoles_Target",
                    "entitySet": "UserRoles"
                } ]
            }, {
                "name": "Role_UserRoles",
                "association": "Self.Role_UserRoles",
                "end": [ {
                    "role": "Role_UserRoles_Source",
                    "entitySet": "Roles"
                }, {
                    "role": "Role_UserRoles_Target",
                    "entitySet": "UserRoles"
                } ]
            } ]
        }
    }
};
