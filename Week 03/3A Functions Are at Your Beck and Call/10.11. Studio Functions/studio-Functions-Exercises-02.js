//10.11.4. Bonus Missions:

//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”

function calculateAreaOfRectangle (length, width=length) {
  return length * width;
}

console.log(calculateAreaOfRectangle(3,5)); //15
console.log(calculateAreaOfRectangle(3)); //9 

let area = calculateAreaOfRectangle(4,5);//20

console.log(`The area is ${area}cm^2.`);

// Use these test cases:
// length = 2, width = 4 (area = 8)
// length = 14, width = 7 (area = 98)
// length = 20 (area = 400)

console.log(calculateAreaOfRectangle(2,4)); //8
console.log(calculateAreaOfRectangle(14,7)); //98
console.log(calculateAreaOfRectangle(20)); //400

