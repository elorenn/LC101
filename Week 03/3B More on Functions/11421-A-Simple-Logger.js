// The logError function outputs a standardized error message to a location determined by the parameter logger.

// define fileLogger, which takes a string argument, msg. We have not discussed writing to a file, but Node.js is capable of doing so:

let fileLogger = function(msg) {

   // Put the message in a file

}

// define logError. The first parameter is the message to be logged. The second parameter is the logging function that will do the work of sending the message somewhere. logError doesn't know the details of how the message will be logged. It simply formats the message, and calls logger:

function logError(msg, logger) {
   let errorMsg = 'ERROR: ' + msg;
   logger(errorMsg);
}

// logs an error using the fileLogger:
logError('Something broke!', fileLogger);

// This separates the different concerns, sticking to the idea that a function should do only one thing.

// This example can be made even more powerful by enabling multiple loggers:

let consoleLogger = function(msg) {

   console.log(msg);

}

// logError now accepts an array of functions:
function logError2(msg, loggers) {

   let errorMsg = 'ERROR: ' + msg;

   for (let i = 0; i < loggers.length; i++) {
      loggers[i](errorMsg);
   }

}

//The call to logError will log the message to both the console and a file:
logError2('Something broke!', [fileLogger, consoleLogger]);
