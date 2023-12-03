//declaring objects

const user1 = {
    fname : "sangeet",
    age : 21
}

const user2 = {
    fname: "imaginary gf",
    age: 21
}

//accessing properties

console.log("name ", user1.fname)

//array of objets

let arr = [user1, user2]

for(let i = 0; i<arr.length; i++)
{
    console.log("We are at user number ", i+1)
    console.log("name - ", arr[i].fname)
    console.log("age - ", arr[i].age)
}