const input = require(`readline-sync`);

let firstName = input.question("Enter your first name: ");

let lastName = input.question("Enter your last name: ");

let age = input.question("Enter your age: ");

console.log("Hello, "+firstName+"! You are "+age+" years old.");

console.log("First name: " + firstName + "\nLast name: " + lastName + "\nLast, First: " + lastName+ ", " +firstName);

