// type conersion   -> there are two types of type conversion

// implicit conversion -> javascript automatically converts the datatype for eg - 
let a = "this is 8 now this is converted ";
a+=8;
console.log(a);
// the integer 8 is converted to character before the concatenation and this is done by the javascript itself

//explicit type conversion -> Manual conversion NOTE-> datatype names start with a capital letter

console.log(Number(true));
console.log(Number('a'));
console.log(Number('8'));
console.log(String(8));


/*
            SCOPE IN JAVASCRIPT

        scope  determines the accessibility and visibility of the variables

    there are three types of scopes
    1. Block scope
    2. Function scope
    3. Global scope

    Block scope
    variables declared inside the curly braces cannot be accessed outside the block

    Function scope
    variables declared in the function cannot be accessed outside that particular function

    Global scope 
    we can access the globally scoped  variable in the function. but if same variable is declared inside the function then
    it will not override the block or function scoped variable
*/

const globalVariable = 'i am globally scoped';
if(1)
{
    console.log('\n\nblock started\n\n');
    let blockScoped = 'i am block scoped';
    console.log(blockScoped);
    const globalVariable = 'overridden globally scoped variable';
    console.log(globalVariable);
    console.log('\n\nblock ended\n\n');
}

console.log(blockScoped); //this will throw error

