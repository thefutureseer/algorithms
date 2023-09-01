//IF GIVEN A SORTED ARRAY TO SEARCH USE Binary search

//Take in an array and search it for a key
//Using recursion
//Big O(log n)

// function binarySearch(numArray, key) {
//   //Variable to hold and find the middle index with Math
//   //..use floor to round down which is to the left
//   //..length of the array divided by two
//   var middleIdx = Math.floor(numArray.length / 2);
//   //Variable to hold the middle element in the array
//   var middleElem = numArray[middleIdx];

//   //If the value of the middleElem var equals the given number in the key parameter return true. Done with the function.
//   if (middleElem === key) return true;
//   //If middleElem is less than given number & given array length is greater than 1 do this:
//   else if (middleElem < key && numArray.length > 1) {
//       //..[Recursion] Return binarySearch function with parameters of the spliced
//       //..array from middle index to the end of the array and the number we are searching for as key.
//       return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//   }
//   //If the middle element variable is greater than the given number in the key parameter and the 
//   //..length of the given array is greater than one do this:
//   else if (middleElem > key && numArray.length > 1) {
//       //Return the function with parameters of the spliced array starting from index 0 to middle index and 
//       //..the number we are searching for as key.
//       return binarySearch(numArray.splice(0, middleIdx), key);
//   }
//   else return false;
// }

/////////////////////////////////////////////

function binarySearch(array, key) {
 let midIndex = Math.floor(array.length / 2);
 let midElement = array[midIndex];

 if (midElement === key) return true;
  else if (midElement < key && array.length > 1) {
   return binarySearch(array.splice(midIndex, array.length), key);
 }
  else if (midElement > key && array.length > 1) {
   return binarySearch(array.splice(0, midIndex), key);
 } 
  else return false;

    //Function calling itself envoking recursion
   // binarySearch([1,3,7,8,9,45,56], 56);
  }

function factorial(num) {
  if (num === 1) {
     return num;
  }
  return num * factorial(num-1);
}


module.exports = {binarySearch, factorial};



/////////////////////////////////

// function binarySearch(array, key) {
//   if (array.length === 0) {
//       return false; // Base case: key not found in empty array
//   }
  
//   let midIndex = Math.floor(array.length / 2);
//   let midElement = array[midIndex];

//   if (midElement === key) {
//       return true; // Base case: key found at the middle
//   } else if (midElement < key) {
//       return binarySearch(array.slice(midIndex + 1), key); // Search right half
//   } else {
//       return binarySearch(array.slice(0, midIndex), key); // Search left half
//   }
// }

// function factorial(num) {
//   if (num === 1) {
//       return 1; // Base case: factorial of 1 is 1
//   }
//   return num * factorial(num - 1); // Recursive case
// }

// module.exports = { binarySearch, factorial };
