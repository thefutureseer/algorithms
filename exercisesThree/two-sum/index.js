// what two numbers from the nums array add up to the target param number?
// return the index of those numbers
// assume there will be only 2 numbers in the given array
//NEVER USE THE SAME ELEMENT TWICE
//EACH WILL HAVE EXACTLY ONE SOLUTION

//max array length 10,000 or (10 4)

function twoSum(arr, target) {
  let map = new Map();

  //loop over array to create a map
  for (let i = 0; i < arr.length; i++) {
    let pointer1 = arr[i];
    let pointer2 = target - pointer1;

    if (map.has(pointer2)) {
      return [i, map.get(pointer2)];
    }
    map.set(pointer1, i);
  }
}

module.exports = twoSum;

//using new Map() Time Complexity = O(n) & Space complexity = O(n)