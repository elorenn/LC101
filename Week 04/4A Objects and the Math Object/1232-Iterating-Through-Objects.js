// 12.3.2. Iterating Through Objects:
// for...in loops are specifically designed to loop through the properties of an object. Each iteration of the loop accesses a key in the object. The loop stops once it has accessed every property.

let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

for (item in giraffe) {
   console.log(item + ", " + giraffe[item]);
}

console.log(' ');

// Inside a for..in loop, we can only use bracket syntax to access the property values.

let dogOne = {
  species: "Canis Lupus Familiaris",
  name: "Agnes",
  weight: 50,
  age: 2.5,
  diet: ["kibble", "chicken", "salmon"],
  sign: function() {
    return this.name + " is a " + this.species + '. She loves to eat ' + this.diet[1];
  }
};

console.log(dogOne);

for (doggy in dogOne) {
  console.log(doggy + ': ' + dogOne[doggy]);
}