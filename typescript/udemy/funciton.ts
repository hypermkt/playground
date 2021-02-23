function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// 関数型
let combineValues: (a: number, b: number) => number ;

// 関数型とコールバック
addAndHandle(10, 20, (result) => {
  console.log(result);
});

combineValues = add;

console.log(combineValues(8,8))

printResult(add(5, 12));