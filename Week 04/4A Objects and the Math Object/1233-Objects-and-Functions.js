// 12.3.3. Objects and Functions:

// Programmers can pass an object as the input to a function, or use an object as the return value of the function. Any change to the object within the function will change the object itself.

let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

function birthday(animal) {
  animal.age = animal.age + 1;
  return animal;
}

console.log(giraffe.age); //15

birthday(giraffe);

console.log(giraffe.age); //16

birthday(giraffe);

console.log(giraffe.age); //17
