
let url="https://jsonplaceholder.typicode.com/photos";
let response=fetch(url);
response.then((res)=>{
    return res.json();
}).then((users)=>{
    console.log(users);
    IHtml="";
    for(r in users)
    {
        console.log(users[r]);
        IHtml+=`  <div class="card" style="width: 22rem;">
                <img src="./coding.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${users[r].title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
    }
    cardContainer.innerHTML=IHtml

})

