/*
Destructuring in JavaScript


Destructuring is a feature in JavaScript that allows you to extract values from arrays and objects into distinct variables, making it easier to work with data in a more concise and readable way.

In array destructuring, you can extract values from an array and assign them to variables in a single step. For example:
*/

const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


//In object destructuring, you can extract values from an object and assign them to variables with the same name as the object properties. For example:

const { firstName, lastName } = { firstName: 'John', lastName: 'Doe' };
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'


//Destructuring can also be used in function parameters to extract values from objects or arrays passed as arguments. For example:

function printFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
  }
  
  const person = { firstName: 'John', lastName: 'Doe' };
  printFullName(person); // 'John Doe'

  
  