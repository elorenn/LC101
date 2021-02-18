//Variable Shadowing

let message = "Hello, World!";

function printMessage(message) {
   console.log(message);
}

printMessage("Goodbye");

// This phenomenon is called shadowing, based on the metaphor that a function parameter "casts it's shadow over" a variable of the same name, effectively hiding it.