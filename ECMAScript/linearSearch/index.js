// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = (arr, target) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  if (i===arr.length) {
    return -1;
  }
};

module.exports = linearSearch;