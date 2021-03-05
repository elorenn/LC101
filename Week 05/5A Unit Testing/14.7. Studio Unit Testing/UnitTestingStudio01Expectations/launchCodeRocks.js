function launchOutput(num){
  let output = '';
  if (num%2 === 0  || num%3 === 0 || num%5 === 0) { 
    if (num%2 === 0){
      output += 'Launch';
    }  
    if (num%3 === 0){
      output += 'Code';
    }  
    if (num%5 === 0){
      output += ' Rocks';
    }
    output = output.trim() + '!'; 
    if (output === 'Launch Rocks!') {
      output += ' (CRASH!!!!)';
    }    
    return output;
  }
  return `Rutabagas! That doesn't work.`; 
}

module.exports = launchOutput;
