console.log(a); //it gives undefined because for a not initialized any value
greet();
// above two lines will run successfully because of js hoisting
console.log(b);
function greet()
{
    console.log("function called")
}

// js compiler ,function ,variables hoisted to the top 
// declaration hoisted to the top but not  initialization
var a;//it is hoisted to the top
var b=20;
console.log(b);

// but for let & const variables are not hoisted

console.log("c",c);
let c=9;