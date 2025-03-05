// let options={
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }
// }

// let p=fetch("https://jsonplaceholder.typicode.com/posts",options).then((response)=>{
//     console.log(response);
//     return response.json();
// }).then((result)=>{
//     console.log(result)
// })

const readPromise = async () => {
    let options1 = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    let p1 = await fetch("https://jsonplaceholder.typicode.com/posts", options1);
    console.log(p1);
    let res = await p1.json();
    return res;
}

const myFunctiom = async () => {
    let toDo = await readPromise();
    console.log(toDo);
}

myFunctiom();