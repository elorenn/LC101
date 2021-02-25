// 12.6.2. Rounding to Decimal Places

// The ceil, floor, and round methods all take a decimal value and return an integer, but what if we wanted to round 5.56789123 to two decimal places?

// We cannot alter what round does---it always returns an integer. However, we CAN change the number used as the argument.

console.log(Math.round(1.23)); //1

//what if we want to round to one decimal place (1.2)?

//Let's multiply 1.23 by 10 (1.23*10 = 12.3) 

console.log(Math.round(12.3)); //12

//if we divide 12 by 10 (12/10 = 1.2) we get the result of rounding 1.23 to one decimal place.

//Combining these steps gives us:

console.log(Math.round(1.23*10)/10); //1.2

//so: 

let num = 1.23

console.log(Math.round(num * 10) / 10); //1.2

num = 8.357

console.log(Math.round(num * 10) / 10); //8.4
console.log(" ");

//what if we wanted to round 5.56789123 to two decimal places? 

console.log(Math.round(5.56789123)); //6
console.log(Math.round(5.56789123 * 100) / 100); //5.57

console.log(" ");

//The clever trick for rounding to decimal places is to multiply the original number by some factor of 10, round the result, then divide the integer by the same factor of 10. The number of digits we want after the decimal are shifted in front of the '.' before rounding, then moved back into place by the division.

/*
Rounding to Decimal Places:

Decimal   | Multiply |
Places    | & Divide | 
In Answer |	By	     | Syntax
__________|__________|______________________________
1	        | 10	     | Math.round(number*10)/10
2	        | 100	     | Math.round(number*100)/100
3	        | 1000	   | Math.round(number*1000)/1000
etc.      |	etc.	   | etc. 

*/

let number = 5.56789123;

//round to integer:
console.log(Math.round(number)); //6

//round to one decimal places:
console.log(Math.round(number * 10) / 10); //5.6

//round to two decimal places:
console.log(Math.round(number * 100) / 100); //5.57

//round to three decimal places:
console.log(Math.round(number * 1000) / 1000); //5.568

//round to four decimal places:
console.log(Math.round(number * 10000) / 10000); //5.5679

