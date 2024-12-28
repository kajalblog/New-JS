let num = [1, 2, 55, 3, 87, 4]
let b = num.toString();
console.log(b);
console.log(typeof b);
let c = num.join('-');
console.log(c);
console.log(typeof c);

// pop remove last element of array it return poped element
// num.pop();
console.log(num.pop());
console.log(num);
console.log("array length", num.length);

// push added new element at last in array it return new array length
let p = num.push(56);
console.log("Push", p, num);
console.log("array length", num.length);

// shift remove 1st element from array it return new legth of array & it return shifted element
let res = num.shift();
console.log("Shift", res);
console.log(num);

// unshift add element at the start of the  array and return length of array
let r = num.unshift(78);
console.log(r, num);


