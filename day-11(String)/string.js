let str = "Kajal"
console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());

// 1 slice take 2 argument 2 nd is optional  2nd argument is (n-1);
console.log(str.slice(2, 4));//4-1
console.log(str.slice(1));//it take all letters after index 1
console.log(str.replace('Ka', 'Te'));//check if letters are available into string ex ka not replaced
let str1 = "   Test    "
console.log(str1);
console.log(str1.trim());//trim method user to delete extra sapne from string
console.log(str1.trim() === '');

console.log(str.concat(' ' + str1.trim()));

let str2 = "AngularJs";
console.log(str2[0]);
for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    console.log(element);

}

// String are immutable we can't change value
str2[4] = 'K';//we can't do this
console.log(str2);

let newStr = "Welcome";
// console.log(newStr.split(""));
let res = newStr.split(" ");
let res1 = res.map((e) => {
    console.log(e.split("").reverse().join(''));
})
const string1 = "Welcome to javascript guide";

let newString1 = string1.split(" ");

let newString2 = newString1.map((data) => {
    return data.split("").reverse().join("");
});
console.log(newString2);
