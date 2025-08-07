//let, const, var

//var is function scoped (accessible outside the block but not outside the funcion)

function func(){
    if(true){
        var a = 10;
        console.log("Printing a inside the block - ", a);
    }

    console.log("Printing a outside the block - ",a); //here it will be printed
}

func();
console.log("Printing a outside the function - ", a); //here the error will be thrown -> ReferenceError: a is not defined

//var can be redeclared and updated
//let and const are block scoped 
//let can updated but not redeclared
//const can neither be updated nor be redeclared
