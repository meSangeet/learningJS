// --------- class in JavaScript -------------


class person{
    constructor(fname, lname)
    {
        this.fname = fname;
        this.lname = lname;
    }

    sayMyName(){
        console.log(this.fname + " " + this.lname)
    }
}


const person1 = new person("Sangeet", "Sharma")
const person2 = new person("Tanya", "Gupta")

person1.sayMyName()
person2.sayMyName()

/*
Two keywords take care of entire inheritence

1. extends
2. super

*/

class SuperHero extends person{

    constructor(fname, lname)
    {
        super(fname, lname); // calls constructor of the parent class
        this.thisIsSuperHero = true;
    }

    fightCrime(){
        console.log("it can fight crime");
    }

}


const Batman = new SuperHero('Batman', 'Sharma')

Batman.sayMyName()
console.log(Batman)
console.log(Batman.thisIsSuperHero)
Batman.fightCrime()