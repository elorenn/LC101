// 12.8. Studio: Objects & Math
// 12.8.1. Select the Crew

// 12.8.1.1. Randomly Select ID Numbers:
// Code your selectRandomEntry function here:

// select a random entry from the idNumbers array:
function selectRandomEntry(numArr) {
  let index = Math.floor(Math.random() * numArr.length);
  return numArr[index];
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedIds = [];

while (selectedIds.length < 3) {
  let id = selectRandomEntry(idNumbers);
  if (!(selectedIds.includes(id))) {
    selectedIds.push(id);
  }
}

//12.8.1.2. Build a crew Array:
// Code your buildCrewArray function here:

/* 
Design a function that takes two arrays as parameters. These hold the randomly selected ID numbers and the candidate objects.

Use one or more loops to check which animals hold the lucky ID numbers. They will be going on the space mission! Store these animals in a crew array, and then return that array.
*/

function buildCrewArray (selectedIdsArr, candidatesObjArr) {
  let crewArray = [];
  for (i = 0; i < selectedIdsArr.length; i++) {
    for (j = 0; j < candidatesObjArr.length; j++) {
      if (candidatesObjArr[j].astronautID === selectedIds[i]) {
        crewArray.push(candidatesObjArr[j]);
      }
    }
  }
  return crewArray;
}

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

console.log(`${buildCrewArray(selectedIds,animals)[0].name}, ${buildCrewArray(selectedIds,animals)[1].name}, and ${buildCrewArray(selectedIds,animals)[2].name} are going to space!`);



