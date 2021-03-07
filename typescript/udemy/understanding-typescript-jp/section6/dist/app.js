"use strict";
// Intersection Types(交差型)
var _a;
var e1 = {
    name: 'Max',
    privileges: ['hoge'],
    startDate: new Date(),
};
function add(a, b) {
    // これが型ガード
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    // ここに入るのは number 型であることが担保される
    return a + b;
}
var result = add('Hello', 'TypeScript');
var fechedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'TypeScript'
    },
};
// オプショナルチェイン
console.log((_a = fechedUserData === null || fechedUserData === void 0 ? void 0 : fechedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// NULL 合体演算子
var userInput = null;
// null or undefined ならデフォルト値を利用する
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployee(emp: UnknownEmployee) {
//   console.log(emp.name);
//   // in でプロパティの存在チェックをしている = 型ガード
//   if ('privileges' in emp) {
//     console.log(emp.privileges);
//   }
// }
// class Car {
//   drive() {
//     console.log('driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Track driving...');
//   }
//   loadCargo(amount: number) {
//     console.log('荷物を載せています' + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVecle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }
//   // if ('loadCargo' in vehicle) {
//   //   vehicle.loadCargo(1);
//   // }
// }
// useVecle(v1);
// useVecle(v2);
// // Discrimininated Unions(判別されるUnion型)
// // 共通のプロパティで判断できる
// interface Bird {
//   type: 'bird',
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   // if("flyingSpeed" in animal) {
//   //   console.log(animal.flyingSpeed);
//   // }
//   let speed;
//   switch(animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("移動速度: " + speed);
// }
// // Type Casting 型キャスト
// // const paragraph = <HTMLInputElement>document.getElementById('message_output');
// // ! <= 絶対に NULL ではない
// const paragraph = document.getElementById('message_output') as HTMLInputElement;
// // const paragraph = document.querySelector('p');
// // インデックス型 Index Signature
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const  errorBag: ErrorContainer = {
//   email: '正しいメールアドレスではありません',
//   userName: "ユーザー名に記号を含めることはできません。",
// };
// Function Overload 関数オーバーロード
// オプショナルチェイン
