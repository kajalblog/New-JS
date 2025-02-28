const p1 = new Promise((resolve, reject) => {
    console.log("Promise initialed")
    setTimeout(() => {
        console.log("I am Promise & I am fulfilled")
        resolve(true)
        // reject(new Error("Promise Rejected"))

    }, 5000);
})

console.log(p1)
const p2 = new Promise((resolve, reject) => {
    console.log("Promise 2 initialed")
    setTimeout(() => {
        console.log("I am Promise & I am Rejected")
        // resolve(true)
        reject(new Error("Promise Rejected"))

    }, 5000);
})

p1.then((val) => {
    console.log("Promise 1", val)
}).catch(err => {
    console.log("Error")
});

// p1.then((val)=>{
//     console.log("Promise 1",val)
// })(err=>{
//     console.log("Error",err)
// });

p2.then(val => {
    console.log(val)
})
    .catch(error => {
        console.log("Some error in p2 promise")
    })