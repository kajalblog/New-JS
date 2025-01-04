console.log(document.body.firstChild);//after body & before div there is space which is consider as text node
// if we remove that space then din wil become firstChile 
console.log(document.body.lastChild);
console.log(document.body.childNodes); //it look like array but it's not array it's NodeList
let arr = Array.from(document.body.childNodes);
console.log(arr);

// parent chide node
let a = document.body.firstChild;
console.log("FirstChild", a);
console.log("parentNode", a.parentNode);
console.log("parentElement", a.parentElement); //return if it has valid html element
console.log(a.firstChild.nextSibling);