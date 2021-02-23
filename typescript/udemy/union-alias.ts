type Combinable = number | string;
type CombinableFormat = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  format: 'as-number' | 'as-text'
  ) {
  let result;

  if (format === 'as-number') {
    result = +input1 + +input1;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const result1 = combine(1, 2, 'as-number');
console.log(result1);

const result2 = combine('Max', 'Power', 'as-text');
console.log(result2);

const result3 = combine('1', '2', 'as-number');
console.log(result3);