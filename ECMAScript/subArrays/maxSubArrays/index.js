
// 2. Function to add contiguous numbers
function findConsecNum(takeArray) {
  // 1. Varables for MaxSubArray, Currentmax
  const maxSubArray = takeArray[0];
  const Currentmax = takeArray[0];
  for(var i = 1; i < takeArray.length; i++){ 
    // 3. If the next number is higher
    //  than previous number set 
    // it to max.
    Currentmax = Math.max(Currentmax, takeArray[i]);
    maxSubArray = Math.max(maxSubArray, Currentmax);
    }
    // 4. If the number is not higher 
    //  then reset to current number in array 
    // 5. after looking through the array
    // return number of MaxSubArray
    return maxSubArray;
};