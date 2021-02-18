function removeHyphens(str) {
   let strWithoutHyphens = '';

   for (let i = 0; i < str.length; i++) {
      if (str[i] !== '-') {
         strWithoutHyphens += str[i];
      }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(launchCodePhone);
console.log(removeHyphens(launchCodePhone));

// console.log(strWithoutHyphens); 
// For variables and parameters within a function, their scope is known as function scope. This means that they are only visible within the function in which they are defined