// 11.4. Receiving Function Arguments:
// 11.4.1. Example: A Generic Input Validator

const input = require('readline-sync');

function getValidInput(prompt, isValid) {

   // Prompt the user, using the prompt string that was passed
   let userInput = input.question(prompt);

   // Call the boolean function isValid to check the input
   while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
   }

   return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
   return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));

// If we need to get different input from the user, we can simply call getValidInput with different arguments:

let isValidPassword = function(password) {

   // Passwords should have at least 8 characters
   if (password.length < 8) {
      return false;
   }

   return true;
};

console.log(getValidInput('Create a password:', isValidPassword));