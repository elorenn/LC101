//Passing Functions as Arguments:

function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 7000);

// or with an anonymous function:

setTimeout(function () {
   console.log("El futuro es ahora!");
}, 5000);