const functionName = (parameter1, parameter2) => {
    // Function body
  };
  

 // here is an example of a fat arrow function that calculates the square of a number
 
 const square1 = (num) =>{
    return num*num;
 }

 // it can also be written as

 const square2 = (num) => num*num;


/*

Arrow functions have some additional features and behaviors worth noting:

Lexical this: Arrow functions do not have their own this value. Instead, they lexically capture the this value of the enclosing context. This can be useful in avoiding confusion with the this keyword in traditional functions.

No arguments object: Arrow functions do not have their own arguments object. However, you can still access the arguments of the enclosing function through lexical scoping.

Cannot be used as constructors: Arrow functions cannot be used as constructors to create new objects. They lack the prototype property and do not have their own this binding.

Arrow functions are especially handy when you need a concise and straightforward function expression. However, be aware of their limitations and ensure they are appropriate for your specific use case.
 

*/