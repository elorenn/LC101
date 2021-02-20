// use recursion to remove all of the 'i' entries from the array:

function removeI(arr) {
    if (arr.indexOf('i') === -1){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

// both of these work as the Base Case:
// !arr.includes('i')
// arr.indexOf('i')===-1
