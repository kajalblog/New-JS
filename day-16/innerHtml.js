setTimeout(() => {
   document.getElementById('frist').innerHTML = "<h1>Hello This is Mrunal Thakur</h1>";
   console.log(document.getElementsByTagName('frist').data);

}, 2000);

setTimeout(() => {
   console.log(document.getElementById("frist").outerHTML = "<h2>Good Morning Guys</h2>");
}, 4000);

// let a= FinalizationRegistry.getAtt