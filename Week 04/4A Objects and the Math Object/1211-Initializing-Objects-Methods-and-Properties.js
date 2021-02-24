// 12.1.1. Initializing Objects:
// 12.1.2. Methods and Properties:

// A property of an object is a key/value pair of an object. The property's name is the key and the property's value is the data assigned to that key.

// A method performs an action on the object, because it is a property that stores a function.

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

console.log(tortoiseOne);
console.log(tortoiseOne.species);
console.log(tortoiseOne.diet);
console.log(tortoiseOne.diet[0]);
console.log(tortoiseOne.sign());

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

console.log(' ');
console.log(dogOne);
console.log(dogOne.species);
console.log(dogOne.diet);
console.log(dogOne.diet[0]);
console.log(dogOne.sign());

/* Programmers use the this keyword when they call an object's property from within the object itself. 

We could use the object's name instead of this, but this is shorter and easier to read. 

For example, the method, sign, could have a return statement of tortoiseOne.name + " is a " + tortoiseOne.species". 

However, that return statement is bulky and will get more difficult to read with more references to the tortoiseOne object. */



// 12.2.1. Accessing Properties:

/* Programmers have two ways to access the value of property:
  1. Bracket syntax: object["key"]
  2. Dot notation: object.key  
*/

console.log(dogOne.weight);
console.log(dogOne.age);
console.log(dogOne['weight']);
console.log(dogOne['age']);
console.log(' ');

/* Recall, the only restraint in naming a key is that it has to be a valid JavaScript string. Since a key could potentially have a space in it, bracket syntax would be the only way to access the value in that property because of the quotes. */



// 12.2.2. Modifying Properties:

// Objects are mutable data structures. When you change the value of a property, the original object is modified and a copy is NOT made.

// update Pete's weight as he has gained 10lbs:
console.log(tortoiseOne.weight);

newWeight = tortoiseOne.weight + 10;

tortoiseOne["weight"] = newWeight;

console.log(tortoiseOne["weight"]);



// 12.2.2.1. Add New Key/Value Pairs:
// After declaring and initializing an object, we can add new properties at any time by using bracket syntax:

dogOne["favorite activity"] = 'Catching balls.';
dogOne['gender'] = 'female';

console.log(dogOne);
console.log(dogOne['favorite activity']);
console.log(dogOne.gender);