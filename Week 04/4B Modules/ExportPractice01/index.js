// const palindromeCheck = require('./practiceExports.js');
// this imports the the isPalindrome function from practiceExports.js, allowing us to use it here.

// console.log(typeof palindromeCheck); //function
// console.log(palindromeCheck('that')); //false
// console.log(palindromeCheck('radar')); //true

/*
  1. Assigning isPalindrome to module.exports allows us to use that function in other files.
  
  2. Even though we require the file practiceExports.js, it only assigns isPalindrome to the variable palindromeCheck. Thus, typeof palindromeCheck returns function.
  
  3. palindromeCheck now behaves in the same way as isPalindrome, so calling palindromeCheck('that') evaluates to false, since 'that' is not a palindrome.
*/

const practice = require('./practiceExports.js');

console.log(typeof practice); //object
console.log(practice);
console.log(typeof practice.isPalindrome); //function
console.log(typeof practice.evenOrOdd); //function
console.log(typeof practice.randomArrayElement); //function

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom')); //true
console.log(practice.evenOrOdd(9)); //Odd

for (i=0; i < 3; i++){
   console.log(practice.randomArrayElement(arr));
}

/*
Just like functions, we want to keep modules small and specific. 

Each module should focus on a single idea and contain only a few related functions. 

With this in mind, we see that practiceExports falls short of the goal. 

Even though it is small in size, isPalindrome, evenOrOdd and randomArrayElement do not really compliment each other. 

They would be better placed in different modules.

If you find yourself writing lots of functions in a single file, consider splitting them up into smaller, more detailed modules.
*/