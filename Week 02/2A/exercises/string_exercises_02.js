let num = 1001;
let lengthOfNum = String(num).length;

//Use type conversion to print the length (number of digits) of an integer.

console.log(lengthOfNum); // 4

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num2 = 123.45;
// let lengthOfDec = String(num2).length - 1;
let lengthOfDec = String(num2).replace(".","").length;

console.log(lengthOfDec); // 5

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let number = 123.45;

if (String(number).indexOf(".") === -1) {
  let lengthOfNumber = String(number).length;
  console.log(`${number} is not a decimal and is ${lengthOfNumber} digits long.`);
} else {
  let lengthOfDecimal = String(number).length - 1;
  console.log(`${number} is a decimal and is ${lengthOfDecimal} digits long.`);
}

// lets go bananas

// let banana = "56789111";
// let banana = "567.89111";
let banana = "567.89.111";

if ((banana.indexOf(".") ) === (banana.lastIndexOf("."))) {
  if (String(banana).includes(".")) {
    let lengthOfBanana = String(banana).length - 1;
    console.log(`${banana} is a decimal and is ${lengthOfBanana} digits long.`);
  } else {
    let lengthOfBanana = String(banana).length;
    console.log(`${banana} is not a decimal and is ${lengthOfBanana} digits long.`);
  }
} else {
  console.log(banana + " has more than one decimal. Are you sure this is a number?");
}

