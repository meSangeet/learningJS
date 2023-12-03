//------- Async / Await Function -----//

/*
Async/Await is the extension of promises which we get as a support in the language. 

Async: 

It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.


Await:

Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
*/


console.log(1);
console.log(2);
const getData = async() => {
    var a = 3
    var b = await a;
    console.log(b);
}

getData();
console.log(4);
console.log(5);