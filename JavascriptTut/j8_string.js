const username="xyz";
const pass=102;
console.log(username+" " + pass);
//  `String interpolation ` is a feature in JavaScript that allows you to insert values into strings using curly braces surrounding
console.log(`Hello my username is ${username} and pass is {pass}`);

const onString=new String ("RAjESH -rj");
console.log(onString);
console.log(onString[0]);

console.log(onString.length);
console.log(onString.toLowerCase()); // original value not changed 
console.log(onString.charAt(2)) // char at index 2

console.log(onString.indexOf('R'));

const str1=onString.substring(0,7); // last index is excluded 
console.log(str1);

// slicing
const str2=onString.slice(-8,4); // last index is excluded 
console.log(str2);

// trim and replace 
// trim start and end 
const str3="     Hii buddy how are u ??"

console.log(str3.trim()) ; // removes spaces from both sides of the string
console.log(str3.replace("buddy","friend")); // replaces only first

// includes 
console.log(str3.includes('x'));
console.log(str3.includes('Hii'));

// conver the string to array  based on dash in onString var  using split
// seperator , limit 
console.log(onString.split('-')); 

console.log(onString.split('',4)); 