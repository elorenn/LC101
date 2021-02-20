const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let startsWithA = function(input) {
  return input.slice(0,1).toLowerCase() === "a";
}

// TODO 2: write a validator 
// that ensures input is a vowel

let startsWithVowel = function(input) {
  let letter = input.slice(0,1).toLowerCase();
  return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}

// Be sure to test your code! 

console.log(getValidInput(`Give me a word that starts with 'a': `, startsWithA)); 

console.log(getValidInput(`Give me a word that starts with a vowel: `, startsWithVowel)); 