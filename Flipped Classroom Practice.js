// 1.1 Given the following array of objects

// let people = [
//   { name: "Bob", age: 30 },
//   { name: "Hamed", age: 15 },
//   { name: "John", age: 20 },
//   { name: "Elise", age: 35 },
//   { name: "Nasir", age: 24 },
// ];

// Use the appropriate array method(s) to

//     Log to the console an array containing the people older than 25
//     Log to the console an array containing the names of the people

// [ { name: 'Bob', age: 30 }, { name: 'Elise', age: 35 } ]
// [ 'Bob', 'Hamed', 'John', 'Elise', 'Nasir']


let people = [
  { name: "Bob", age: 30 },
  { name: "Hamed", age: 15 },
  { name: "John", age: 20 },
  { name: "Elise", age: 35 },
  { name: "Nasir", age: 24 },
];

// Log to the console an array containing the people older than 25
let olderThan25 = people.filter(person => person.age > 25);
console.log(olderThan25);

It prints: [{name: "Bob", age: 30}, { name: "Elise", age: 35 }]

// Log to the console an array containing the names of the people
let names = people.map(person => person.name);
console.log(names);

It prints: [ 'Bob', 'Hamed', 'John', 'Elise', 'Nasir']


