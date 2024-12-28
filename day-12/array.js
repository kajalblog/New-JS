let arr = [1, 7, 45, false, 'Absent'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);//will be undefined because index is not exist
arr[5] = "Kajal";//adding new values into array
console.log(arr);
arr[1] = 16;// we can chnage the value of array element
console.log(arr);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
