// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
const milesPerKilometer = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

/*
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilometer);
*/

// Code your solution to exercises 3 and 4 here:

let milesToMars = distanceMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
let marsTripUpdate = shuttleName + " will take " + daysToMars + " days to reach Mars.";

console.log(marsTripUpdate);

// Code your solution to exercise 5 here:

let milesToMoon = distanceMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
let moonTripUpdate = shuttleName + " will take " + daysToMoon + " days to reach the Moon.";

console.log(moonTripUpdate);