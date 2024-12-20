// var,let,const
// 1.var is globally scoped variable while let,const are block scope
// 2.var can be updated &re-declared within it's scope.
// 3.let can be updated but not re-declared.
// 4.const can;t updated nor re-declared.
// 5.var variables are initialized with undefined whereas let &const are not initialized
// 6. const must be intialized during declaration unlike let & const
// ex const totalCount;
//  we can't do this 
// const totalCount=0;


var a = 10;
var a = "hello";
var c = true;
// in previous js version var is used but now a day let & const mostly used
// console.log(a);
{
    var a = "world";
    console.log(a);
}
console.log(a);
// a gives updated value because var have functional scope variable
// but in case of let it does not happen

let d = "Testing";
{
    let d = "variable";
    console.log(d);
}
console.log(d);
// with let it's working fine.

const totalCount = 0;
// totalCount=100; it gives error
console.log(totalCount);
