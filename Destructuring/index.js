let arr=[5,8,6,3,9,2];

// let a=arr[0];
// let b=arr[1];
// instead of this we can direct do destructuring
[a,b,...rest]=arr;
console.log(a,b,rest);

let {p,q}={p:20,q:30};
console.log(p,q);

// spread operator
let arr1=[4,7,11];
function sum(a,b,c)
{
    return a+b+c;
}
console.log(sum(...arr1));

let obj1={
    name:'Kajal',
    company:'tata',
    address:'xyz'
}
console.log({...obj1,name:'Samita'});