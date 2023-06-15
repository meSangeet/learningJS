// ------ prototype ------

/* 




In JavaScript, the prototype is an internal property of an object that allows objects to inherit properties and methods from other objects. It is a fundamental concept in JavaScript's prototypal inheritance model.

Every object in JavaScript has a prototype, which can be accessed using the [[Prototype]] (or "dunder prototype") property. The prototype itself is an object that contains properties and methods that are shared among all instances of a particular object type or constructor function.




let's say we want to create many instances of an object using the new binding. and we want to create a function for the object then it will be created for that particular instance only.
let's see that with an example

*/
//  note -> the function below is called the constructor function
function person(fname, lname){
    this.fname = fname
    this.lname = lname
}

const person1 = new person('Sangeet', 'Sharma')
const person2 = new person('Tanya', 'Gupta')

// now we have two instances of the object person
// now i want to create a function which i can use for all the objects

person1.sayMyName = function(){
console.log(this.fname + " " + this.lname);  
}

person1.sayMyName()
// above function call will print sangeet sharma but we cant call the same function for the second instance that is the person2   now to solve this problem we will use prototype

person.prototype.sayMyName1 = function(){
    console.log(this.fname + " " + this.lname);
    }

    person2.sayMyName1(); // this will now print Tanya Gupta


// --------- Prototypal Inheritance ------------//


/*
Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental aspect of the JavaScript language and plays a crucial role in its object-oriented programming paradigm.

By placing properties and methods on the prototype object, you can ensure that all instances created by the constructor function share those properties and methods, rather than creating individual copies for each instance. This promotes code reusability and reduces memory usage.

It's important to note that JavaScript's prototypes form a chain, known as the prototype chain. Each object's prototype is linked to its parent prototype, creating a hierarchical structure. The top-level object in this chain is typically the Object.prototype object, which provides common methods and properties that are available to all objects in JavaScript.
*/