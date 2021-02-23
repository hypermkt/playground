// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple型
// } = {
//   name: 'taro',
//   age: 10,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN, READONLY, USER
}

const person = {
  name: 'taro',
  age: 10,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};


let favoritvjeActivities: any[];
favoriteActivities = ['Sports', 'Game']

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person);

if (person.role == Role.ADMIN) {
  console.log("admin user");
}