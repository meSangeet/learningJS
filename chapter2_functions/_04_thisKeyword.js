let name = "abc"

function abc(nam){
    this.name = nam
    console.log(name) //this will print abc
    console.log(this.name) //this will print the parameter
}

abc("def")


function func(par){
    this.name = par 
    function normalFunc(){
        console.log(this.name)
    }
    
    const arrowFunc = () => {
        console.log(this.name)
    }

    //normal function will not get the context of this
    normalFunc()

    //arrow function will inherit the this of func
    arrowFunc()
}

func("parameter")