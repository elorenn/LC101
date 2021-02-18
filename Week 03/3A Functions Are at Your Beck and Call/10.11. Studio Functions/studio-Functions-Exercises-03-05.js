//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.


//10.11.1. Reverse Characters:
//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.
//b) Within the function, split the string into an array, then reverse the array.
//c) Use join to create the reversed string and return that string from the function.
//d) Below the function, define and initialize a variable to hold a string.
//e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
//f) Use method chaining to reduce the lines of code within the function.


// function reverseCharacters(str) {
//   return str.split('').reverse().join('');
// }

let string = 'esnesnon';
// string = 'apple';
// string = 'LC101';
// string = 'Capitalized Letters';
// string = 'I love the smell of code in the morning.';

// console.log(reverseCharacters(string));


// -------------------------------------------------------


//10.11.2. Reverse Digits:
//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")
//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.
//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. Return the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

// console.log(reverseCharacters(1234)); //TypeError

function reverseCharacters(str) {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  } else {
    return Number(String(str).split('').reverse().join(''));
  }
}


console.log(reverseCharacters(string)); //nonsense

let testChars = 1234; //4321
// testChars = 'LC101';
// testChars = 8675309;
// testChars = 'radar';

console.log(reverseCharacters(testChars));


// -------------------------------------------------------


//10.11.3. Complete Reversal:
//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.

function reverseArrayPlusElements (array) {
  let reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = reverseCharacters(array[i]);
  }
  return reversedArray.reverse();
}

let arrayTest1 = ['apple', 'potato', 'Capitalized Words']; 
//['sdroW dezilatipaC', 'otatop', 'elppa']
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
//[9035768, 8311, 24, 7988, 321]
let arrayTest3 = ['hello', 'world', 123, 'orange'];
//['egnaro', 321, 'dlrow', 'olleh']

console.log(reverseArrayPlusElements(arrayTest1));
console.log(reverseArrayPlusElements(arrayTest2));
console.log(reverseArrayPlusElements(arrayTest3));
