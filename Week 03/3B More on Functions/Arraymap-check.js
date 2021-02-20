// finish the program below to halve each number in an array:

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()

let intoHalve = function(n) {
  return n/2;
} 

let halved = nums.map(intoHalve);

console.log(halved);