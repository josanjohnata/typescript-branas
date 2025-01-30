// class Book {
//   constructor (public title: string) {}
// }

// let book: Book;
// book = new Book('Clean Code');

function init (port: number) {
  console.log(port);
}

init(80);

function add (a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));