// ジェネリック型 特定の型と組み合わせた型
// ジェネリック型, Array, Promise
// const names: Array<string> = []; // string[] と同じ

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);

}

const mergedObj = merge({ name: 'Max' }, { age: 30 });

mergedObj.age;

class DataStorage<T> {
  prtivate data: T[] = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('age');

const numberStorage = new DataStorage<number>();
textStorage.addItem(1);

// const objStorage = new DataStorage<object>();
// textStorage.addItem({name: 'Max'});