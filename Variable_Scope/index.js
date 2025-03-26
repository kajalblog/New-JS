
// Block &functional are local scope
// Global scope
{
    let a=8; //let has block scope
    var b=5; //var has global scope
}
console.log(b);
// console.log(a);cls

let p=10;
function res()
{
    console.log("local scope",p);
    let k=12;
    console.log("functional scope",k);
}
res();
// console.log(k);
 console.log(p);

