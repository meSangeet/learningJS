

//Reference data types are object that are stored by reference. The varilable holds a reference (or address) to the object in memory not the 
//actual value
//they are mutable i.e values inside objects can be changed even if the variable is const
//they are copied by reference : Assigning or passing the object doesn't copy - both variables point to the same object
let obj1 = { name: "Sangeet" };
let obj2 = obj1;

obj2.name = "Sharma";

console.log(obj1.name); // "Sharma" -> copied by reference


//for primitive data types, the value is copied when assigned or passed
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20


// Primitive
let x = 5;
let y = 5;
console.log(x === y); // true — same value

// Reference
let aa = [1, 2];
let bb = [1, 2];
console.log(aa === bb); // false — different references

let cc = aa;
console.log(aa === cc); // true — same reference