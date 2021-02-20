// What if we wanted to take a number (n) and add it to all of the positive integers below it? For example, if n = 5, the function returns 5 + 4 + 3 + 2 + 1 = 15.

function decreasingSum(integer) {
  if (integer === 1){
    return integer;
  } else {
    return integer + decreasingSum(integer-1);
  }
}

console.log(decreasingSum(5)); //15

