/*

-------- Timeouts And Intervals ---------

The traditional methods JavaScript has available for running code asynchronously -

1. after a set time period elapsed or
2. at regular intervals of time


setTimeout()

it executes a particular block of code adter a specified time has elapsed

1) The first parameter is a function to run, or a reference to a function defined elsewhere

2) The second paramter is a number representing the duration in milliseconds to wait before executing the code

3) After the second parameter, you can pass in zero or more values that represent any parameters you want to pass to function when it is run


*/
let a = 1
function recursion()
{
    console.log(a++);
    setTimeout(recursion, 1000);
}

recursion();

clearTimeout(recursion, 5000);


/*

setInterval()

this function repeatedly runs the same code over and over again at regular intervals. 

setInterval(function, duration, other parameters passed in function)

*/

//example

setInterval(()=>{
    console.log('Hello')
}, 2000)

//------------clearInterval and clearTimeout---------


/*

In JavaScript, clearInterval and clearTimeout are functions used to cancel the execution of scheduled code. They are typically used when working with timers or intervals to stop the execution of a function that was previously scheduled to run at a specific time or repeatedly at a defined interval.

Here's a brief explanation of each function:

clearInterval(intervalId): This function is used to cancel the repeated execution of a function that was set up using the setInterval function. It takes the intervalId as a parameter, which is the identifier returned by the setInterval function when the interval was initially set up. Calling clearInterval(intervalId) will stop the function from executing repeatedly.

Here's an example of how to use setInterval and clearInterval:

*/

// Set up an interval to execute a function every 1 second
const intervalId = setInterval(() => {
    console.log('Executing function every second...');
  }, 1000);
  
  // Clear the interval after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared.');
  }, 5000);

  
/*
clearTimeout(timeoutId): This function is used to cancel the execution of a function that was scheduled to run after a specific delay using the setTimeout function. It takes the timeoutId as a parameter, which is the identifier returned by the setTimeout function when the timeout was initially set up. Calling clearTimeout(timeoutId) will prevent the function from executing.

Here's an example of how to use setTimeout and clearTimeout:
*/

// Set up a timeout to execute a function after 3 seconds
const timeoutId = setTimeout(() => {
    console.log('Executing function after 3 seconds...');
  }, 3000);
  
  // Clear the timeout before it executes
  clearTimeout(timeoutId);
  console.log('Timeout cleared.');
