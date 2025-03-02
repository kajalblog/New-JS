let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);

    }, 8000);
});

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        // res(2); 
        rej(new Error("Error"))
        // use it for check promise.all & allSettled 
    }, 3000);
});

let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(3)
    }, 4000);
});

// p1.then((val1)=>{
//     console.log(val1)
// });
// p2.then((val2)=>{
//     console.log(val2)
// });
// p3.then((val3)=>{
//     console.log(val3)
// });

// I we want resolve all promise then use Promise.all method

let promiseAll = Promise.all([p1, p2, p3]);
promiseAll.then((val) => {
    console.log("all", val);
    // It gives array of resolved promises when all promise resolved
    // but one of the promise rejected then remaining promise also stop
})

// If one of promise will reject then other will be give result for that we use Promise.allSettled methodlet promiseAll=Promise.all([p1,p2,p3]);
let promiseSettled = Promise.allSettled([p1, p2, p3]);
promiseSettled.then((val) => {
    console.log("AllSettled", val);
    // It gives array of object for resolved & rejected promises
})

// race->it gives result of 1st resolved promise
// If 1st Promise is rejected  it will not proceed forward
// Here p2  is 1st rejected promise so it gives error & remaining process is stop  because race only gives 1 st resolved promise( 1st promise is rejected)
let Race = Promise.race([p1, p2, p3]);
Race.then((val) => {
    console.log("Race", val)
})

// Here 1 st   promise p2 is rejected so it will go to next promise if it is resolved then it gives result (p3)
let AnyVal = Promise.any([p1, p2, p3]);
AnyVal.then((val) => {
    console.log("Any", val)
})

let Res = Promise.resolve(16);
Res.then((val) => { console.log(val) });

let Rej = Promise.reject(new Error("Promise Rejected"));
Rej.then((val) => { console.log(val) });