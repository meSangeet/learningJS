// ------------Iterators And Iterables---------------//

/*

In JavaScript, iterators and iterables are mechanisms that allow you to traverse and access elements of a collection or data structure, such as arrays or strings, in a standardized way. They were introduced as part of the ECMAScript 2015 (ES6) specification to provide a unified iteration protocol.

Here's an overview of iterators and iterables:

Iterables: An  iterable is an object that defines an iterator, which is responsible for providing a sequence of values. Any object that implements the Symbol.iterator method is considered iterable. Iterables include arrays, strings, maps, sets, and other built-in JavaScript data structures.

Iterator: An iterator is an object that provides a way to access elements sequentially from an iterable object. It must implement a next() method, which returns an object with two properties: value (the current value) and done (a boolean indicating if there are more values to iterate over). When all elements have been iterated, done is set to true.

in the normal iteration in javascript eg- normal for loop

1. There is a difficulty in accessing the element

2. Difficult to manage iteration on the data for various types of data structures


There was a need to iterate over various data structures in a new way that abstracts away the complexity of accessing elements one by one and was at the same time uniform across the different data structures.


Iterables and iterators help us to work upon every single data and allow us to operate upon that data rather than to think about how to access that data.

An object which implements the iterable protocol is called an iterable.

Iterable Protocol - For an objecct to be an iterable it must implement a method at the key. [Symbol.iterator]

That method should not accept any argument and should return an object which conforms to the iterator protocol.

The iterator protocol decides whether an object is an iterator.

The object must have a next() method that returns an object with two properties 

1. value -> which gives the current element.
2. done -> which is a boolean value indicating whether or not there are any more elements that could be iterated upon.


*/

const obj = {
    [Symbol.iterator]: function(){
        let step = 0

        const iterator = {
            next: function(){
                step++
                if(step == 1){
                    return {value: 'Hellloo', done: false}
                }else if(step == 2){
                    return {value:  'World', done: false}
                }
                return {value: undefined, done:true}
            }
        }
        return iterator 
    }
}


for (const word of obj){
    console.log(word);
}