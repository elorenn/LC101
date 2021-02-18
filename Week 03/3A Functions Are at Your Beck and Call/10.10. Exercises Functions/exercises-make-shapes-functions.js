//10.10.1. Rectangles:

function makeLine(size, char = '#') {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += char;
  }
  return line;
}

console.log(makeLine(5)); //#####

function makeSquare(size, char = '#') {
  return makeRectangle(size,size,char);
}

console.log(makeSquare(5, '|')); 
/* 
#####
#####
#####
#####
#####
*/

function makeRectangle(width, height, char = '#') {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += '\n' + makeLine(width, char); 
  }
  return rectangle;
}

console.log(makeRectangle(5, 3, '-'));
/*
#####
#####
#####
*/

//10.10.2. Triangles:

function makeDownwardStairs(height, char = '#') {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += '\n' + makeLine(i+1, char); 
  }
  return stairs;
}

console.log(makeDownwardStairs(5, '%'));
/*
#
##
###
####
#####
*/

function makeSpaceLine(numSpaces, numChars, char = '#') {
  let spaces = '';
  for (let i = 0; i < numSpaces; i++) {
    spaces += ' '; 
  }
  return '\n' + spaces + makeLine(numChars, char) + spaces;
}

console.log(makeSpaceLine(3, 5, '>'));
/*
___#####___
*/

//Consider the top line of the triangle to be level 0, the next to be line 1, and so on. Then line i is a space-line with height - i - 1 spaces and 2 * i + 1 hashes:
function makeIsoscelesTriangle(height, char = '#') {
  let triangle = '';
  for (i = 0; i < height ; i++) {
    triangle += makeSpaceLine(height - i - 1, 2 * i + 1, char);
  }
  return triangle;
}

console.log(makeIsoscelesTriangle(5, '<'));
/*
    #
   ###
  #####
 #######
#########
*/

//10.10.3. Diamonds:

function reverse(str) {
  return str.split('').reverse().join('');
}

function makeDiamond(height, char = '#') {
  return makeIsoscelesTriangle(height, char) + '\n' + reverse(makeIsoscelesTriangle(height, char));
}

console.log(makeDiamond(5));
/*
    #
   ###
  #####
 #######
#########
#########
 #######
  #####
   ###
    #
*/


//10.10.4. Bonus Mission"
// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.

console.log(makeDiamond(5, '*'));
console.log(makeDiamond(6,'|'));
console.log(makeDiamond(6,'-'));
console.log(makeDiamond(6,'+'));
console.log(makeDiamond(5, '='));
console.log(makeDiamond(5, '$'));
console.log(makeDiamond(5, '@'));
console.log(makeDiamond(5, '^'));
console.log(makeDiamond(5, '>'));
console.log(makeDiamond(5, '['));
console.log(makeDiamond(5, '{'));
console.log(makeDiamond(5, ']'));
console.log(makeDiamond(5, '}'));
console.log(makeDiamond(5, `\\`));
console.log(makeDiamond(5, '/'));
console.log(makeDiamond(5, '_'));
console.log(makeDiamond(5, '~'));
console.log(makeDiamond(5, '`'));
console.log(makeDiamond(5, '.'));





