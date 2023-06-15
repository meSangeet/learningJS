/*

---------- JavaScript Callbacks -------------

A callback is a function passed as an argument to another function This technique allows a function to call another function.
A callback function can run after another function has finished.

*/

function resultDisplay(marks)
{
    console.log('you scored ' + marks);
}

function resultCalculator(num1, num2, displayfunction)
{
    let marks = num1 + num2
    displayfunction(marks);
}

resultCalculator(3,4,resultDisplay);

// in the above example resultDisplay is a callback function


//Note - when you pass a function as an argument, remember not to use parenthesis


//  Functions running in parallel with other functions are called asynchronous . Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead


// Asynchronous programmes are difficult to write and difficult to debug. Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using promises instead.

