import _ from 'underscore';

// arrayの中で最初に一致したインデックス値を返す。見つからなければ-1を返す。
// ref: http://underscorejs.org/#findIndex
const a = _.findIndex([1, 2, 3, 4, 5], (num) => {
  console.log("num = " + num);
  return num % 2 == 0; 
});
console.log(JSON.stringify(a));

const b = _.findIndex([1, 2, 3, 4, 5], (num) => {
  console.log("num = " + num);
  return num == 6; 
});
console.log(JSON.stringify(b));
