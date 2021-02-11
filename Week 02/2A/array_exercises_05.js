let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split(","));
console.log(str.split("n"));
console.log(str);

//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join(""));
console.log(arr.join(" "));
console.log(arr.join("a")); // banana5
console.log(arr);

//c) Do split or join change the original string/array? - NO


//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let newString = cargoHold.split(",").sort().join(",");
console.log(newString);
console.log(cargoHold);
