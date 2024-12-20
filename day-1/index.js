// console.log("Hello");
// Js single threated ,non blocking ,async lang
// It has call-stack,event loop and callback queue
// v* is Js runtime which has call stack &heap
// heap is user for memory allocation &stack ho;d the execution context

function greeting() {
    this.sayHi()
}

function sayHi() {
    console.log("Hi");
}
// Initially gretting is goes  into execution context &then sayHi butafter done functionality of sayHi it will removed from stack but getting is still into callstack.
// after completing working of gretting .it will removed from call stack.

// 2) Some time Js code can take lots of time &this can block the page per re render
// js has synchronous call stack for non blocking behaviour
// js runtime can do 1 thing at a time

// Task Queue
// browser give us other thing which work along with run time loke Web API
// The rest are queued into task queue waiting to be executed
// when we run setTimeOut,web api run the timer & push function provided to setTimeOut into stack queque onces the timer ended
// These task will be pushed to the stack when the execudted

// Event Loop
// Js has runtime model based on an envent loop,which is responsible for executing the code,collecting & processing events,and executing queued sub task.
// The event loop pushed task from task queue to call-stack.
// setTimeOut can be used to defer function until all the pending task have been executed.

// Js is dynamic typed lang means it allows to change variable type at runtime
// ex. let a='test';
// a=10;

console.log("Hello");
setTimeout(function sett() {
    console.log("Welcome to Call Stack")
}, 2000);

setTimeout(function timeout() {
    console.log("Welcome to Queue Task")
}, 5000);
console.log("TimeOut");







// console is predefined js object &log is function
// console.log(1, 2, 3);
{/* <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> */ }
