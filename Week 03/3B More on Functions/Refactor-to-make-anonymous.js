// Convert the following named function to an anonymous function that is stored in a variable:

function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

let reverseVariable = function(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverseVariable("LaunchCode"));

let f1 = function(str) {
   return str + str;
};

let f2 = f1;

console.log(f1("abcd"));
console.log(f2("abcd"));
