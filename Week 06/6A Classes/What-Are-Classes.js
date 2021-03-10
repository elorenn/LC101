// 18.1. What Are Classes?
/* 
  A better way to create multiple, similar objects.

  By convention, class names start with capital letters to distinguish them from JavaScript function and variable names (e.g. MyClass vs. myFunction).
*/

// 18.1.1. An Astronaut Object

let foxAst = {
  name: 'Fox',
  age: 7,
  mass: 12,
  catchPhrase: function(repeats) {
    let phrase = 'LaunchCode';
    for (let i = 0; i < repeats; i++) {
      phrase += ' Rocks';
    }
    return phrase;
  }
}

console.log(`${foxAst.name} is ${foxAst.age} years old and has a mass of ${foxAst.mass} kg.`);

console.log(`${foxAst.name} says, "${foxAst.catchPhrase(3)}."`);

// 18.2. Declaring and Calling a Class

// 18.2.1. Creating a Class 

/*
class ClassName {
   constructor(parameters) {
      //assign properties
   }
   //define methods
}
*/

// Note the keyword constructor. This is a special method for creating objects of the same type, and it assigns the key/value pairs. Parameters are passed into constructor rather than the class declaration. If constructor is left out of a class declaration, JavaScript adds an empty constructor () {} automatically.

// 18.2.1.1. Assigning Properties

class Astronaut {
  constructor(name, age, mass) {
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

// The this keyword defines a key/value pair, where the text attached to this becomes the key, and the value follows the equal sign (this.key = value).

// 18.2.2. Creating a New Class Object

// To create an object from a class, we use the keyword new.

/*
let objectName = new ClassName(arguments);
*/

// new creates an instance of the class, which means that the object generated shares the same set of keys as every other object made from the class. However, the values assigned to each key may differ.

let fox = new Astronaut('Fox', 7, 12);
let hippo = new Astronaut('Hippo', 25, 1500);

console.log(typeof hippo, typeof fox);
console.log(hippo, fox);
console.log(hippo.name);
console.log(fox.name);

