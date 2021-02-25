// 12.5.2. Check Your Understanding:

console.log(Math.floor(-3.87)); // -4
console.log(Math.random(-3.87)); // 0.9706084098579852
console.log(Math.round(-3.87)); // -4     
console.log(Math.trunc(-3.87)); // -3

console.log(Math.ceil(-3.87)); // -3
console.log(Math.abs(-3.87)); // 3.87


/*
Math.abs(number)
Math.ceil(number)	
Math.floor(number)	
Math.max(x,y,z,...)	
Math.min(x,y,z,...)	
Math.pow(x,y)	
Math.random()	
Math.round(number)	
Math.sqrt(number)	
Math.trunc(number)	
*/

let num = Math.floor(Math.random()*10);

console.log(num); // A random number between 0 and 9.

// floor: 0 to 9
// ceil: 1 to 10
// round: 0 to 10

num = Math.round(Math.random()*10);

console.log(num); // A random number between 0 and 10