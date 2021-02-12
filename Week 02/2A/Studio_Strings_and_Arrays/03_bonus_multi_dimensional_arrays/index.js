let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

// let cargoHold = [foodCabinet,equipmentCabinet,petsCabinet,sleepAidsCabinet];

let cargoHold = [];
cargoHold.push(foodCabinet,equipmentCabinet,petsCabinet,sleepAidsCabinet);
// console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let whichCabinet = input.question(`Welcome to the Cargo Hold.\nPlease enter the number for the cabinet you would like to access: 

1.Food Cabinet 
2.Equipment Cabinet 
3.Pets Cabinet 
4.Sleep Aids Cabinet 

`);


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cargoHold[whichCabinet - 1] === undefined) {
  console.log(`Sorry, cabinet ${whichCabinet} does not exist.`);
} else {
  let whichItem = (input.question(`\nCabinet ${whichCabinet} contains the following items: \n\n${
    cargoHold[whichCabinet - 1].join("\n")
  }\n\nPlease enter the item you want to select: \n\n`).toLowerCase());
  if (cargoHold[whichCabinet - 1].includes(whichItem)) {
    let itemIndex = cargoHold[whichCabinet - 1].indexOf(whichItem);
    console.log(`\nYou're in luck! Cabinet ${whichCabinet} DOES contain "${cargoHold[whichCabinet - 1][itemIndex]}."\nHere you go: \n\n\t\t  * * *   ${cargoHold[whichCabinet - 1][itemIndex].toUpperCase()}   * * *`);  
  } else {
    console.log(`\nSorry, Cabinet ${whichCabinet} DOES NOT contain "${whichItem}."`);
  }
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

