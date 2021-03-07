class Department {
  // 注意点: インスタンスからはアクセスできない。なぜならインスタンスは static ではない。
  // ○: Department.static_variable ×: this.static_variable
  static fiscalYear = 2020;

  // name: string;
  // public, protected, private
  protected employees: string[] = [];

  // 静的メソッド
  static createEmployee(name: string) {
      return { name: name };
  }

  constructor(public readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
    console.log(`ID: ${this.id}, name: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT')

    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter
  get mostRecentReport() {
    return this.lastReport;
  }

  // setter
  set mostRecentReport(value: string) {
      this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'IT')
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  // オーバーライド
  addEmployee(name: string) {
    if (name == 'Max') {
      return;
    }

    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1,Department.fiscalYear);

const accounting = new AccountingDepartment('d1', ['中間決算']);
accounting.describe();
accounting.addEmployee('Max')
accounting.addEmployee('Jenny')
accounting.addReport('Kessan');
accounting.printEmployeeInfo();

console.log(accounting.mostRecentReport);

console.log(accounting)

// console.log(accounting.name);