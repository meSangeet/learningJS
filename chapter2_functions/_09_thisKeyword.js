//let's look from global perspective
let name = "sangeet"
console.log(this.name); //undefined

function func(){
    let name = "sangeet"
    console.log(this.name); //undefined
}

func()

//this is only defined with an object

const obj = {
    name : "sangeet",
    func : function(){
        console.log(this.name);
    }
}


obj.func() //sangeet


