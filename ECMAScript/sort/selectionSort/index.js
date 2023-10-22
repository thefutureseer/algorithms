function selectionSort(arr) {
  //new arr to push to and return
  let newArr = [];
  //set indexOfMin to index 0
      let indexOfMin = 0;
  for (var i = 0; i <= arr.length-1; i++) {
      for (var j = i+1; j < arr.length-1; j++) {
          if (arr[i] <= arr[j]) {
              indexOfMin = i;
              newArr.push(arr[i]);
              console.log(indexOfMin, " <first: this is index, this is newArr>", newArr);
  
          }   else { 
              indexOfMin = j;
              newArr.push(arr[j]);
      }
  }
  //check if the newArr is sorted if not then call the function again
  
  console.log(indexOfMin, " <final: this is index, this is newArr>", newArr);
  return newArr;
  }}