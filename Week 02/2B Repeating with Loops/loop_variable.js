// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

/*
for (let i = 0; i < 51; i++) {
  console.log(i);
}
*/

/*
for (let i = 0; i > -51; i--) {
  console.log(i);
}
*/

/*
for (let i = 0; i < 101; i = i+2) {
  console.log(i);
}
*/


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

let goose = getRandomInt(1,10);

for (let i = 1; i < 11; i++) {
  if (i === goose) {
    console.log(i + " goose");
  } else {
    console.log(i + " duck");
  }
}
