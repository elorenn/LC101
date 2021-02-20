// The factorial of a number (n!) is the product of a positive, whole number and all the positive integers below it.
// For example, four factorial is 4! = 4*3*2*1 = 24, and 5! = 5*4*3*2*1 = 120.

//The following concept check assumes that only positive integers are passed to the function:

/*
function factorial(integer) {
  if ((typeof integer === 'string') || (integer < 0) || (!Number.isInteger(integer))) {
    return 'ERROR: Not a Positive Number.';
  } else if (integer === 1) {
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}
*/

function factorial(integer) {
  if ((typeof integer === 'string') || (integer < 0) || (String(integer).includes('.'))) {
    return 'ERROR: Not a Positive Number.';
  } else if (integer === 1) {
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}

console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial('N')); //ERROR: Not a Positive Whole Number.
console.log(factorial(-5)); //ERROR: Not a Positive Whole Number.
console.log(factorial(4.5)); //ERROR: Not a Positive Whole Number.

// Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.

