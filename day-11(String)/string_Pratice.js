// 1. Reverse the string with function
function reverseStr(string) {
  let reverseSting = string.split(" ");
  console.log(reverseSting);
  newStr = [];
  for (let i = 0; i < reverseSting.length; i++) {
    this.newStr.push(reverseSting[i].split("").reverse().join(""));

  }
  //    let res= reverseSting.map((e)=>{
  //     // console.log(e.split(' '));
  //       return  e.split("").reverse().join("")
  //     })
  // return res;
  return this.newStr;
}
console.log(reverseStr('this is javascript codee'));

// 2. find number of characters in string
function numberOfChar(str) {
  let str1 = str.split("");
  // console.log(str1);
  const finalresult = str1.filter((e) => e !== ' ');
  // console.log(finalresult);
  console.log(finalresult.length);

}
numberOfChar("This is test")
// console.log(numberOfChar("This is test"));

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

for (const key in obj2) {
  obj1[key] = obj2[key] + (obj1[key] || 0);
}
let mergeObj = { ...obj1, ...obj2 }

console.log(obj1);
console.log(mergeObj);
console.log(Object.assign({}, obj1, obj2));
console.log(undefined == null);
console.log(undefined);
console.log(null);