// class Book {
//   constructor (public title: string) {}
// }

// let book: Book;
// book = new Book('Clean Code');

// function init (port: number) {
//   console.log(port);
// }

// init(80);

// function add (a: number, b: number): number {
//   return a + b;
// }

// console.log(add(1, 2));

class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("John Connor", 30);
console.log(person);