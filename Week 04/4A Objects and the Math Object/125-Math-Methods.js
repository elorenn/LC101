// 12.5. Math Methods:
// 12.5.1. Common Math Methods:

let divider = '\n-------------------------\n';

// The Math object contains over 30 methods. Below are the Ten Most Common Math Methods:

console.log('Math.abs(number)'); 
// Returns the positive value of number.

let num = Math.abs(-3);
console.log(num); //3

console.log(Math.abs(4.44)); //4.44
//Numerical strings can also be evaluated, but should be avoided as a best practice.:
console.log(Math.abs('-3.33')); //3.33
console.log(Math.abs(24/-3)); //8

// Math.abs also works on arrays, but to make the process work, we must combine it with the map array method:
let numbers = [-2, 3, -4.44, "8.88"];
let positiveArray = numbers.map(Math.abs);
console.log(positiveArray); //[ 2, 3, 4.44, 8.88 ]

console.log(divider);



console.log('Math.ceil(number)'); 
// Rounds the decimal number UP to the closest integer value (hence the ceiling reference).

console.log(Math.ceil(8.88)); //9
console.log(Math.ceil(8.1)); //9
console.log(Math.ceil(-3.9)); //-3
console.log(Math.ceil(5)); //5

// ceil also operates on arrays:
numbers = [-2, 3.33, -4.44, 8.88];
console.log(numbers.map(Math.ceil)); //[ -2, 4, -4, 9 ]

console.log(divider);



console.log('Math.floor(number)'); 
// Rounds the decimal number DOWN to the closest integer value (hence the floor reference).

console.log(Math.floor(8.88)); //8
console.log(Math.floor(8.1)); //8 
console.log(Math.floor(-3.9)); //-4 
console.log(Math.floor(5)); //5 

// floor also operates on arrays:
numbers = [-2, 3.33, -4.44, 8.88];
console.log(numbers.map(Math.floor)); //[ -2, 3, -5, 8 ]

console.log(divider);



console.log('Math.max(x,y,z,...)'); 
// Returns the largest value from a set of numbers.

console.log(Math.max(2, 3, 100.01, 0, -5.2, 100)); //100.01

// Unfortunately, the max and min methods will NOT take an array of numbers as an argument. There are numerous workarounds. Here are TWO possible solutions:

// Sort First:
numbers = [-2, 3.33, -4.44, 8.88];
let sortedArray = numbers.sort(function(a, b){return a-b});

console.log(sortedArray); //[ -4.44, -2, 3.33, 8.88 ]
console.log(`Min = ${sortedArray[0]}, Max = ${sortedArray[sortedArray.length-1]}`); //Min = -4.44, Max = 8.88

console.log(divider);



console.log('Math.min(x,y,z,...)'); 
// Returns the smallest value from a set of numbers.

console.log(Math.min(2, 3, 100.01, 0, -5.2, 100)); //-5.2

// Unfortunately, the max and min methods will NOT take an array of numbers as an argument. There are numerous workarounds. Here are TWO possible solutions:

// Using Spread Syntax:
/* An alternative to the sorting approach described above is to use the spread operator (...), also called spread syntax.

The spread operator expands an array into a comma-separated set of elements, which can be passed as arguments in a function call. functionName(...[x,y,z]) is identical to functionName(x,y,z). */

numbers = [2, 3, 100.01, 0, -5.2, 100];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(numbers); // [2, 3, 100.01, 0, -5.2, 100]
console.log(...numbers); // 2 3 100.01 0 -5.2 100
console.log(`Min = ${min}, Max = ${max}`); //Min = -5.2, Max = 100.01

// The sorting approach works in all browsers. The spread operator, while very convenient, is NOT compatible with Internet Explorer or older versions of other browsers (pre-2015) 
console.log(divider);



console.log('Math.pow(x,y)'); 
// Returns the value of x raised to the power of y: (x^y).
// it is identical to the x**y operation.

