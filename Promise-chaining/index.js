// const r1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise Resolving")
//         resolve(1);
//     }, 2000);
// })

// r1.then((val)=>{
//     console.log("Promise Called With Resolved",val);
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }).then((val1)=>{
//     console.log("2nd  promise resolved",val1)
// })

const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script");
        script.type="text/javascript"
        script.src=src;
        document.appendChild(script);
        script.onload=()=>{
            resolve("load Script resolved");
        }
        script.onerror=()=>{
            reject(0)
        }
    })

}
let p1=loadScript("file:///D:/JS/New-JS/Promise-chaining/index.js")
p1.then((val)=>{
    console.log(val)
}).catch(err=>console.log("Sorry script not loaded"))