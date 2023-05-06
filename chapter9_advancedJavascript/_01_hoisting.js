//hoisting
/*
Hoisting is a term used in JavaScript to describe the behavior of how variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that variables and functions can be used before they are actually declared in the code.

For example, the following code demonstrates hoisting behavior with a variable declaration using the var keyword:
*/

console.log(x); // undefined
var x = 10;

//In this code, even though x is declared after it is used in the console.log() statement, it does not result in an error. This is because the var declaration is moved to the top of its scope (which is either the function or the global scope), resulting in the declaration being "hoisted" to the top of the scope. So the above code is actually interpreted as follows:


var x;
console.log(x); // undefined
x = 10;

//This behavior can be confusing and lead to unintended bugs, especially when combined with variable scoping. For example, consider the following code:


function foo() {
  console.log(x); // undefined
  var x = 10;
}

foo();


//In this code, x is declared inside the foo() function, but it is used before its declaration. However, due to hoisting, x is actually declared at the top of the foo() function's scope, resulting in x being undefined when it is first logged.

//It's important to note that hoisting only applies to variable and function declarations, not to assignments. For example, the following code will result in a ReferenceError:

let a;
console.log(a); // ReferenceError: x is not defined
a = 10;

//In general, it is recommended to declare all variables and functions at the top of their respective scopes to avoid confusion and unintended bugs caused by hoisting.