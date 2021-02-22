// 11.11.1. Sort Numbers For Real:
// 11.11.1.1. Part A: Find the Minimum Value:

//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function findMinValue (numArr) {
  let minValue = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < minValue) {
      minValue = numArr[i];
    }
  }
  return minValue;
}

function findMinValueRecursion (numArr) {
  if (numArr.length <= 1) {
    return numArr[0];
  } else {
    if (numArr[0] > numArr[1]) { 
      // numArr.splice(0,1); //This version alters the original array - better not to use
      numArr = numArr.slice(1);
    } else {
      // numArr.splice(1,1); //This version alters the original array - better not to use
      numArr = [numArr[0]].concat(numArr.slice(2));
    }
    return findMinValueRecursion(numArr);
  }
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42]; //2
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3]; //-44
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0]; //-3.3

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMinValue(nums1)); // 2
console.log(findMinValueRecursion(nums1)); // 2

console.log(findMinValue(nums2)); // -44
console.log(findMinValueRecursion(nums2)); // -44

console.log(findMinValue(nums3)); // -3.3
console.log(findMinValueRecursion(nums3)); // -3.3


