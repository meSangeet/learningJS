// ----------- generators in javascript --------------

/*
in JavsScript, generators are functions that can be paused and resumed, allowing for the generation of a sequence of values. They are defined using function* syntax and can use the `yield` keyword to produce a value and suspend execution
*/

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

// create an instance of the generator
const generator = numberGenerator();

// calling the generator function returns an iterator
// we can use the iterator's next() method to retrieve the next value 
console.log(generator.next().value); //output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); //Output: undefined

/*
In the above example the numberGenerator function is a generator that yields the values 1, 2 and 3. Each time we call the next() method on the generator object
*/

//Generators can also receive values from outside using the yield keyword 
function* wordGenerator(){
    const x = yield "First value";
  const y = yield "Second value";
  yield x + y;
}

const generatorObj = wordGenerator();
console.log(generatorObj.next().value); // Output: "First value"
console.log(generatorObj.next(2).value); // Output: "Second value"
console.log(generatorObj.next(4).value); // Output: 6

//In this case, when we call generator.next(2), the value 2 is passed as the result of the previous yield expression. Similarly, when we call generator.next(4), the value 4 is assigned to the variable y and used in the final yield expression.
