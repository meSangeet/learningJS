// ---------- Promises -----------------

/*

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 



Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 
Multiple callback functions would create callback hell that leads to unmanageable code. Also it is not easy for any user to handle multiple callbacks at the same time.
Events were not good at handling asynchronous operations.

A promise is a javascript object that links producing and consuming code. it contains both producing code and calls to consuming code


Benefits of Promises 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling
A Promise has four states: 
1. fulfilled: Action related to the promise succeeded
2. rejected: Action related to the promise failed
3. pending: Promise is still pending i.e. not fulfilled or rejected yet
4. settled: Promise has fulfilled or rejected
A promise can be created using Promise constructor.
Syntax


*/

//promise constructor syntax

// var promise = new promise(function(resolve, reject){
//   //do something
// })

/*

Parameters 
Promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function too).
Callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.


*/

//note that Promise p is capital
var myPromise = new Promise((resolve, reject)=>{
  let passingMarks = 50;
  let marks = 60;

  if(marks > passingMarks) resolve();
  else reject();
});

myPromise.then(()=>{
  console.log('yess you passed');
}).catch(()=>{
  console.log('better luck next time');
})

/*
Promise consumers

Promises can be consumed by registering functions using .then and .catch


1. then()

then() is invoked when a promise is either resolved or rejected. It may also be defined as a carrier which takes data from promise and further executes is successully.

then() method takes two functions as parameters first function is executed if promise is resolved and a result is recieved.
Second function is executed if a promise is rejected and an error is received. (it is optional and there is a better way to handle using .catch() method).


catch()  -> invoked when a promise is either rejected or some error has occured in execution. It is used as an error handler whenever at any step there is a chance of getting an error.



Applications -

1. promises are used for asynchronous handling of events.

2. promises are used to handle asynchronous http requests.

*/