let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.tHead);
console.log(t.rows[1].rowIndex);
// console.log(t.tr.cells);
// let a1=document.getElementById("one");
// a1.style.color='blue';

let a2 = document.querySelectorAll(".card-title");
console.log(a2);
a2[0].style.color = 'red';
a2[1].style.color = 'green';
a2[2].style.color = 'purple';

document.querySelector(".oneBtn").style.color = "red";

console.log(
    document.getElementsByTagName('a')
);