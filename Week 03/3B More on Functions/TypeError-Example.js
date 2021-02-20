// What happens if a function expects an argument to be a function, but it isn't?

function callMe(func) {
    func();
}

callMe("Al"); // TypeError: func is not a function