// The array method map allows for every element in an array to be mapped or translated, using a given function:

let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
  return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);

// map does not alter the original array.

let pet = ['cat', 'dog', 'bird'];

let pluralize = function(word) {
  return word + 's';
}

let pets = pet.map(pluralize);

console.log(pet);
console.log(pets);

// When using map, many programmers will define the mapping function anonymously in the same statement as the method call map:

let numbers = [3, 32, 2544];

let numDoubled = numbers.map(function (n) {
  return n*2;
});

console.log(numDoubled);

let animals = ['hamster', 'parrot', 'ferret'];

let aniPlural = animals.map(function(word) {
  return word + 's';
});

console.log(aniPlural);

