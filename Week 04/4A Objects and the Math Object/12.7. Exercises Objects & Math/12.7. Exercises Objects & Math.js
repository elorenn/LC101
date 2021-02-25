// 12.7. Exercises: Objects & Math
// 12.7.1. Part 1: Create More Objects:

let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let dog = {
  name: 'Leroy',
  species: 'Beagle',
  mass: 14,
  age: 5 
};

let tardigrade = {
  name: 'Almina',
  species: 'Tardigrade',
  mass: 0.0000000001,
  age: 1
};

// 12.7.1.1. Add a New Property:
// After you have created the other object literals, add the astronautID property to each one.

superChimpOne['astronautID'] = 1;
salamander['astronautID'] = 2;
superChimpTwo['astronautID'] = 3;
dog['astronautID'] = 4;
tardigrade['astronautID'] = 5;

// 12.7.1.2. Add a Method:
// Add a move method to each animal object. The move method will select a random number of steps from 0 to 10 for the animal to take. The number can be 0 as well as 10.

let moveMethod = function () {
  let howManySteps = Math.round(Math.random()*10);
  return howManySteps;
}

// alternative: Math.floor(Math.random()*11);

superChimpOne['moveMethod'] = moveMethod;
salamander['moveMethod'] = moveMethod;
superChimpTwo['moveMethod'] = moveMethod;
dog['moveMethod'] = moveMethod;
tardigrade['moveMethod'] = moveMethod;

// console.log(superChimpOne.moveMethod());

// 12.7.1.3. Store the Objects:
// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, tardigrade];

// console.log(crew);

// 12.7.2. Part 2: Crew Reports:
// Print out the relevant information about each animal.

function crewReports(animalObj) {
  return(`${animalObj.name} is a ${animalObj.species}. They are ${animalObj.age} years old and ${animalObj.mass} kilograms. Their ID is ${animalObj.astronautID}.\n`);
}

for (i = 0; i < crew.length; i++) {
  let report = crewReports(crew[i]);
  console.log(report);
}


// 12.7.3. Part 3: Crew Fitness:
// Start an animal race!
/*
Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.

Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

Return the array from the function, then print the results to the console (one animal per line). */

function fitnessTest(crewArr) {
  let resultsArr = [];
  for (i = 0; i < crewArr.length; i++) {
    let steps = 0;
    let turn = 0;
    while (steps < 20) {
      steps += crewArr[i].moveMethod();
      turn++;
    }
    resultsArr.push( `${crewArr[i].name} took ${turn} turns to take 20 steps.`);
  }
  return resultsArr;
}

for (k = 0; k < (fitnessTest(crew)).length; k++) {
  console.log(fitnessTest(crew)[k]);
}
