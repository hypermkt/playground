// 構造だけの定義
// インターフェースとカスタムタイプ
// インターフェース: オブジェクトの構造 => 明確
// カスタムタイプ: 
// interface Person {
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// // object
// user1 = {
//   name: 'Max',
//   age: 10,
//   greet(phrase: string) {
//     console.log(phrase);
//   }
// }

// class Hoge implements Person {
//   name: string;
//   age: number;

//   constructor() {
//     this.name = 'age';
//     this.age = 10;
//   }

//   greet(phrase: string) {
    
//   }
// }

// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}


interface Named {
  readonly name: string;
  outputName?: string; // optional: 持っているかどうかはどちらでも良い
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n?: string) {
    this.name = 'age';
  }

  greet(phrase: string) {

  }

}