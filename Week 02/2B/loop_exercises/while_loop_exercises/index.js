//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let numAstro = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive integer value greater than 5000 but less than 30000. */

const input = require(`readline-sync`);
fuelLevel = input.question(`What is the Fuel Level (5000 - 30000)? \n\n`);

while (fuelLevel <= 5000 || fuelLevel >= 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question(`\nInvalid Fuel Level. Please enter a number greater than 5000 but less than 30000: \n\n`);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstro = input.question(`\nHow many astronauts are aboard this mission? \n\n`); 
while (numAstro > 7 || numAstro < 1 || isNaN(numAstro)) {
  numAstro = input.question(`\nError. There can only be 1 to 7 astronauts. How many astronauts are aboard this mission? \n\n`); 
} 
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

/*
while (fuelLevel > 0) {
  fuelLevel -= (100 * numAstro);
  altitude += 50;
} // this doesn't work for only 1 astronaut
*/

while (fuelLevel-100*numAstro >= 0) {
  altitude += 50;
  fuelLevel -= 100*numAstro;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”*/

let altGain = `\nThe shuttle gained an altitude of ${altitude}km.`;

/*If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (altitude >= 2000) {
  altGain += " Orbit achieved!";
  // console.log(altGain + " Orbit achieved!");
} else {
  altGain += " Failed to reach orbit.";
  // console.log(altGain + " Failed to reach orbit.");
}

