import _ from 'underscore';

// listの中で最初に一致したのを返す。見つからなければundefinedを返す
// ref: http://underscorejs.org/#find
const a = _.find([1, 2, 3, 4, 5], (num) => {
  console.log("num = " + num);
  return num % 2 == 0; 
});
console.log(JSON.stringify(a));

const b = _.find([1, 2, 3, 4, 5], (num) => {
  console.log("num = " + num);
  return num == 6; 
});
console.log(JSON.stringify(b));
