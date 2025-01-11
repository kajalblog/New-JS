// 1 create nav bar & change color of first tab
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "white";
// 3
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";
// 4
Array.from(document.getElementsByTagName("li")).forEach(el => {
    el.style.background = "red";
});