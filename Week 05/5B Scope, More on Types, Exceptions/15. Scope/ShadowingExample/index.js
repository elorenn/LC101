// 15.2.1. Shadowing:
// Variable shadowing is where two variables in different scopes have the same name. The variables can then be accessed under different contexts. However, shadowing can affect the variable's accessibility. It also causes confusion for anyone reviewing the code.

const input = require('readline-sync');

function hello(name) {
  console.log('Hello,', name); // Hello, Lorena
  name = 'Ruth';
  return doubleName(name); // here we pass Ruth to doubleName? 
}

function doubleName(name){
  console.log('help ' + name+name); // help RuthRuth
  return name+name; // help LorenaLorena
}

let name = input.question("Please enter your name: ");

hello(name); // Hello, Lorena

doubleName(name); // help RuthRuth
                  // help LorenaLorena

console.log(name); // Lorena

doubleName('Kai'); // help KaiKai
                   // KaiKai

doubleName(name); // help LorenaLorena
                  // LorenaLorena                  