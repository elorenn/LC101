word = ' JavaScript ';

console.log(word); 

/* Returns a copy of the given string, with all uppercase letters converted to lowercase. */
console.log(word.toLowerCase()); 

/* Returns a copy of the given string, with all lowercase letters converted to uppercase.*/
console.log(word.toUpperCase()); 

/* Returns the index of the first occurrence of the substring in the string, and returns -1 if the substring is not found. */
console.log(word.indexOf("v")); 
console.log(word.indexOf("V")); 

/* Returns a copy of the given string with the leading and trailing whitespace removed. */
console.log(word.trim()); 

/* Returns a copy of stringName, with the first occurrence of searchChar replaced by replacementChar. */
console.log(word.replace("S","X")); 
console.log(word.replace("v","")); 

/* Returns the substring consisting of characters from index i through index j-1. */
console.log(word.slice(5,9)); 
console.log(word.slice(5)); 

console.log("dogs and dogs and dogs!".indexOf("and"));
console.log("dogs and dogs and dogs!".indexOf("ad"));
