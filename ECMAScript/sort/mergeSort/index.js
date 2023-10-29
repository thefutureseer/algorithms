
//Merge funciton psuedocode
//take two sorted arrays and merge into one
function merge(arr1, arr2) {
  //create results array
  let resultsArr = [];
  
  //while there are still elements in both arrays
  var i = 0;
  while (arr1 && arr2) {
    //& if the first element in the left array is less than the first in the right
    //shift the element from the left into the results array
    //else shift the element from the right array into the results array
    if(arr1[i] < arr2[i]) {
      resultsArr.push(arr1[i]);
    } resultsArr.push(arr2);
    i++;
  }
  
  while (i < arr1.length) {
    resultsArr.push(arr1[i]);
    i++
  };

  while (i < arr2.length) {
    resultsArr.push(arr2[i]);
    i++
  }

  return resultsArr;

}

//take everything from the array that still has stuff in it and push to results