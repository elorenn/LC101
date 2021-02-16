let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.

console.log(language.slice(0,1) + language.slice(4,5));

//b) Without using .slice(), use method chaining to accomplish the same thing.

console.log(language.charAt(0) + language.charAt(4));

console.log(language.replace('ava',"").replace('cript',""));

console.log(language.substr(0,2).replace("a","S"));

console.log(language.substr(0,5).replace("ava",""));

console.log(language.charAt(0).concat("S"));

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${language.charAt(0) + language.charAt(4)}'.`);

let initials = "JS";

console.log(`The abbreviation for '${language}' is '${initials}'.`);

console.log(" ");

let lang = {
  name: "Cascading Style Sheets",
  initials: "CSS"
};

console.log(`The abbreviation for '${lang.name}' is '${lang.initials}'.`);
console.log(`The abbreviation for '${lang['name']}' is '${lang['initials']}'.`);

//d) Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(" ");

console.log(language.toLowerCase().repeat(55).match(/ja/g).join(""));