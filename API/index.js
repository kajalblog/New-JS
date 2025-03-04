let p=fetch("https://jsonplaceholder.typicode.com/users");
p.then((response)=>{
    console.log(response);
    console.log(response.headers);
    return response.json();
}).then((val2)=>{
    console.log(val2);
})


// To set request headers 

let p1=fetch(URL,
   {
    headers:{
        Authentication:'token',
        ShowLoader:true
    }
}
);

let options={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
        type:"text",
        body:'test',
        userId:'9878'
    })
}

let p2=fetch('https://jsonplaceholder.typicode.com/posts',options)
  .then((response) => response.json())
  .then((json) => console.log(json));