// Intersection Types(交差型)

type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

// 型エイリアスオブジェクトを結合できる
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['hoge'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guides(型ガード)

// 関数オーバーロード
// 下の関数にマージする
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: Combinable, b: Combinable) {
  // これが型ガード
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();

  }
  // ここに入るのは number 型であることが担保される
  return a + b;
}

const result = add('Hello', 'TypeScript');

const fechedUserData = {
  id: 'u1',
  name: 'user1',
  job: {
    title: 'Developer',
    description: 'TypeScript'
  },
};

// オプショナルチェイン
console.log(fechedUserData?.job?.title);


// NULL 合体演算子
const userInput = null;

// null or undefined ならデフォルト値を利用する
const storedData = userInput ?? 'Default';

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