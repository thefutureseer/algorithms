//find two numbers in an array equaling the target number
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