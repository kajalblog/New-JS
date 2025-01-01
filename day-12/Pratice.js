// 1. Take a number from user & add it into given array
let a5 = [34, 12, 74.33, 48, 56, 85];
// let a6=promt("Enter a number");
// a6=Number.parseInt(a6);
// a5.push(a6);
let a7 = 65;
a5.push(a7);
console.log(a5);

// 2.Keep adding numbr to given aray until 0 is added into array;
let n = 0;
// do{
//     n=prompt("Enter a number");
//     n=Number.parseInt(n);
//     a5.push(n);
//    console.log(a5);

// }while(n!=0)

// 3.f9ilter the numbers which id divided by 10

let a8 = [75, 22, 40, 77, 64, 30, 77, 90, 150];
let a9 = a8.filter((x) => {
    return x % 10 == 0;
})
console.log(a9);

// 4. create an array of square of given number
let a10 = [4, 7, 12, 15, 5, 30];
let a11 = a10.map((x) => {
    return x * x;
})
console.log(a11);

// 5.use reduce to calculate factorial of given n natural numbers of string
let a12 = [1, 2, 3, 4, 5];
let a13 = a12.reduce((x1, x2) => {
    return x1 * x2;
})
console.log(a13);
