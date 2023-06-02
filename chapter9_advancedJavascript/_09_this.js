// -----  this ----

// the JavaScript this keyword which is used in a function, refers to the object it belongs to. It makes functions reusable by letting you decide the object value this value is determind by how a function is called.


// how to determine what this is refering too    there are 4 methods

// 1. implicit binding

const person = {
    name: 'Sangeet',
    printMyName: function(){
        console.log(`hey the name is ${this.name}`)
    }
}

person.printMyName();

// 2. explicit binding

function myName(){
    console.log(`hey the name is ${this.name}`)
}

myName.call(person); // call method tells that to which object this keyword will refer too

// 3. new binding

// new keyword is used to create an instance of an object

function functionName(name, grade){
    this.name = name;
    this.grade = grade;
}

const obj1 = new functionName('Sangeet', 'A')
const obj2 = new functionName('Tanya', 'A+')

console.log(obj1);

//4. default binding

globalThis.name = 'Global Name'
//above is the globally declared value of name variable
myName();

//Order of precedence  new > explicit > implicit > global

