/*

Block Scope -> variables declared inside a pair of curly braces cannot be accessed from outside the block.

Function Scope -> variables declared inside a function cannot be accessed from outside the function.

Global Scope -> globally scoped variables can be accessed inside a block or a function.

*/

//Nested function scope

let a = 10;
 function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log(a,b,c);
    }
    inner();
 }

 outer();

