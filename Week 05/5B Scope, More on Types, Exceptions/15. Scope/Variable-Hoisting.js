// 15.2.2. Variable Hoisting

console.log(hoistedVar); // undefined

// console.log(notHoisted); 
// ReferenceError: Cannot access 'notHoisted' before initialization

var hoistedVar = 'hoisted!';
let notHoisted = 'not!';

console.log(hoistedVar); // hoisted!
console.log(notHoisted); // not!