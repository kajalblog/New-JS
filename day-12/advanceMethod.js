let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_more = [11, 12, 13];
let num_even = [211, 212];

console.log(num.length);
// delete is not method  it is  operator after delete it does not affect on length of array
delete num[0];
console.log(num);
console.log(num.length);

// concat
let num1 = num.concat(num_more, num_even);
console.log(num1);
console.log(num1.length);

// sort
// sort method sort element by alphabetically order maens it take first all element wich belong to 1 then,2,3,4,56,7,8,9
let num2 = num1.sort();
console.log(num2);
let compare = (a, b) => {
    return a - b
}
console.log(num2.sort(compare));

// splice 
// it deleted or addeed new elemnt into array
// it return delete element
console.log("Array Splice");

let newArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArr);
// deletedArr=newArr.splice(2,3);
deletedArr = newArr.splice(2, 3, 100, 200);//in deleteed element we can add single multiple or more than deleted element
console.log(deletedArr);
console.log(newArr);

// slice 
// it take 1 or  2 arguments
// 2nd argument -1
// it does not modifed orignal array
let testArr = [14, 50, 25, 66, 48, 75];
// console.log(testArr.slice(3));//it gives index of 3 to end of array element but as we say it doen not change origimal array so we have to store it into new variable.
// let result=testArr.slice(3);
let result1 = testArr.slice(2, 5);//5-1 = upto 4th index
console.log(result1);
console.log(testArr);

