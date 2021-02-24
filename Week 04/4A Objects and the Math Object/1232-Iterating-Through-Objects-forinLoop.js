// 12.3.2. Iterating Through Objects
// For In Loop

let tortoiseOne = {
  species: "Galapagos Tortoise",
  name: "Pete",
  weight: 919,
  age: 85,
  diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (key in tortoiseOne) {
  console.log(tortoiseOne[key]);
}

for (key in tortoiseOne) {
  console.log('Turtle Club: ' + tortoiseOne[key]);
}
