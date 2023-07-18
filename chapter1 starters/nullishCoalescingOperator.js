// --------- Nullish Coalescing Operator --

// This operator return the right hand value if the left hand value is null or undefined.

//The Nullish Coalescing Operator is defined by two adjacent question marks ??


//when we use or(||) operator it cannot handle 0 as it will return the right value even if the value of left hand side is 0

var bar = 0;
var car = bar || 42;

console.log(car); // prints 42

var tar = bar ?? 42;

console.log(tar)