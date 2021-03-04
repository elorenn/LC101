function launchOutput(num){

  if (num === 2){
    return 'Launch!';
  }
  if (num === 3){
    return 'Code!';
  }
  if (num === 5){
    return 'Rocks!';
  }
  if (num%2 === 0  && num%3 === 0 && num%5 === 0) {
    return 'LaunchCode Rocks!';
  }     
  if (num%2 === 0 && num%3 === 0) {
    return 'LaunchCode!';
  } 
  if (num%3 === 0 && num%5 === 0) {
    return 'Code Rocks!';
  }  
  if (num%2 === 0 && num%5 === 0) {
    return 'Launch Rocks! (CRASH!!!!)';
  }  

  return `Rutabagas! That doesn't work.`;
}

// function launchOutput(num){
  
//   let output = '';

//   if (num === 2){
//     output += 'Launch';
//   }
//   if (num === 3){
//     output += 'Code';
//   }
//   if (num === 5){
//     output += 'Rocks';
//   }
//   if (num%2 === 0 && num%3 === 0) {
//     output += 'LaunchCode';
//   }
//   if (num%3 === 0 && num%5 === 0) {
//     output += 'Code Rocks';
//   }  
//   if (num%2 === 0 && num%5 === 0) {
//     output += 'Launch Rocks';
//   }  
//   if (num%2 === 0  && num%3 === 0 && num%5 === 0) {
//     output += 'Launch Rocks';
//   }  

//   return output + '!';
// }

module.exports = launchOutput;