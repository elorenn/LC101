//14.7.9.2. What if We Already Have Code?

// A teammate tried to help you out by writing the launchOutput code before class. Unfortunately, the code contains some errors. Use the descriptive feedback from your it statements to find and fix the errors in launchOutput.

function launchOutput(entry) {
    output = "";
    if (entry%2 === 0){
      output += "Launch";
    }  
    if (entry%3 === 0){
      output += "Code";
    }  
    if (entry%5 === 0){
      output += " Rocks";
    }
    output = output.trim() + '!';
    if (entry%2 !== 0 && entry%3 !== 0 && entry%5 !== 0){
      output = "Rutabagas! That doesn't work.";
    }

    if (output === "Launch Rocks!"){
      output += " (CRASH!!!!)";
    }
    
    return output;
}

module.exports = launchOutput;