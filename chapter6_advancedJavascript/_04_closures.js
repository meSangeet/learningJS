//  closures in javascript 

/*

when a function is created inside another function, then the inner function gets the access to the outer variable. If the outer function returns the innter function then a closure is created which contains the reference of the variables of the outer function in a private memory called the closure space. And if the outer function is called off still the returned inner function can access the variables of the outer function.

*/

const outerFunction = (a) => {
let outerVariable = a+20;
const innerFunction = (b) => {
    console.log(outerVariable + b);
}
return innerFunction(25);
}

const inner = outerFunction(10); //now outer function is called with paramter 10 so the outer variable became 30, it returned inner funtion with parameter 25 so now the inner function is bound to print (30+25) = 55 if in case it is called. And after this the outer function is over and inner contain the inner function. but it contains a closure space which contains the reference to the outerVariable so if we call the inner function it should still print 55.

inner; // this will print 55