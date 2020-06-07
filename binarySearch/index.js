//Take in an array and search it for a key
//Using recursion
//Big O(log n)

function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];
  
  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
      return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) {
      return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false;
}


// function binarySearch(array, key) {
//  let midIndex = Math.floor(array.length / 2);
//  let midElement = array[midIndex];
  
//  if (midElement === key) return true;
//   else if (midElement < key && array > 1) {
//    return binarySearch(array.splice(midIndex, array.length), key);
//  }
//   else if (midElement > key && array > 1) {
//    return binarySearch(array.splice(0, midIndex), key);
//  } else {
//     return false;
//  } 

//     //Function calling itself for recursion
//    // binarySearch([1,3,7,8,9,45,56], 56);
//   }
//   binarySearch();

// function factorial(num) {
//   if (num === 1) {
//      return num;
//   }
//   return num * factorial(num-1);
// }

module.exports = binarySearch;