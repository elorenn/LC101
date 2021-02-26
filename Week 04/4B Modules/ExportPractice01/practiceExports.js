// 13.4. Exporting Modules:

function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
  if (num%2===0){
      return "Even";
  } else {
      return "Odd";
  }
}

function randomArrayElement(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}


// 13.4.2. Exporting a Single Function:

// module.exports = isPalindrome; 
// This makes the function available to other files.


// 13.4.3. Exporting Multiple Functions:

module.exports = {
   isPalindrome: isPalindrome,
   evenOrOdd: evenOrOdd,
   randomArrayElement: randomArrayElement
}
//The keys will be the names used in index.js to call the functions. The values are the functions themselves.


/*
You might be tempted to use three statements to export the three functions:

module.exports = isPalindrome;
module.exports = evenOrOdd;
module.exports = randomArrayElement;

This will NOT work, because Node expects only ONE module.exports statement in a file. No error will be thrown if you use more than one, but require('./practiceExports.js') will only pull in the information from the LAST statement.
 */