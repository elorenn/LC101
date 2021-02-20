let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(name){
  return name.slice(0,1);
});

console.log(firstInitials);