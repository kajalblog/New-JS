let data=(name,gretting)=>{
    console.log("Hello",name)
    console.log(gretting )};
data('Kajal','Good Morning');


// let obj={
//     name:'Sejal',
//     city:'Pune',
//     role:'Trainer',
//     exp:2,
//     printName:function()
//     {
//         console.log(this); //this refer to object of current obj(window obj)
//         console.log("Name & City",this.name,this.city);
//     }
// }
// obj.printName();

// let obj={
//     name:'Sejal',
//     city:'Pune',
//     role:'Trainer',
//     exp:2,
//     printName:function()
//     {
//         // whenever we create function inside obj that function this wo obj hoga
//         // but when we create another function inside function this refer to window obj
//         // console.log(this); //this refer to object of current obj(window obj)
//         setTimeout(function() {
//         console.log(this)
//         console.log(`Name is ${this.name} \nCity is ${this.city}`);
            
//         }, 2000);
//     }
// }
// obj.printName();

let obj1={
    name:'Sejal',
    city:'Pune',
    role:'Trainer',
    exp:2,
    printName:function()
    {
        // whenever we create function inside obj that function this wo obj hoga
        // but when we create another function inside function this refer to window obj
        // console.log(this); //this refer to object of current obj(window obj)
        let newres=this;
        // we can use above solution & also use arraow function inside setTimeOut
        setTimeout(function() {
        console.log(this)
        console.log(`Name is ${newres.name} \nCity is ${newres.city}`);
            
        }, 2000);
    }
}
obj1.printName();