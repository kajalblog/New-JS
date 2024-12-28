let arr = [2, 44, 10, 72, 80];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);

}

arr.forEach(element => {
    console.log(element);

});
// array.from used to created array from HTML element/object

let name = "Kajal";
let res = Array.from(name);
console.log(res);

// for..of
for (const el of arr) {
    console.log("for of", el);

}

for (const i in arr) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];

    // }
    console.log("for of", arr[i]);

}