/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */


console.log("\n1a.");
for (let i = 0; i <= 20; i++){
  console.log(i);
}

console.log("\n1b.");
for (let i = 3; i <= 29; i+=2) {
  console.log(i);
}

console.log("\n1c.");
for (let i = 12; i >= -14; i-=2) {
  console.log(i);
}

console.log("\n1d.");
for (let i = 50; i > 19; i--) {
  if (i%3 === 0) {
    console.log(i);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
*/

let str = "LaunchCode";
let arr = [1, 5, "LC101", "blue", 42];


/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

console.log("\n2a.");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("\n2b.");

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */


console.log("\n3a/b.");
let sortArr =  [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenArr = [];
let oddArr = [];

for (i = 0; i < sortArr.length; i++) {
  if (sortArr[i]%2 === 0) {
    evenArr.push(sortArr[i]);
  } else {
    oddArr.push(sortArr[i]);
  }
}

console.log("Even Array: " + evenArr);
console.log(evenArr);

console.log("Odd Array: " + oddArr);
console.log(oddArr);


