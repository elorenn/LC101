// name is a parameter
// "Lorena" is an argument

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello("Lorena"); //Hello, Lorena!
sayHello(); //Hello, underfined!

// If your function will not work properly without one or more of its parameters defined, then you should define a default value for these parameters. The default value can be provided next to the parameter name, after =.

function hello(name = "y'all") {
   return `Hello, ${name}!`;
}

console.log(hello("Lamar")); //Hello, Lamar!
console.log(hello()); //Hello, y'all!
console.log(hello("Lamar", "Lorena")); //Hello, Lamar! (the extra argument "Lorena" is ignored)

// "extra" arguments can be accessed using a special object named 'arguments', which is made available to every function:

function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1
  console.log(arguments[1]);
  // expected output: 2
  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. 

//“Array-like” means that arguments has a length property and properties indexed from zero, but it *does not* have Array's built-in methods like forEach() or map().

function longestString() {
  var longest = '';
  for (var i=0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

console.log(longestString("hello", "this string is long", "but this one is longer"));   

function helloEveryone (name = "y'all") {
  if (arguments.length === 0 || arguments.length === 1) {
    return `Hello, ${name}!`;
  } else {
    let names = '';
    for (let i = 0; i < arguments.length -1; i++) {
      names += arguments[i] + ", ";
    }
    names += "and " + arguments[arguments.length -1];
    return `Hello, ${names}!`;    
  }
}

console.log(helloEveryone("Lore", "Ale", "Agnes")); 

console.log(helloEveryone("Romeo", "Juliet", "Macbeth", "Oberon", "Hermione", "Ophelia", "Iago", "Othello", "Desdemona" )); // will print any number of names

console.log(helloEveryone()); //Hello, y'all!

console.log(helloEveryone("Lorena"));  //Hello, Lorena!

function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

console.log(myConcat(', ', 'red', 'orange', 'blue'));