console.log(3**4); //81
console.log(Math.pow(3,4)); //81
//3 raised to the power of 4 = 3*3*3*3

console.log(divider);



console.log('Math.random()'); 
// Returns a random decimal value between 0 and 1, NOT including 1.

for (i=0; i<5; i++){
   let randNum = Math.random();
   console.log(randNum);
}

/* This will print 5 random decimal numbers similar to: 
0.2533874084152288
0.27712808765552444
0.5834767312964759
0.7826850544388659
0.8798471373687622 */

// Generate a Random Integer:
// The trick to creating a random integer is to multiply Math.random() by a whole number and then round the result to remove the decimal portion. The choice of using the ceil, floor,or round method affects the numbers generated:

for (i=0; i < 5; i++){
   let num = Math.random()*10; //number between 1 and 10
   console.log(`floor = ${Math.floor(num)}, ceil = ${Math.ceil(num)}, round = ${Math.round(num)}`);
}

/*  Example of possible random output: 
floor = 0, ceil = 1, round = 0
floor = 6, ceil = 7, round = 7
floor = 2, ceil = 3, round = 3
floor = 8, ceil = 9, round = 8
floor = 9, ceil = 10, round = 10 */

// or a number between 0 and 100: 
for (i=0; i<10; i++) {
  console.log(Math.round(Math.random()*100)); //ex: 54 or 1 or 99, etc.
}

/*
After multiplying Math.random() by 10, applying the floor method gives numbers between 0 and 9. 

Using the ceil method shifts the range up one digit, generating values between 1 and 10. 

Using the round method gives the widest range, generating numbers between 0 and 10.

Rather than trying to remember which method to use, one choice is to ALWAYS use floor to round to an integer:

  1. Math.floor(Math.random()*10) generates a number from 0 - 9.
  
  2. Math.floor(Math.random()*120) generates a number from 0 - 119.

To start our range at 1, just add 1 to the rounded value:

  1. Math.floor(Math.random()*10) + 1 generates a number from 1 - 10.

  2. Math.floor(Math.random()*120) + 1 generates a number from 1 - 120.

By changing the value that multiplies Math.random() we specify the range for the numbers we want to generate:

  1. Math.floor(Math.random()*maxValue) generates a number from 0 to (maxValue-1).

  2. Math.floor(Math.random()*maxValue) + 1 generates a number from 1 to maxValue.

*/

console.log(divider);



console.log('Math.round(number)'); 
// Returns number rounded to the nearest integer value.

console.log(Math.round(1.33)); //1
console.log(Math.round(-28.7)); //-29
console.log(Math.round(8.5)); //9
//Numerical strings can also be evaluated, but should be avoided as a best practice:
console.log(Math.round("101.45")); //101

// Math.round also works on arrays, but must be combined with the map array method:
numbers = [1.33, 4, 8.5, -15.523, 8.49];
console.log(numbers.map(Math.round)); //[1, 4, 9, -16, 8]

console.log(divider);



console.log('Math.sqrt(number)'); 
// Returns the square root of number.
// is a shortcut for using the fraction 1/2 in the pow method.

console.log(Math.sqrt(81)); //9
console.log(Math.pow(81,1/2)); //9

console.log(Math.sqrt(111)); //10.535653752852738
console.log(Math.sqrt("36")); //6

//Math.sqrt also works on arrays, but must be combined with the map array method:

numbers = [2, 16, 100, 121];
console.log(numbers.map(Math.sqrt)); //[1.4142135623730951, 4, 10, 11]


console.log(divider);



console.log('Math.trunc(number)');	
// Removes any decimals and returns the integer part of number (truncate).

console.log(Math.trunc(8.88)); //8
console.log(Math.trunc(10.000111)); //10
// Numerical strings can also be evaluated, but should be avoided as a best practice:
console.log(Math.trunc('2.21')); //2

// trunc also operates on arrays:
numbers = [-2, 3.33, -4.44, 8.88];
console.log(numbers.map(Math.trunc)); //[-2, 3, -4, 8]
