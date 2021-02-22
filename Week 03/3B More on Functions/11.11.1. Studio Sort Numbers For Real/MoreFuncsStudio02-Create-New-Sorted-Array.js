// 11.11.1. Sort Numbers For Real:
// 11.11.1.2. Part B: Create a New Sorted Array:

function findMinValue (numArr) {
  let minValue = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < minValue) {
      minValue = numArr[i];
    }
  }
  return minValue;
}

// function findMinValueRecursion (numArr) {
//   if (numArr.length <= 1) {
//     return numArr[0];
//   } else {
//     if (numArr[0] > numArr[1]) { 
//       numArr = numArr.slice(1);      
//     } else {
//       numArr = [numArr[0]].concat(numArr.slice(2));
//     }
//     return findMinValueRecursion(numArr);
//   }
// }

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...

function sortNumberArray (numArr) {
  let sortedArray = [];
  while (numArr.length > 0) {
    let min = findMinValue(numArr);
    sortedArray.push(min);
    numArr.splice(numArr.indexOf(min), 1);
  }
  return sortedArray;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42]; // [2, 5, 10, 42]
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3]; // [-44, -10, -2, 0, 0, 3, 3, 5]
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0]; // [-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]

// console.log(findMinValue(nums1)); // 2
// console.log(findMinValueRecursion(nums1)); // 2

console.log(sortNumberArray(nums1)); // Expected: [2, 5, 10, 42]
console.log(sortNumberArray(nums2)); // Expected: [-44, -10, -2, 0, 0, 3, 3, 5]
console.log(sortNumberArray(nums3)); // Expected: [-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]


/*The sorting approach used above is an example of a selection sort. The function repeatedly checks an array for the minimum value, then places that value into a new container.*/
