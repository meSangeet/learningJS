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


// Asynchronous programs are difficult to write and difficult to debug. Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using promises instead.



// callback hell

/*

Callback hell, also known as the pyramid of doom, is a term used in asynchronous programming to describe a situation where callbacks are nested within callbacks, resulting in deeply indented and complex code. It occurs when working with functions or tasks that depend on the completion of other asynchronous operations.

In languages that use callback-style asynchronous programming, such as JavaScript, callbacks are functions that are passed as arguments to other functions. These callbacks are executed when an asynchronous operation, such as reading from a file or making an API call, completes.

When multiple asynchronous operations need to be executed sequentially or dependent on each other, developers often end up nesting these callbacks. Each callback contains the code that should be executed after the completion of the previous asynchronous operation. As more operations are added, the indentation level of the code increases, resulting in an unreadable and difficult-to-maintain code structure.

Here's an example of callback hell in JavaScript:
*/

asyncOperation1(arg1, function(result1) {
    asyncOperation2(arg2, function(result2) {
        asyncOperation3(arg3, function(result3) {
            // More nested callbacks...
        });
    });
});

/*
As you can see, the code becomes increasingly nested and harder to follow as more operations are added. This can make the code difficult to understand, debug, and maintain. It also makes error handling and control flow more complex.

To mitigate callback hell, several techniques have been developed over the years. One approach is to use named functions instead of anonymous callbacks, which can improve code readability. Another solution is to use control flow libraries or frameworks that provide more structured and readable ways to handle asynchronous operations, such as Promises or async/await in JavaScript.

By adopting these techniques, developers can write asynchronous code that is more readable, modular, and maintainable, avoiding the pitfalls of callback hell.
*/
