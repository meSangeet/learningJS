/*Control Statement - 
 * 
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }




// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.


// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }




// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }




// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.





// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// var num=20;
// // block scope 
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop 

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// for(var i = 1; i<=10; i++)
// {
//         console.log(8 + ' x ' + i + ' = ' + 8*i)
// }

// // for of loop

let num = [1,2,3,4,5,6,7,8,9,10];

// //to check each elements of num array is even or odd

// ///this works as for each loop in c++
// for(let no of num){
//     if(no%2 == 0)
//     {
//         console.log("Even")
//     }else console.log("Odd");
// }


// for in loop
//it gives us indexes in array
for(let index in num)
{
    console.log(index + " -> " + num[index]);
}