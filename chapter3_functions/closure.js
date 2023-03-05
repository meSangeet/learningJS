/*
Lexical Scope In Javascript

Lexical scope of a function is the scope of the parent function in which it is created. In other words, an item's lexical scope is the place in which the item got created.

Closure In Javascript

A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer functions scope from an inner function even after the outer function is gone. 

for example

function sum(var a)
{
    var b = 4;
    function y(var c)
    {
        return a+b+c;
    }
    return y;
}

var z = sum(2);

above line will assign a function y to the variable z.
so now the z variable looks like 
z = function(var c)
{
    return a+b+c;
}

but now we don't have a and b   yet if we call z(2) we will get 2 + 4 + 2 = 8. this is because the values of a and b were in the closure of y function. for more understanding checkout the closure.js file in the folder chapter 3.
*/
//let's create a function inside another function

var parent = function(a)
{
    var b = 4;
    var child = (c) => a+b+c; //child function 
    return child; //parent function returns child function
}

var small = parent(2);

//now small contains the child function which was returned by the parent function
/*
so as of now 
small = function(c)
{
    return a+b+c;
}
we will pass the value of c and we will get the value of a and b from the lexical scope of the child function.
closure is the combination of the function and its lexical scope.
in the lexical scope of the child function the values of a and b are 2 and 4 respectively

so if we call small(5) we should get a value 2 + 4 + 5 = 11.
*/

console.log(`the small function definition\n`)
console.log(small)
console.log(' ')
console.log(small(5))

