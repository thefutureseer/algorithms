function mergeSort(arr) {
    //If only one number in array then return
    if (arr.length <= 1) {
        return arr;
    }
    
    //Else Split the array in half
    const leftSide = Math.floor(arr.length / 2);
    const left = arr.slice(0, leftSide);
    const right = arr.slice(leftSide);
    
    // Recursively sort both halves and merge them one by one
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    //create a space to put the new array
    const sorted = [];
    
    //Merge each number from each array until none left
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    
    // Concatenate any remaining elements
    //if only one array has something in it
    return [...sorted, ...left, ...right];
}

// console.log(mergeSort([2, 1, 4, 5, 7, 9, 10]));



// function merge(leftArray, rightArray) {
//   const resultsArray = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
//       if (leftArray[leftIndex] < rightArray[rightIndex]) {
//           resultsArray.push(leftArray[leftIndex]);
//           leftIndex++;
//       } else {
//           resultsArray.push(rightArray[rightIndex]);
//           rightIndex++;
//       }
//   }

//   // After the while loop, one of the arrays might still have elements
//   while (leftIndex < leftArray.length) {
//       resultsArray.push(leftArray[leftIndex]);
//       leftIndex++;
//   }

//   while (rightIndex < rightArray.length) {
//       resultsArray.push(rightArray[rightIndex]);
//       rightIndex++;
//   }

//   return resultsArray;
// }



// function merge(leftArray, rightArray) {
//   const resultsArray = [];
//   let i = 0;

//   while (i < leftArray.length && i < rightArray.length) {
//       if (leftArray[i] < rightArray[i]) {
//           resultsArray.push(leftArray[i]);
//       } else {
//           resultsArray.push(rightArray[i]);
//       }
//       i++;
//   }

//   while (i < leftArray.length) {
//       resultsArray.push(leftArray[i]);
//       i++;
//   }

//   while (i < rightArray.length) {
//       resultsArray.push(rightArray[i]);
//       i++;
//   }

//   return resultsArray;
// }


//merge psuedocode
//take 2 sorted arrays
// const merged = (arr1, arr2) => {
//   //array to store the results
//   let resultsArr = [];
//   //while both arrays have a number in them
//   while(arr1[i] | arr2[i]) {
//     resultsArr.push(arr1[i])
//   }

  //while the left array is the only array

  //while the right array is the only array

//   return resultsArr;

// };



//Merge funciton psuedocode
//take two sorted arrays and merge into one
// function merge(arr1, arr2) {
//   //create results array
//   let resultsArr = [];

//   //while there are still elements in both arrays
//   var i = 0;
//   while (arr1 && arr2) {
//     //& if the first element in the left array is less than the first in the right
//     //shift the element from the left into the results array
//     //else shift the element from the right array into the results array
//     if(arr1[i] < arr2[i]) {
//       resultsArr.push(arr1[i]);
//     } resultsArr.push(arr2);
//     i++;
//   }
  
//   //take everything from the array 
//   //that still has stuff in it and push to results
//   while (i < arr1.length) {
//     resultsArr.push(arr1[i]);
//     i++
//   };

//   while (i < arr2.length) {
//     resultsArr.push(arr2[i]);
//     i++
//   }

//   return resultsArr;

// }


//  console.log(merge([1,2,45], [3,4,6,8]));

module.exports = merge;