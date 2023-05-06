//setTimeout Function

/*
The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

Syntax
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, ... paramN)
*/

setTimeout((n)=>{
   console.log(n); 
}, 1000);


// type conersion   -> there are two types of type conversion

// implicit conversion -> javascript automatically converts the datatype for eg - 
let a = "this is 8 now this is converted ";
a+=8;
console.log(a);
// the integer 8 is converted to character before the concatenation and this is done by the javascript itself

