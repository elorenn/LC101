const input = require('readline-sync');
let proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetableOptions = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessertOptions = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let pantry = [proteinOptions,grainOptions,vegetableOptions, beverageOptions,dessertOptions];
let numMeals = 0;

// without pantry:
/*
for (i = 0; i < 6; i++) {
  let mealOptions = [];
  mealOptions.push(proteinOptions[i]);
  mealOptions.push(grainOptions[i]);
  mealOptions.push(vegetableOptions[i]);
  mealOptions.push(beverageOptions[i]);
  mealOptions.push(dessertOptions[i]);
  console.log(mealOptions);
} */

while (numMeals < 1 || numMeals > 6 || isNaN(numMeals)) {
  numMeals = input.question(`How many of the six astronauts aboard will be eating right now? \n\n`);
}

console.log(`\nWonderful! Here is their menu: \n\n        * * *   MENU  * * *   `);

// with pantry:
for (i = 0; i < numMeals; i++) {
  let mealOptions = [];
  for (j = 0; j < 5; j++) {
    mealOptions.push(pantry[j][i]);
  }
  console.log(`\nMeal ${i + 1}: ${mealOptions.join(", ")}`);
  if (mealOptions.includes("kale")) {
    console.log(`\t(Don’t worry, you can have double chocolate tomorrow.)`);
  }
}

/*Part A  
  #1: Initialize variables to store the following arrays. Remember to use descriptive names.
  #2: Construct a for loop that assembles a meal for each of 6 astronauts.
    a. The meals must include one item from each of the source arrays.
    b. Each ingredient can only be used ONCE.
    c. Print out each meal.*/

/*Part C 
  #5: Using a while loop, ask the user to select the number of meals to assemble. Validate the input to make sure it is an integer from 1 - 6. */

/*Skill Boosts: 
  a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
  b. Use an “array of arrays” to store the food options in a ‘pantry’.
  c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.” */