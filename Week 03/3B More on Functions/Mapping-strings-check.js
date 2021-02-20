// Use the map method to map an array of strings. For each name in the array, map it to the first initial:

let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()

let firstInitials = names.map( function(name) {
  return name.slice(0,1); 
});

console.log(firstInitials);