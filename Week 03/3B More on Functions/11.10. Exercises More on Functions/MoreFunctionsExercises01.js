function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Starting Fuel Level: " + fuelLevel);
console.log("Fuel Level Status: " + checkFuel(fuelLevel));

/*
C. First, steal some fuel from the shuttle:

  a. Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

  b. You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

  c. Once you figure out how much fuel to pump out, return that value. //99999

  d. Decide where to best place your function call to gather our new fuel.
*/

let notDoingAnythingBad = function(fuel) {
   if (checkFuel(fuel) === 'green') {
      return fuel - 100001;
   }
   else if (checkFuel(fuel) === 'yellow') {
      return fuel - 50001;
   }
   else {
      return fuel;
   }
};

// leave this much fuel: 100001
// steal this much fuel: 99999
console.log('Steal This Much Fuel: ' + notDoingAnythingBad(fuelLevel));

fuelLevel -= notDoingAnythingBad(fuelLevel);

console.log("Fuel Level After Theft: " + fuelLevel);
console.log("Fuel Level Status: " + checkFuel(fuelLevel));





