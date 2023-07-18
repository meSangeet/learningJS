// Array declaration

var house1 = ["asd", "asw"] //method1
var house2 = new Array(4) //method2

// An array  in javascript can hold different elements that can store numbers, strings and boolean in a single array.

// Javascript have 0 indexed array.
//accessing elements

console.log(house1[1]);

// iterate elements over an array

for(i = 0; i<house1.length; i++)
{
    console.log(house1[i])
}


//using for each method

//The forEach method calls the provided function once for every array element in the order


function myFunction(item)
{
    console.log(item);
}

array = [1,2,3,4,5,6]

array.forEach(myFunction);


// using every() method

//the every method checks if all the elements in an array pass a test

const under_five = x => x<5;

if(array.every(under_five))
{
    console.log('every element in the array is under 5')
}else{
    console.log('at least one of the array element is greater than 5');
}


//using map

// A map applies a function over every element and then returns a new array

const square = (x) => {
    return Math.pow(x,2);
}

squares = array.map(square);

console.log(squares);


//using filter

//it is used to filter values from an array and then return a new filtered array

const fill = (x) => {
    if(x < 5) return true;
    else return false;
}

lessFive = array.filter(fill);

console.log(lessFive);


//using reduce

//it is used to reduce the array into one single value using some functional logic

const helper = (acc, curr) => {
    return acc + curr
}

const sum = array.reduce(helper, 0);

console.log(array);
console.log(sum);

//using some

//it is used to check whether some array values passes a test

const lessFour = (x) => x <= 4;

const lfour = array.some(lessFour);

console.log(lfour);