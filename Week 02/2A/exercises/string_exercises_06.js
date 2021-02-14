/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
// let notTitle = 'other name';
// let notTitle = 'yet another title';


// this will work as long as the title is only two words, ha:
let titleCase = notTitle.replace((notTitle.charAt(0)),(notTitle.charAt(0).toUpperCase())).replace((notTitle.charAt(notTitle.indexOf(" ")+1)),(notTitle.charAt(notTitle.indexOf(" ")+1)).toUpperCase());

console.log(titleCase);
