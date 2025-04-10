// Closue is variable access which is declared outer scope
var globalProduct="Laptop";
// function outer()
// {
//     console.log("Outer",globalProduct);
//     productName="Camera";
//     function inner()
//     {
//         console.log("Inner",globalProduct);x
//         console.log(productName);
//     };
//     inner();

// }
// outer(); 

function outer()
{
    // console.log("Outer",globalProduct);
    productName=12;
    function inner()
    {
        // console.log("Inner",globalProduct);
        console.log(productName);
    };
   return inner();

}
const result1= outer(); 
result1();