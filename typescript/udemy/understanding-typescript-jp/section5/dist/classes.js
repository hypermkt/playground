"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        // public, protected, private
        this.employees = [];
        // this.name = name;
    }
    // 静的メソッド
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
        console.log("ID: " + this.id + ", name: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // 注意点: インスタンスからはアクセスできない。なぜならインスタンスは static ではない。
    // ○: Department.static_variable ×: this.static_variable
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // getter
        get: function () {
            return this.lastReport;
        },
        // setter
        set: function (value) {
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    // オーバーライド
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name == 'Max') {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
var accounting = new AccountingDepartment('d1', ['中間決算']);
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Jenny');
accounting.addReport('Kessan');
accounting.printEmployeeInfo();
console.log(accounting.mostRecentReport);
console.log(accounting);
// console.log(accounting.name);
