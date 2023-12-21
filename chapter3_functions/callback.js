function square(n)
{
    return n**2;
}

function cube(n)
{
    return n**3;
}

function sumofsomething(a,b,cb)
{
    let p = cb(a);
    let q = cb(b);
    return p+q;
}

console.log(sumofsomething(2,3,square))
console.log(sumofsomething(2,1,cube))

//anonymous function as callback -> it will not be named and it cannot be called anywhere else

console.log(sumofsomething(2,3,function(n){
    return n**4;
}))