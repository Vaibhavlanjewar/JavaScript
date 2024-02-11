const acid=1234 // lock the value , no change
let acemail="vnbl@gmail.com"
var acpass="123456"
accity="Nagpur"
let undf;
console.log("Prefer not to use var for variable declaration becoz of issue in block and scope and functional scope ")
// acid=45   // const varible not allowd to change by node js3
acemail="xyz@yahoo.co.in"  // but we can do this
accity="Nanded"  // allowed to change
 console.log(acid);
 console.log(acemail)
 console.log(accity)
// {

// }  // curly braces are scope  come up with var 
 console.table([acid,acemail,accity,undf]);