/*

In JavaScript, let, const, and var are used to declare variables. However, they differ in terms of their scope, mutability  (tendency to change  in this case it mean whether we can change the values and properties of the variable or not), and hoisting behavior.


var:

var was the original keyword used to declare variables in JavaScript. Variables declared with var are function-scoped, meaning that they are accessible within the function in which they are declared, as well as any nested functions. var variables are also hoisted, which means that they are moved to the top of the function or global scope in which they are declared, regardless of where the actual declaration occurs. Additionally, var variables are mutable, which means that their value can be reassigned.


*/

// function foo() {
//     var x = 10;
//     if (true) {
//       var x = 20;//changed the original value of x outside the scope too as the variable is hoisted to the top of the function
//       console.log(x); // 20
//     }
//     console.log(x); // 20
//   }
//   foo();
//   console.log(x);

  /*
let:

let was introduced in ES6 as an alternative to var. Variables declared with let are block-scoped, meaning that they are only accessible within the block in which they are declared, including any nested blocks. let variables are not hoisted, so they cannot be accessed before their declaration. Additionally, let variables are mutable, which means that their value can be reassigned.

Example:
  */

// function foo() {
//     let x = 10;
//     if (true) {
//       let x = 20;
//       console.log(x); // 20
//     }
//     console.log(x); // 10  still 20 no hoisting
//   }
  

// //hoisting difference between let and var
// function hoist(){

//     console.log(varDec); //show undefined but variable is hoisted to top  (in hoisting just the declarations are moved to top and not the initialisation).
//     console.log(letDec); //throw error that letDec cannot be accessed before its initialisation
//     var varDec = 2;
//     let letDec = 'i am not hoisted';
    
//     console.log(varDec);
// }
// hoist();


/*

const:

const was also introduced in ES6 and is used to declare variables whose value should not change throughout the execution of the program. Variables declared with const are also block-scoped, and they are not hoisted. However, const variables are not mutable, which means that their value cannot be reassigned.

*/

// now we can see that both let and const are block scoped and they are not hoisted. while the var is function scoped and it is hoisted at the top. Now let's check the differnece between the block scoping and function scoping concept using the examples of let and var

// function scoping

function foo() {
    var x = 10;
    if (true) {
      var y = 20;
      console.log(x); // 10
      console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // 20
  }
  
  foo();
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined

  
  // block scoping

  function bar() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x); // 10
      console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // ReferenceError: y is not defined
  }
  
  bar();
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined
  