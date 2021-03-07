"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("hello");
// 変数
// 定数 変更不可
// const はブロックスコープ
var userName = 'Max';
// 変数 変更可能
// let はブロックスコープ
var hoge = 'fuga';
// アロー関数
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
// 式が１つだけの場合はブロックなしで書け
var add2 = function (a, b) { return a + b; };
console.log(add(1));
//  デフォルト値
// array やオブジェクトからデータを取得する
var hobbies = ['sports', 'cooking'];
var activeHobbies = ['Soccer'];
// スプレッド演算子 ... 配列を展開として引数のリストとして一括で展開
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Max',
    age: 30,
};
// addressを渡しているだけ
var coppiedPerson1 = person;
// 新しい変数を定義
var coppiedPerson2 = __assign({}, person);
// rest parameter
// スプレッド演算子は値も受け取れる
var add3 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumber = add3(5, 10, 2, 3.7);
console.log(addedNumber);
// 分割代入 
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
var hobby1 = hobbies[0], hobby2 = hobbies[1];
var firstName = person.firstName, age = person.age;
