function func(name){
    this.name = name;
}

const person1 = new func("Sangeet")

console.log(person1)

//this can't be done with arrow function
const func2 = (name) => {
    this.name = name;
}

const person2 = new func2("Sangeet")

console.log(person2) //TypeError: func2 is not a constructor