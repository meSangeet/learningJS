// Nested functions scoping in javascript

/*
In JavaScript, nested function scope refers to the ability to define a function inside another function. When a function is defined inside another function, it creates a new scope that is nested within the scope of the outer function. This allows the inner function to access variables and parameters that are defined in the outer function, but not visible outside of it.

The following example illustrates nested function scope:
*/

function outerFunction() {
    let outerVariable = "outer";
  
    function innerFunction() {
      let innerVariable = "inner";
      console.log(outerVariable); // access outerVariable
    }
  
    innerFunction();
    console.log(innerVariable); // ReferenceError: innerVariable is not defined
  }
  
  outerFunction();

  /*
In this example, innerFunction() is defined inside outerFunction(), creating a nested scope. The inner function can access the outerVariable defined in the outer function, but the innerVariable defined in the inner function is not accessible outside of it. This is because the innerVariable is declared with let keyword, which has block-level scope, and its scope is limited to the block in which it is defined.
  */