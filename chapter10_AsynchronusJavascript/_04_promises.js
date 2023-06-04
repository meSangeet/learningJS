// ---------- Promises -----------------

/*

A promise is a javascript object that links producing and consuming code. it contains both producing code and calls to consuming code

*/

let myPromise = new Promise(function(myResolve, myReject){
    // producing code

    myResolve(); //when successful
    myReject(); //when error
});

//consuming code
myPromise.then(
    function(value){/* code if successful */},
    function(error){/*code if some error */}
)

//when the producing code obtains a result, it should call one of the two callbacks
/*
result      call
success     myResolve(result value)
error       myReject(error object)


Promise object properties

A javascript promise can be 
1. pending
2. fullfilled
3. rejected


the promise object support two properties -> state and result

myPromise.state         myPromise.result
"pending"               undefined
"fullfilled"            a result value
"rejected"              an error object

You cannot directly access the promise properties state and result

we use the the property then to use a promise


*/
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );




// A full reallife code snippet to understand the concept of promise


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise1 = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise1.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  