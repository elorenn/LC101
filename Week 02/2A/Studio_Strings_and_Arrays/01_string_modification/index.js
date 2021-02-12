const input = require('readline-sync');
let str = "LaunchCode";
let howMany = Number(input.question(`How many letters should we remove from the start of ${str} and move to the end? `));

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


if (howMany <= str.length) {
  let newString = str.slice(howMany,10).concat(str.slice(0,howMany));
  console.log(`If you move the first ${howMany} characters of "${str}" to the end, it looks like "${newString}."`);
} else {
  let newString = str.slice(3,10).concat(str.slice(0,3));
  console.log(`Error, Cannot Compute: ${howMany} is longer than the word "${str}."\nHowever, if you move the first 3 characters of "${str}" to the end, it looks like "${newString}."`);
}

//Use a template literal to print the original and modified string in a descriptive phrase.


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
