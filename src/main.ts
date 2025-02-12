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

// class Person {
//   name: string;
//   age: number;

//   constructor (name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const person = new Person("John Connor", 30);
// console.log(person);

// const numbers: number[] = [];
// numbers[0] = 10;
// numbers[1] = 11;
// numbers[2] = 12;
// console.log(numbers);
// class Person {
//   name: string;

//   constructor (name: string) {
//     this.name = name;
//   }
// }

// const people: Person[] = [];
// people[0] = new Person('John');
// console.log(people); 

interface Entity {
  id: string;
}

interface Person {
  name: string;
  age: number;
  paradigm: string;
}

type PersonEntity = Person & Entity;

const people: PersonEntity[] = [];
people[0] = { id: 'x1', name: 'John', age: 30, paradigm: 'OOP' };
people[1] = { id: 'x2', name: 'Doe', age: 30, paradigm: 'FP' };

console.log(people);
