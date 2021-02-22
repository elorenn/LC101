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

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

/*
C. First, steal some fuel from the shuttle:

  a. Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

  b. You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

  c. Once you figure out how much fuel to pump out, return that value. //100001

  d. Decide where to best place your function call to gather our new fuel.
*/

let notAThief = function(fuel) {
  // console.log(fuel);
  // console.log(checkFuel(fuel));
  if (!(checkFuel(fuel) === 'green')) {
    return fuel + 1;
  } else {
    return notAThief(fuel/2);
  }
}

console.log('THIS: ' + notAThief(200000));

let nonSuspiciousFunction = function(fuel) {
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

console.log(nonSuspiciousFunction(fuelLevel));

console.log(checkFuel(nonSuspiciousFunction(100001)));

console.log(checkFuel(notAThief(100001)));

