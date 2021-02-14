// While some programming languages have a string method that will reverse a given string, JavaScript does not. Let's see how we can write our own program that reverses a string using the accumulator pattern.

let str = "periwinkle";
let reversed = "";

for (let i = 0; i < str.length; i++) {
  // console.log(str[i] + reversed);
  reversed = str[i] + reversed;
}

console.log(reversed);