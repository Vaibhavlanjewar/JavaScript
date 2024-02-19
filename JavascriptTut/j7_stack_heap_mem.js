console.log("Stack heap memory management ");

// stack and heap mem
// stack -- premitive  data types
// heap non premitive 

let my_yt_name=  "vnbl";
let v=my_yt_name;
// console.log(v); //  reference to the variable not value of it
v="chai aur c"
console.log(my_yt_name);
console.log(v);

let userone= {
email:"vnbl@gmail.com",
upi:"userybl"
}

let user2=userone;
user2.email="user2@gmail.com";
console.log("email          upi id   ");
console.log(userone.email+" " + userone.upi);
console.log(user2.email+ " "+ user2.upi) ;