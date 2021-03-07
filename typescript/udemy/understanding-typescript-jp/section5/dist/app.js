"use strict";
// 構造だけの定義
// インターフェースとカスタムタイプ
// インターフェース: オブジェクトの構造 => 明確
// カスタムタイプ: 
// interface Person {
// type Person = {
//   name: string;
//   age: number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = 'age';
    }
    Person.prototype.greet = function (phrase) {
    };
    return Person;
}());
