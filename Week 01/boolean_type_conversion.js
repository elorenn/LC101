console.log(Boolean("true")); //true
console.log(Boolean("TRUE")); //true 
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean('')); //false
console.log(Boolean('LaunchCode')); //true

console.log("-------------------------------------");

console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean('h')); //true
console.log(Boolean('false')); //true

console.log("-------------------------------------");

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(2)); //true
console.log(Boolean(3)); //true

/*
Under which conditions does Boolean convert a string to true? 
      Whenever the string is non-empty.
*/

console.log("-------------------------------------");

console.log(5 == 5); //true 
console.log(5 == 6); //false
console.log(5 == "5"); //true **
console.log(5 === "5"); //false **
console.log(5 === 5); //true **
console.log(5 === 6); //false
console.log("4" == "5"); //false
console.log("4" === "5"); //false
console.log("5" == "5"); //true
console.log("5" === "5"); //true

console.log("-------------------------------------");

console.log(true == "true"); //false
console.log(true == true); //true

console.log("-------------------------------------");

/*
In order to properly make a comparison, the two operands must be the same type. If the two operands to == are of different data types, JavaScript will implicitly convert the operands so that the values are of the same data type before comparing the two. For this reason, the == operator is often said to measure loose equality.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using
*/

console.log('0' == 0); //true
console.log(0 == ''); //true
console.log('0' == ''); //false

console.log("-------------------------------------");

/*
The operator === compares two operands without converting their data types. In other words, if a and b are of different data types (say, a is a string and b is a number) then a === b will always be false.

For this reason, the === operator is often said to measure strict equality.

Just as equality operator == has the inequality operator !=, there is also a strict inequality operator, !==. The boolean expression a !== b returns true when the two operands are of different types, or if they are of the same type and have different values.

*/

console.log(7 === "7"); //false
console.log(0 === false); //false
console.log(0 === ''); //false


console.log("-------------------------------------");

console.log(7 == "7"); //true
console.log(0 == false); //true
console.log(0 == ''); //true

console.log("-------------------------------------");

console.log(7 == 7); //true
console.log("dog" == "dog"); //true
console.log(7 == 5); //false
console.log("dog" == "cat"); //false

console.log("-------------------------------------");

console.log(7 != 5); //true
console.log("dog" != "cat"); //true
console.log(7 != 7); //false
console.log("dog" != "dog"); //false

console.log("-------------------------------------");

console.log(7 > 5); //true
console.log('b' > 'a'); //true
console.log(5 > 7); //false
console.log('a' > 'b'); //false

console.log("-------------------------------------");

console.log(5 < 7); //true
console.log('a' < 'b'); //true
console.log(7 < 5); //false
console.log('b' < 'a'); //false

console.log("-------------------------------------");

console.log(7 >= 5); //true
console.log(7 >= 7); //true
console.log('b' >= 'a'); //true
console.log('b' >= 'b'); //true
console.log(5 >= 7); //false
console.log('a' >= 'b'); //false

console.log("-------------------------------------");

console.log(5 <= 7); //true
console.log(5 <= 5); //true
console.log('a' <= 'b'); //true
console.log('a' <= 'a'); //true
console.log(7 <= 5); //false
console.log('b' <= 'a'); //false

