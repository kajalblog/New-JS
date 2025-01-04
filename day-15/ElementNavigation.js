let a = document.body;
console.log(a.firstChild);
console.log(a.firstElementChild);

const changeBgColor = () => {
    document.body.firstElementChild.style.color = "red";
}
changeBgColor();