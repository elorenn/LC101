// 12.3. Coding With Objects:
// 12.3.1. Booleans and Objects:

/* Objects are not stored by their properties or by value,but by reference. 

Storing something by reference means that it is stored based on its location in memory. This can lead to some confusion when comparing objects. 

Even though tortoiseOne and tortoiseTwo have the same keys and values, they are stored in separate locations in memory. 

This means that even though you can compare the properties in different objects for equality, you cannot compare the objects themselves for equality. */

let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"],
    sign: function() {
        return this.name + " is a " + this.species;
    }
 };

let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 800,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species;
   }
 };

console.log(tortoiseOne == tortoiseTwo); //false
console.log(tortoiseOne === tortoiseTwo); //false
console.log(tortoiseOne.species === tortoiseTwo.species); //true
console.log(tortoiseOne.age === tortoiseTwo.age); //true

tortoiseOne['gender'] = 'male';
tortoiseTwo['gender'] = 'female';

console.log(tortoiseOne.gender === tortoiseTwo.gender); //false



