let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

console.log(protoArray1.includes(",")); //true
console.log(protoArray1.includes(";")); //false
console.log(protoArray1.includes(" ")); //false
console.log(" ");
console.log(protoArray2.includes(",")); //false
console.log(protoArray2.includes(";")); //true
console.log(protoArray2.includes(" ")); //false
console.log(" ");
console.log(protoArray3.includes(",")); //false
console.log(protoArray3.includes(";")); //false
console.log(protoArray3.includes(" ")); //true
console.log(" ");
console.log(protoArray4.includes(",")); //true
console.log(protoArray4.includes(";")); //false
console.log(protoArray4.includes(" ")); //true
console.log(" ");

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if (protoArray1.includes(",") === true) {
  let newString = protoArray1.split(",").reverse().join(",");
  console.log(newString);
}

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

if (protoArray2.includes(";") === true) {
  let newString = protoArray2.split(";").sort().join(",");
  console.log(newString);
}

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

if (protoArray3.includes(" ") === true) {
  let newString = protoArray3.split(" ").sort().reverse().join(" ");
  console.log(newString);
}

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (protoArray4.includes(",") === true) {
  let newString = protoArray4.split(", ").reverse().join(",");
  console.log(newString);
} 
