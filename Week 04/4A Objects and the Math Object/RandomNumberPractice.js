let divider = '\n-------------------------\n';

for (i=0; i < 20; i++){
  let num = Math.random();
  console.log(num);
}

console.log(divider);

// Modify the code above to:

// 1) Generate random integers from 1 - 100. Click 'Run' multiple times to make sure 1 and 100 can be generated, but NOT 0. 

for (i=0; i < 20; i++){
  let num = Math.random()*100;
  console.log(Math.ceil(num));
}

// floor: 0 to 99
// ceil: 1 to 100 **
// round: 0 to 100

console.log(divider);

// 2) Generate random integers between -5 and 0, but NOT including 0. Click 'Run' until you verify that -5 can be generated but NOT 0. 

for (i=0; i < 20; i++){
  let num = Math.random()*(-5);
  console.log(Math.floor(num));
}

// floor: -5 to -1 **
// ceil: -4 to -0
// round: -5 to -0

console.log(divider);

// 3) Challenge: Generate random integers from 20 - 30.

for (i=0; i < 20; i++){
  let num = Math.random()*(10);
  console.log(Math.round(num) + 20);
}

// floor: 0 to 9    +20   20 to 29
// ceil:  1 to 10   +20   21 to 30
// round: 0 to 10   +20   20 to 30 **

// Be sure to click 'Run' several times to verify your code generates random numbers properly.
