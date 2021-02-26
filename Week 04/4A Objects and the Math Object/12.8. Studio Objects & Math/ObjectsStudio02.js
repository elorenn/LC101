// 12.8.2. Orbit Calculations:

// Code your orbitCircumference function here:
/* 
  The animals will achieve a circular orbit with an altitude of 2000 km.
  Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.
*/

function orbitCircumference(radius = 2000) {
  return Math.round(2 * (Math.PI) * radius);
}

// orbitCircumference(2000); //12566

// Code your missionDuration function here:
/* 
  Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.
  
  Calculate how long it will take our animals to complete 5 orbits (time = distance/speed). Round the answer to 2 decimal places, then return the result.
*/

function missionDuration(numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  // let distance = orbitCircumference(orbitRadius);
  // time = ((distance)/(orbitSpeed)) * numOrbits;
  // let rounded = Math.round(time * 100) / 100;
  // return rounded;
  return (Math.round((((orbitCircumference(orbitRadius))/(orbitSpeed)) * numOrbits) * 100))/100;
}

console.log(`The mission will travel ${orbitCircumference()} km around the planet, and it will take ${missionDuration(5)} hours to complete.\n`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(numArr) {
  let index = Math.floor(Math.random() * numArr.length);
  return numArr[index];
}

// Code your oxygenExpended function here:
/*
  The function should take a candidate object as a parameter and NOT the crew array.

  The spacewalk will last for three orbits around the earth. Use missionDuration to calculate how many hours the spacewalk will take.

  Use the candidate's o2Used method to calculate how much oxygen (O 2) they consume during the spacewalk. Round the answer to 3 decimal places.

  We should not restrict our mission to the default values for orbital radius and orbital speed. Refactor oxygenExpended to accept values for these items. 
*/

function oxygenExpended(candidateObj, numOrbits = 5, orbitRadius = 2000, orbitSpeed = 28000) {
  let hours = missionDuration(numOrbits);
  let oxUsed = candidateObj.o2Used(hours);
  return `${candidateObj.name} will perform the spacewalk, which will last ${hours} hours and require ${oxUsed} kg of oxygen.\n`;
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];

console.log('RANDOM: ');
console.log(oxygenExpended(selectRandomEntry(crew), 3));

// 12.8.3. Bonus Missions
// Instead of randomly selecting a crew member for the spacewalk, have your program select the animal with the smallest oxygen consumption.

function selectSpacewalkAstronaut(crewArr, numOrbits = "3") {
  let oxUsedArr = [];
  let hours = missionDuration(numOrbits);
  for (i = 0; i < crewArr.length; i++) {
    oxUsedArr.push(crewArr[i].o2Used(hours));
  }
  let smallestConsumption = Math.min(...oxUsedArr);
  let index = oxUsedArr.indexOf(smallestConsumption);
  return crewArr[index];
}

console.log('SMALLEST OXYGEN CONSUMPTION: ');
console.log(oxygenExpended(selectSpacewalkAstronaut(crew), 3));
