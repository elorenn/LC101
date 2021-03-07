// 16.1. Primitive Data Types

/*
Data types can fall into one of two categories: primitive or object types. A primitive data type is a basic building block. Using primitive data types, we can build more complex data structures or object data types.

  Primitive data types include:
    1. Strings
    2. Numbers
    3. Booleans
    4. undefined
    5. null  

  Primitive data types are immutable.  

  Object data types are mutable.

  Object data types include:
    1. Objects
    2. Arrays
*/

let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

let giraffeTwo = {
  species: "Reticulated Giraffe",
  name: "Alicia",
  weight: null,
  age: 10,
  diet: "leaves"
};

console.log(giraffe.weight); // 1500
console.log(giraffeTwo.weight); // null

// undefined is a primitive data type in JavaScript which is assigned to declared variables, which have not been initialized.

// null is similar to undefined in that it represents an unknown value, however, it is assigned to values that the programmer wishes to keep empty.

