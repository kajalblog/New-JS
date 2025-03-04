// Sometimes api gives error  ,so for handle that errors we can use try catch block
// It work on synchronous programming

setTimeout(() => {
    console.log("One")
}, 1000);

// setTimeout(() => {
//     console.log("Two");
//     console.log(kajal)
// }, 2000);

try{
setTimeout(() => {
    console.log("Two");
    try{
// because try catch work on synchronous programming
        console.log(kajal)
    }
    catch(err){
        console.log("Inner",err)
    }
}, 2000);
}catch(err){
    console.log("Error",err)
}
setTimeout(() => {
    console.log("Three")
}, 3000);

// step 2
// If we add error ,means undefined variable so it gives error for handle that we can use catch