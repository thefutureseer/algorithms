//sliding window technique
//parameters: nums = array, size = size of the window to slide with

function slideTisArrayOfNums(nums, size) {
  if(size > nums.length - 1 || size < 0) return null;

  //variable for current total inside window
  let current = 0;
  //variable for highest total thus far
  //set to neg infinity in the case the array is negative
  let maxTotal = 0;

  //for loop through array
  for(let i = 0; i < nums.length - 1; i++) {
    //add the number to the others
    current += nums[i];
    //loop until the number of size - 1 matches the index in the array 
    if(i >= size - 1) {
      //check for higher total and set maxtotal
      maxTotal = Math.max(current, maxTotal);
      //subtract the first number of the windo array
      current -= nums[i - (size - 1)];
    }
  }
  return maxTotal;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const size1 = 3;

// slideTisArrayOfNums(arr1, size1);
console.log(slideTisArrayOfNums(arr1, size1));