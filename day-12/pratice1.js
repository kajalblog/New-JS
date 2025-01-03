// 1.Create an array of Cities
// Print the length of the array in the console
// Print the 3rd element from the array

let cityList = ['Pune', 'Thane', 'Mumbai', 'Sarara', 'Solapur'];
console.log(cityList.length);
console.log(cityList[2]);

// 2.Create an array of RollNos
// Print the length in an alert
// Print the 2nd element

let array = [44, 6, 77, 1, 95, 43, 85];
alert(array.length);

// 3.Create an array of StudentList
// Add functionality to push an entered student name into the array using a button
let studentList = ["Athrav", "Sita", "Riya", "Kashish", "Karan"];
let studName = prompt("Enter Student Name");
studentList.push(studName);
console.log(studentList);
// but instead of prompt you have to use form input & submit button .

// 4.Create an array of Numbers
// Implement push, pop, shift, and unshift operations using buttons

// 5.Create an array of RollNos
// Allow the user to get an element by entering an index number
let StudRollNums = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
let rollIndex = prompt("Enter index for getting roll no");
rollIndex = Number.parseInt(rollIndex);
console.log(StudRollNums[rollIndex]);




