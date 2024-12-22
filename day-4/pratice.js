// 1) Create a variable of type string &add number to it.
let a1 = "Sam";
let b1 = 45;
console.log(a1 + b1);

// 2)finde typeof variables

console.log(typeof (a1 + b1));

// 3 create a const object the try to change it

const obj = {
    name: "Tina",
    fruits: ['apple', 'banana', 'Cheri', 'Kivi'],
    Section: 5
}
// obj=45; (we can't do this because we can't update const variable)
// obj={};
// obj="Rinu";
console.log(obj);

// 4) try to add  new key into const obj
obj['address'] = 'Satara';
console.log(obj);
// it's working because obj is reference to object 

// 5)create a js program to count a word meaning dictionary to 5 words

const dict = {
    Rapture: 'A feeling of intense pleasure, joy, or ecstasy.',
    Selfcoup: 'A leader who seeks support by appealing to popular passions'
}
console.log(dict.Selfcoup);

