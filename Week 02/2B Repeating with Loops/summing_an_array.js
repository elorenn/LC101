// Another common use of the accumulator pattern is to compute some value using each of the elements of an array.

let numbers = [2, -5, 13, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  // console.log(total);
  total += numbers[i];
}