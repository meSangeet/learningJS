// ---------- Promises -----------------

/*

A promise is a javascript object that links producing and consuming code. it contains both producing code and calls to consuming code

*/
/*
let myPromise = new Promise(function(myResolve, myReject){
    // producing code

    myResolve(param1); //when successful
    myReject(param2); //when error
});

//consuming code
myPromise.then(
    function(value){/* code if successful
    value -> param1 },
).catch(
  function(error){/* code if not successfull 
    error -> param2   }
)

*/


/* let's say that my friend promised me to give 1000 rupees in next 3 seconds and we have to check whether the promise was 
was successfull or not*/

let myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1000) //yes we get 1000
  },3000)
  });

  myPromise.then((money) => {
    if(money == 1000){
      console.log("Yay! I got my money back");
    }
  }).catch((error)=>{
    console.error("A false promise");
  })
  // catch diretly called after then is called  promise chaining

/*
let's say we need a reject condition  instead of resolve(1000) you can write

reject(new Error("promise not fullfilled"));
*/


// different states of promise

// fullfilled state - successful outcome
// rejected state - error
// pending state - neither fullfilled nor rejected    ->  wait time
// settled state - it represents - fullfilled state / rejected state
  
/* Promise Chaining --- > 
the outcome of one promise then statement will be available for the next chained function then
*/

let promise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject(new Error("this promise was not fullfilled"))
  }, 5000);
})

promise2.then((param)=>{
  console.log("promise fullfilled")
}).catch((error)=>{
  console.log("O shit", error.message);
  return "returned string"
}).then((param2)=>{
  console.log(param2);
})