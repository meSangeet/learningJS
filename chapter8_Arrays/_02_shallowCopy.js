/*

Shallow copy: In the case of shallow copy when we copy the original object into the clone object then the clone object has the copy of the memory address of the original object i.e. both point to the same memory address.

Both original object and cloned object internally point to the same referenced object. Since they point to the same memory address so if we changed the cloned object then changes would be reflected back to the original object.


*/

let array = [1,2,3];

let arr2 = array;

arr2.push('q');

console.log(array); //changed the original array too.

