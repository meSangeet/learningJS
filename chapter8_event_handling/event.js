//function to invoke
let count = 0;
let target = document.getElementsByClassName('event')[0];
function event1(e)
{
count++;
target.textContent =   `you clicked the button ${count} times`;
console.log(e);
}

const  handleEvent = ()=>{
    event1();
}
// one way to listen event

/*
add this code to html

<button onclick="handleEvent()">click</button>

*/

// second way

let button = document.getElementsByClassName('clickMe')[0];
// button.onclick = event1;
// // dont add () after the function name


// third way --> recommended way

//don't use parenthesis if you want a predeclared function to be used as a call back function we just pass the function reference
button.addEventListener('click', event1);

let clearButton = document.getElementsByClassName('clearButton')[0];

//e passed is the parameter event which contain all the information related to event that occured.

clearButton.onclick = (e)=>{
    target.textContent = '';
    console.log(e);
    count = 0;
};



// key press type event handler 


document.addEventListener('keypress', (evennt)=>{
    //the code below will log the key pressed in the console
    console.log(evennt.key);

    //code to write the text in the blue box
    target.textContent += evennt.key;
})