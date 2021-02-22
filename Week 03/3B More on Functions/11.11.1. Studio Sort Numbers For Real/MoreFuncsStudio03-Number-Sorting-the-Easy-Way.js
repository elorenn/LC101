// 11.11.1. Sort Numbers For Real:
// 11.11.3. Part C: Number Sorting the Easy Way

/* The JavaScript syntax for numerical sorting is arrayName.sort(function(a, b){return a-b});

When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:
When comparing 40 and 100, the sort() method calls the compare function(40,100).
The function calculates 40-100, and returns -60 (a negative value).
The sort function will sort 40 as a value lower than 100.*/

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("\n---------------- Ascending Order ----------------\n");

//Sort each array in ascending order.

function sortAscending(numArr) {
  numArr.sort(function(a, b){return a-b});
  return numArr;
}

console.log(sortAscending(nums1)); //[ 2, 5, 10, 42 ]
console.log(sortAscending(nums2)); //[-44, -10, -2, 0, 0, 3, 3, 5]
console.log(sortAscending(nums3)); //[-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]

console.log("\n---------------- Descending Order ----------------\n");

//Sort each array in descending order.

function sortDescending(numArr) {
  numArr.sort(function(a, b){return b-a});
  return numArr;
}

console.log(sortDescending(nums1)); //[ 42, 10, 5, 2 ]
console.log(sortDescending(nums2)); //[5, 3, 3, 0, 0, -2, -10, -44] 
console.log(sortDescending(nums3)); //[200, 10, 8, 5, 5, 4.4, 4, 0, -3.3]

console.log("\n---------------- Original Arrays ----------------\n");

// Do the functions alter the original array? No

console.log(nums1); //[5, 10, 2, 42]
console.log(nums2); //[-2, 0, -10, -44, 5, 3, 0, 3]
console.log(nums3); //[200, 5, 4, 10, 8, 5, -3.3, 4.4, 0]