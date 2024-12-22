// 34;
// "Hrshu";

// 1)ArithMatic

// + Adition,
// - Substraction,
// / Division,
// * Multiplication,
// % Modulus
// ** Exponential,
// ++ Increment,
// -- Decrement


let k = 85;
let m = 8;
console.log("k + m", k + m);
console.log("k - m", k - m);
console.log("k / m", k / m);
console.log("k * m", k * m);
console.log("k ** m", k ** m);//85*85*85*85
console.log("k % m", k % m);

// Increment ,Decrement(Post-Increment ,Post-Decrement)
let r = 5
console.log('r++', r++); //it first console k value then incrent (85);
console.log(r);
console.log('r--', r--); //it first console k value then decrement (86) bcz in previous line we incement value;
console.log(r);

// Pre-Increment ,Pre-Decrement
let p = 10
console.log('++p', ++p); //first it increment the value then disaply ++10=>11;
console.log(p);
console.log('--p', --p); //first it increment the value then disaply --11=>10;
console.log(p);

// 2)Assignment Operators
let assignment = 15;
// assignment = assignment+5;(assignment+=5)
console.log('assignment+=6', assignment += 6);
console.log('assignment-=6', assignment -= 6);
console.log('assignment/=6', assignment /= 6);
console.log('assignment*=6', assignment *= 6);
console.log('assignment**=6', assignment **= 6);
console.log('assignment%=6', assignment %= 6);

// 3)Conditional Operators
// == Euqal To;
// !== Not Equal To;
// === Equal value & Type;
// !== Not Equal Value & Type
// > Greater Than
// < Less Than
// >= Greater Than
// <= Less Than

let x = 20;
let y = 20;

console.log('x==y', x == y);
console.log('x!=y', x != y);
y = '20'
console.log('x==y', x === y);
console.log('x!==y', x !== y);

// 4) Logical Operator
// && Logical And,
// || Logical Or,
// ! Logical Not
let t = 5;
let j = 20;
console.log(j > t && j == 20);
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log("Or");
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// !! (Not Not) it is user to connvert result into boolean format

// It gives False for followning conditions
// Empty string: “”
// 0
// null
// undefined
// NaN
// !!"" === false            // empty string is false
// !!undefined === false     // undefined primitive is false
// !!null === false          // null is false
// !!isNaN(value) === false

let str = '';
console.log("!!str", !!str);

let str1 = undefined;
console.log("!!str1", !!str1);

let str2 = null;
console.log("!!str2", !!str2);

let str3 = 78;
console.log("!!str3", !!isNaN(str3));

// The following values are considered by Typescript to be truths:

// Object: {}
// Array: []
// Not empty string: “value”
// Number other than zero
// Date: new Date();
!!"not empty string" === true
!!{} === true;                 // an (empty) object is truthy
!![] === true;                 // an (empty) array is truthy
const array = [1, 2, 3];
!!array[0];                    // true
!!array[3];                    // false
const obj = {
    value: 1,
    item: undefined
};
!!obj.value;                   // true
!!obj.item;                    // false
const fibonacci = 1.6180339887;
!!fibonacci === true;
const dt = new Date();
!!dt === true;

// Some practical aspects of using “not not”.

// It is just a dummy script to show how logic works with !!

// use !! inside of if statement:

// userData: UserData = null;
// ngOnInit(): void {
//   this.userData = this.serviceCall.getData();
// }
// routeAhead(): void {
//   if (!!this.userData) {
//     this.router.navigateByUrl("vault");
//   }
// }



