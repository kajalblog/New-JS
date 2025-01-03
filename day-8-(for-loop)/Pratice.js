let RandomNub = Math.random() * 100;
console.log(RandomNub);
let guessNum;
let scrore = 100;
while (guessNum != RandomNub) {
    guessNum = prompt("Enter Number");

    if (guessNum > RandomNub && guessNum < 100) {
        console.log("Number is greater than Random Number");
    }
    else if (guessNum < RandomNub && guessNum < 0) {
        console.log("Number is less than Random Number");

    }
    else {
        console.log("Number is Equal");

    }
}
