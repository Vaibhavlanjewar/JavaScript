//  primitive data

// 7 categories String,number,boolean,null, undefined, Symbol(used to make unique component ), BigInt , 

// js- dynamic  typing language. it means the datatype of a variable can be changed during execution .

// Referenced type /non premetive : Array , Objects ,  Functions .


const num=100;
const f=false;
const dec=1.2;

const temp=null;
let useEmail;   // undefind 

const id1=Symbol('123')
const id2=Symbol('123')
const bignum=1245336887899464222445633568886554555863n; // use bigint 
console.table([num,f,dec,temp,useEmail,id1,id2]);

console.log("id1 ==id2  : ",id1==id2);

// ----------------
const heros=["vnbl","shakiman","naagraj","doga"]
console.log(heros);

let myObj={
    name:"vnbl",
    age:22,
}
Object.setPrototypeOf(myObj,heros)
console.dir(myObj);

// FUNCTION ,
const myfunc=function(){
    console.log("myfunc,hello world");
}

myfunc()

// check datatype
console.log(typeof bignum)
console.log(myfunc)  // obj function 