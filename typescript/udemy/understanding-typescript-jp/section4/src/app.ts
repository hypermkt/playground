console.log("hello");

// 変数

// 定数 変更不可
// const はブロックスコープ
const userName = 'Max';

// 変数 変更可能
// let はブロックスコープ
let hoge = 'fuga';


// アロー関数

const add = (a: number, b = 1) => {
  return a + b;
}

// 式が１つだけの場合はブロックなしで書け
const add2 = (a: number, b: number) => a + b;

console.log(add(1));

//  デフォルト値

// array やオブジェクトからデータを取得する

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['Soccer'];

// スプレッド演算子 ... 配列を展開として引数のリストとして一括で展開
activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

// addressを渡しているだけ
const coppiedPerson1 = person;

// 新しい変数を定義
const coppiedPerson2 = {
  // key valueで展開
  ...person,
};

// rest parameter
// スプレッド演算子は値も受け取れる
const add3 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumber = add3(5, 10, 2, 3.7);
console.log(addedNumber);

// 分割代入 

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2] = hobbies;

const {
  firstName,
  age, 
} = person;