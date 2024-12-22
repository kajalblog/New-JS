// if,if..else,else....
let age = prompt("Enter your age");
if (age < 0) {
    console.log("This is invalid age");
}
else if (age > 0) {
    console.log("This is valid age ");
}
if (age < 10) {
    console.log("This is valid age but you can't vote");
}
if (age > 10 && age < 18) {
    console.log("You can vote");
}
else {
    console.log("This is valid age,You can vote");
}

// Switch Statement
switch (age) {
    case 10: console.log("Yo can't vote");
        break;
    case 18: console.log("Yo can't vote");
        break;
    case 20: console.log("Yo can vote");
        break;


}