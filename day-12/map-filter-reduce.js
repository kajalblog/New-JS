let arr = [65, 45, 77, 84];
console.log(arr);
let arr1 = arr.map((value) => {
    console.log(value);
    return value + 1;
})
console.log(arr1);
// map & filter doen not change original array
// map method return new array while forEach does not return new array
let arr2 = arr.forEach((value) => {
    console.log(value);
    return value + 1;
});
console.log(arr2);

let arr3 = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
})
console.log(arr3);

// filter method also return new array
let newArr = [34, 72, 55, 0, 5, 2, 9];
let a2 = newArr.filter((val) => {
    return val < 10;
})
console.log(a2);

let strArr = ['T', 'h', 'i', '', 'i', 's', '', 'T', 'e', 's', 't'];
// remove empty element from string
let a3 = strArr.filter((val) => val !== '');
console.log(a3);

// reduce method
// reduce method reeturn a value
// calculate total of the array element
let calArr = [3, 7, 5, 2, 4, 8, 1];
let a4 = calArr.reduce((h1, h2) => {
    return h1 + h2;
});
console.log(a4);

let calSum = (h1, h2) => {
    return h1 + h2;
}
let a5 = calArr.reduce(calSum);
console.log(a5);

