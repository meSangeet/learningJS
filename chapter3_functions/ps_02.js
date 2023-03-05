/*
define a recursive function to check if a number is even or odd using the following algorithm

1. zero is even
2. one is odd
3. for any other number N, its evenness is the same as N-2
*/

const isEven = (a) =>{
    if(a == 0) {
        return true;
    }
    if(a == 1){
        return false;
    }

    return isEven(a-2)
}

console.log(isEven(10))
console.log(isEven(101))

