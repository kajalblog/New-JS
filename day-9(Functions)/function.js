// function are userd to organise code.
// somethime we required same code for multiple time 
// this can implenet with the help of function
// it takes some input & give us result

// A JS function is block of code ,designed to perform paticular task

// let a=1;
// let b=2;
// let c=3;
// console.log("One plus avg of a and b is",1+(a+b)/2);
// console.log("One plus avg of b and c is",1+(b+c)/2);
// console.log("One plus avg of a and c is",1+(a+c)/2);

// But with the help of function we can do it easily & if I want to change something we can achive easily.

function onePlusAvg(x, y) {
    // x,y worked as local variable into function
    console.log("Done");
    return Math.round(1 + (x + y) / 2);
}
// console.log(x);so we can't acces it outside the function
let a = 1;
let b = 2;
let c = 3;
console.log("One plus avg of b and c is", onePlusAvg(a, b));
console.log("One plus avg of a and b is", onePlusAvg(b, c));
console.log("One plus avg of a and c is", onePlusAvg(a, c));
// If i want to add done in every result .

// we can create function without parameters.
let sum = (p, q) => {
    return p + q;
}
console.log(sum(15, 20));

let hello = () => {

    console.log("Hi this is function file");
    return 'Hii'
}
hello();
// if function return some restule we can store that function  into variable for doing some addition operation on that function
// suppose hello function return some value so we can assign this function to variable.
// hello() only consloe the console value of function not return value


let res = hello();
console.log(res);