let input = "fake.email@launchcode.org";
let atIndex = input.indexOf("@");
/* The indexOf() method returns the index of the first occurrence of the substring in the string, and returns -1 if the substring is not found. */

if (atIndex > -1) {
   console.log("Email contains @");
} else {
   console.log("Invalid email");
}