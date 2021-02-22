// 11.11.1. Sort Numbers For Real:
// 11.11.5. Bonus Mission: 
// Refactor your sorting function from Part B to use recursion.

function findMinValueRecursion (numArr) {
  if (numArr.length <= 1) {
    return numArr[0];
  } else {
    if (numArr[0] > numArr[1]) { 
      numArr = numArr.slice(1);      
    } else {
      numArr = [numArr[0]].concat(numArr.slice(2));
    }
    return findMinValueRecursion(numArr);
  }
}

function sortNumberArrayRecursion (numArr) {
  let sortedArray = [];
  if (numArr.length === 0) {
    return sortedArray;
  } else {
    let min = findMinValueRecursion(numArr);
    sortedArray.push(min);
    numArr.splice(numArr.indexOf(min), 1);
  }
  return sortedArray.concat(sortNumberArrayRecursion(numArr));
} 

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3]; 
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortNumberArrayRecursion(nums1)); 
// Expected: [2, 5, 10, 42]
console.log(sortNumberArrayRecursion(nums2)); 
// Expected: [-44, -10, -2, 0, 0, 3, 3, 5]
console.log(sortNumberArrayRecursion(nums3)); 
// Expected: [-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]


/*The sorting approach used above is an example of a selection sort. The function repeatedly checks an array for the minimum value, then places that value into a new container.*/
