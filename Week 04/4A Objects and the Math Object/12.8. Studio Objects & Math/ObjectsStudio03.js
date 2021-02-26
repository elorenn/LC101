// 12.8.3. Bonus Missions:
// 12.8.3.2. Fuel Required for Launch:

// A general rule of thumb states that it takes about 9 - 10 kg of rocket fuel to lift 1 kg of mass into low-earth orbit (LEO). For our mission, we will assume a value of 9.5 kg to calculate how much fuel we need to launch our crew into space.

// 9.5kg of rocket fuel to lift 1kg of mass

// Code your crewMass function here:
// that returns the total mass of the selected crew members rounded to 1 decimal place.

function crewMass(crewArr) {
  let totalMass = 0;
  for (i = 0; i < crewArr.length; i++) {
    totalMass += crewArr[i].mass;
  }
  return (Math.round(totalMass * 10) / 10);
}

// Code your fuelRequired function here:
// The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg. Create a fuelRequired function to combine the rocket and crew masses, then calculate and return the amount of fuel needed to reach LEO.

// function fuelRequired(crewArr) {
//   let mass = 75000 + crewMass(crewArr); 
//   return 9.5 * mass;
// }

// Our launch requires a safety margin for the fuel level, especially if the crew members are cute and fuzzy. Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer.

function fuelRequired(crewArr) {
  let mass = 75000 + crewMass(crewArr); 
  let fuel = 9.5 * mass;
  for (i = 0; i < crewArr.length; i++) {
    if ((crewArr[i].species === 'dog') || (crewArr[i].species === 'cat')) {
      fuel += 200;
    } else {
      fuel += 100;
    }
  }
  return Math.ceil(fuel);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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

let crew = [candidateB,candidateC,candidateF]; // one dog, one cat

console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`);