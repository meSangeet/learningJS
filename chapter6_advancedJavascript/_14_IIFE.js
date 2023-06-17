// ------ Immediately Invoked Function Expression -------- //

/*

IIFE stands for immediately invoked function expression. It is a javascript design pattern that involves defining and immediately executing a function. 
IIFE allows you to create a self contained scope for your code and helps avoid polluting the global namespace.

Here's the basic structure of IIFE:

*/

(function(){
    //your code goes here
})

//In this example, an anonymous function is defined and immediately invoked using the parentheses at the end `( )`. 
//The function is enclosed within another pair of parenthesis () which are called grouping operator,
// it makes it a function expression rather than a function declaration, This prevents any conflicts with the javascript syntax.

//you can also pass arguments to an IIFE
let value1 = 2, value2 = 4;
(function(arg1, arg2){
    // your code goes here
})(value1, value2);

// in the above case, value 1 and value 2 are passed as arguments to the IIFE, and you can use them within the function body as arg1 and arg2, respectively.

// one common use case for IIFEs is to create a private scope for your code. Any variables and functions defined within the IIFE are not accessible from the outside, which helps prevent naming collisions and promotes encapsulation.

//eg - 

(function(name){
    var Name = name;
    
    console.log(`hello ${name}`);
})('Sangeet');