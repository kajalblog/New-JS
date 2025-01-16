let a = document.getElementById('frist');
console.log(a.getAttribute("class"));
console.log(a.hasAttribute('class'));
console.log(a.hasAttribute('style'));
// a.setAttribute('hidden','true');
a.setAttribute('class', "true nitin")
// a.removeAttribute("class")
console.log(a.attributes);
console.log(a.dataset);
console.log(a.dataset.game);
console.log(a.dataset.players);