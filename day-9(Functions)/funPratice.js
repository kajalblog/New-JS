let mark = {
    Rina: 67,
    Siyal: 75,
    Mitali: 88,
    Manu: 45

}
// for loop work on array;
// but here we decalred object but we want to access keys of mark
// user Object.keys() method to convert obje to array
// array=[]
// console.log(mark);
// console.log(Object.keys(mark));
// let converObjToArr=Object.keys(mark);
// console.log(converObjToArr.length);

// Q 1. Write a programm  to print mark of student in an object using for loop
for (let i = 0; i < Object.keys(mark).length; i++) {
    // arr[i],arr[role]
    console.log('Total Mark of' + Object.keys(mark)[i] + 'are ' + mark[Object.keys(mark)[i]]);
}

// Q 2. Write a programm  to print mark of student in an object using for  in loop

// using for--in loop
for (let key in mark) {
    console.log("Total Mark Of" + key + 'are' + mark[key]);
}
// Q 1. Write a programm  to find min out of 5 numbers
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4, 5, 6, 7));
