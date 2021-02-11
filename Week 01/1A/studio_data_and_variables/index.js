// Declare and initialize the 12 variables here:

const input = require(`readline-sync`);
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = Number(input.question("How many astronauts are going on this mission? "));
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let divider = "-------------------------------------";

// Write code to generate the LC04 report here:

console.log(`
${divider}
> LC04 - LAUNCH CHECKLIST
${divider}
Date: ${date}
Time: ${time}\n
${divider}
> ASTRONAUT INFO
${divider}
* count: ${astronautCount}
* status: ${astronautStatus}\n
${divider}
> FUEL DATA
${divider}
* Fuel temp celsius:${fuelTempCelsius} C
* Fuel level: ${fuelLevel}\n
${divider}
> MASS DATA
${divider}
* Crew mass: ${crewMassKg} kg
* Fuel mass: ${fuelMassKg} kg
* Shuttle mass: ${shuttleMassKg} kg
* Total mass: ${totalMassKg} kg\n
${divider}
> FLIGHT PLAN
${divider}
* weather: ${weatherStatus}\n
${divider}
> OVERALL STATUS
${divider}
* Clear for takeoff: YES
`);


// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.