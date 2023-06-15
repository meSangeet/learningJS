// ------------  Function  currying ---------------

// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

// function f(a,b,c) is transformed to f(a)(b)(c)

const sum = (a,b,c) => a+b+c

const currySum = (fn) => {
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}


console.log(currySum(sum)(2)(3)(4));