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
console.log(" ");
console.log(`Cargo Hold: ` + cargoHold);
console.log("Hold status: " + holdStatus(cargoHold));
console.log(" ");

/*
First, steal some fuel from the shuttle.
Then swipe two items from the cargo hold.
Finally, you need to print a receipt for the accountant.
*/

// leave this much fuel: 100001
// steal this much fuel: 99999
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

// replace stolen items to keep array length the same
let nothingToSeeHere = function(items) {
  let stolenItems = [];
  stolenItems = cargoHold.splice(3, 2, 'large rock', 'Arsène Lupin novel');
  return stolenItems;
}

let irs = function(fuelLevel, cargoHold) {
  let loot = nothingToSeeHere(cargoHold);
  let stolenFuel = notDoingAnythingBad(fuelLevel);

  fuelLevel -= notDoingAnythingBad(fuelLevel);

  return `Raided ${stolenFuel}kg of fuel from the tanks, and stole ${loot[0]} and ${loot[1]} from the cargo hold.`;
}

let receipt = irs(fuelLevel, cargoHold);
console.log(receipt);

console.log(" ");
console.log("Fuel Level After Theft: " + (fuelLevel -= notDoingAnythingBad(fuelLevel)));
console.log("Fuel Level Status: " + checkFuel(fuelLevel));
console.log(" ");

console.log(`Cargo Hold: ` + cargoHold);
console.log("Hold status: " + holdStatus(cargoHold));
console.log(" ");

