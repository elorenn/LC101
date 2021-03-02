// 14.2.2.2. hello.js:

function hello(name = "World") {
  // if (name === undefined)
  //   name = "World";

  return "Hello, " + name + "!";
}


module.exports = hello;
