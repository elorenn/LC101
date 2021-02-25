// 12.6. Combining Math Methods
// 12.6.1. Random Selection From an Array

function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

for (i=0; i < 8; i++){
  console.log(randomSelection(happiness));
}

console.log(" ");

//To select a random item from the array happiness, we need to randomly generate an index value from 0 to 7. Since Math.random() returns a decimal number between 0 and 1.

// happiness.length //8
// Math.floor(Math.random()*8); //0 to 7
// floor: 0 to 7
// ceil: 1 to 8 
// round: 0 to 8

//Experiment with the code above. Try to:

//a) Print 3 random selections from each array.

for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}

console.log(" ");

function randomSelectionMultiple(arr1, arr2){
  let index1 = Math.floor(Math.random()*arr1.length);
  let index2 = Math.floor(Math.random()*arr2.length);
  return arr1[index1] + '\n' + arr2[index2];
}

for (i=0; i < 3; i++){
  console.log(randomSelectionMultiple(happiness, words));
}

console.log(" ");

//b) Have the code randomly pick one array, and then print 2 random items from it.

function randomArray(arr1, arr2) {
  let whichArry = Math.round(Math.random());
  if (whichArry === 0) {
    thisArry = arr1;
  } else {
    thisArry = arr2;
  }
  for (i=0; i < 2; i++){
    console.log(randomSelection(thisArry));
  }
}

randomArray(happiness, words);

console.log(" ");

//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

let newArray = [];
newArray.push(randomSelection(happiness));
newArray.push(randomSelection(words));
console.log(newArray);