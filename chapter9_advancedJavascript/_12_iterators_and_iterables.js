// ------------Iterators And Iterables---------------//

/*

In JavaScript, iterators and iterables are mechanisms that allow you to traverse and access elements of a collection or data structure, such as arrays or strings, in a standardized way. They were introduced as part of the ECMAScript 2015 (ES6) specification to provide a unified iteration protocol.

Here's an overview of iterators and iterables:

Iterables: An iterable is an object that defines an iterator, which is responsible for providing a sequence of values. Any object that implements the Symbol.iterator method is considered iterable. Iterables include arrays, strings, maps, sets, and other built-in JavaScript data structures.

Iterator: An iterator is an object that provides a way to access elements sequentially from an iterable object. It must implement a next() method, which returns an object with two properties: value (the current value) and done (a boolean indicating if there are more values to iterate over). When all elements have been iterated, done is set to true.

*/