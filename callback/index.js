// Synchronous operation
// one by one called
// const res=prompt("Enter Your Course Name");
// prompt("Enter your class duration");
// prompt("Enter Your class batch no")

// // Asynchronous
// // we initial now & they finish later
// console.log("Start")
// setTimeout(() => {
//     console.log("Async opertaion")
// }, 2000);
// console.log("End")


function loadScript(src,callback)
{
    var script=document.createElement('script');
    script.src=src;
    document.body.appendChild(script)
    callback(src);
    // script.onerror=()=>{
    //     callback(new Error("script not loaded"))
    // }

}

function goodMorning(error,src)
{
    if(error)
    {

        console.log(error);
        return
    }
    alert(`Hello Good Morning ${src}`);
}

loadScript("cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",goodMorning)