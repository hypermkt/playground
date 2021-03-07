// デコレーターはクラスの定義を見つけた時に実行する
// デコレーター関数
function Logger(logString: string) {
  // デコレーターファクトリ
  return function (constructor: Function) {
    console.log(logString);
    console.log(console);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEL = document.getElementById(hookId);
    if (hookEL) {
      hookEL.innerHTML = template;
    }
  }
}

// @Logger('ログ出力中 PERSON')
@WithTemplate("<h1>Hey</h1>", "app")
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating Person Object');
  }
}

const person = new Person();
console.log(person);