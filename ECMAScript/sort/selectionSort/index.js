function selectionSort(arr) {

  //set indexOfMin to index 0
  for (var i = 0; i <= arr.length; i++) {
      let indexOfMin = 0;
      for (var j = i+1; j < arr.length; j++) {
          if (arr[j] < arr[i]) {
              indexOfMin = j;
              let switchedHelper = arr[i];
              arr[i] = arr[j];
              arr[j] = switchedHelper;

              console.log(indexOfMin, " <first: this is index, this is newArr>", arr);
          }   else { 
              indexOfMin = i;
      }
  }
  //check if the newArr is sorted if not then call the function again
  
  console.log(indexOfMin, " <final: this is index, this is newArr>", arr);
  }
  return arr;
}