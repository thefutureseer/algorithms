//get the sum of all hourglass integers in the given (6x6) 2D array

function hourglassSum(arr) {
  //variable set to the max that any hourglass can possibly be (-9x7)
  let max = -68;

  //two for loops to handle a 2D array and only within the 
  //boundries of the. 3x3 hourglasses for a 6x6 2D array
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      let sum = 
        arr[i][j] + 
        arr[i][j+1] + 
        arr[i][j+2] +
        arr[i][j+1] +
        arr[i][j] +
        arr[i][j+1] +
        arr[i][j+2];

      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

//Time complexity: 

//Space complexity: 