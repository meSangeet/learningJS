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