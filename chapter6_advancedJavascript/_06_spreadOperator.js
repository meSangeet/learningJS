// Spread Operator

// In JavaScript, the spread operator ... is used to expand an iterable (like an array or a string) into individual elements. It can be used in a variety of contexts, including:

const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3


const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers); // [1, 2, 3, 4, 5, 6]


// Object Literals

// In the example below the spread operator is used to copy the properties of the person object into a new employee object, and add a new jobTitle property

const person = { name: 'John', age: 30 };
const employee = { ...person, jobTitle: 'Developer' };
console.log(employee); // { name: 'John', age: 30, jobTitle: 'Developer'}


