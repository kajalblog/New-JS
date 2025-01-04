
// 1.take input age from user &check wheather he is aligible for driving or not
// let age = prompt("Enter Your age");
// age = +age;
// const cannDrive=(age)=>
// {
//     return age > 18 ? true : false;
// }
// if (cannDrive(age)) {
//     alert("You can Drive")
//     document.write("You can drive");
// }
// else {
//     alert("You can't Drive")
//     document.write("You can't drive");
// }

// 2 in q1 user confirm to ask if he wants to see promt again

// let runAgain = true;

// const cannDrive = (age1) => {
//     return age1 > 18 ? true : false;
// }
// while (runAgain) {
//     let age1 = prompt("Enter Your age1");
//     age1 = +age1;

//     if (cannDrive(age1)) {
//         alert("You can Drive")
//         document.write("You can drive");
//     }
//     else {
//         alert("You can't Drive")
//         document.write("You can't drive");
//     }

//     runAgain = confirm("Do you want to play again");

// }

// 3 In previous Q console error to log the error if the user enter negative number.

let runAgain = true;

const cannDrive = (age1) => {
    return age1 > 18 ? true : false;
}
while (runAgain) {
    let age1 = prompt("Enter Your age1");
    age1 = +age1;

    if (age1 < 0) {
        console.error("Please enter valid age");
        break;
    }
    if (cannDrive(age1)) {
        alert("You can Drive")
        document.write("You can drive");
    }
    else {
        alert("You can't Drive")
        document.write("You can't drive");
    }

    runAgain = confirm("Do you want to play again");

}

