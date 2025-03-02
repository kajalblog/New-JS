// 1)
// function hello()
// {
//     return 20;
// }

// console.log(hello())

// step2
async function hello() {
    return 2;
}
hello().then(res => { console.log(res) });

async function kajal() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ Name: 'Rani', Role: 'Employee' }])
        }, 3000);
    })

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ Permission: 'Create' }])
        }, 6000);
    })

    console.log("Fetching P1 Please Wait .....")
    let p1 = await promise1.then((val) => { return val });
    console.log("Fetched P1", p1);
    console.log("Fetching P2 Please Wait .....")
    let p2 = await promise2.then((val) => { return val });
    console.log("Fetched P2", p2);

    return [p1, p2]
}
// let result=kajal()
console.log("Welcome to promise chapter")
console.log(kajal())
