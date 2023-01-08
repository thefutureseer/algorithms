//TWO SUB ARRAYS

//Given an array and array size
//For every array return an array of subarrays of length size 
// ...elements per array and the final array can be less than size or even one

//CHECK Q & A FILE ( 2subarrs_q_a.txt )" FOR MORE INFO


//PSEUDOCODE
// function getSubArrays(array, size) {
//   let subArrays = []
//   let index = 0
//   while (index < array.length) {
//     let subArray = array.slice(index, index + size)
//     subArrays.push(subArray)
//     index += size
//   }
//   return subArrays
// }

// module.exports = getSubArrays;
///////////////////////////

//To return an array of subarrays of a given size from an 
//input array, you can use the following function:

//This function will create a new subarray for every 
//size elements in the input array, and the final subarray may 
//have fewer than size elements if there are not enough elements 
//remaining in the input array.
function getSubArrays(array, size) {
  //set an empty array to put all subarrays as needed
  const subArrays = [];
  //loop through each element in the given array
  //with each iteration into the array add the given size integer to
  //the iterator number being looked at in order avoid using the same integers
  //of any previous subarrays.
  for (let i = 0; i < array.length; i += size) {
    //take empty array from above and put in to it a the amount of
    //characters commanded by the given size integer
    //using slice to cut perfect little subarrays always the same size
    //other than the possible final subarray
    subArrays.push(array.slice(i, i + size));
  }
  return subArrays;
}

module.exports = getSubArrays;

//////////////////////////////////

// function chunk(array, size) {
  //   chunked = [];
  //   array = [];
  //   subArray(size) = [];
  // for (let i of array) {
    //   chunked[i];
    //   if (chunked === 0 || chunked === chunked[i]) {
      //     chunked.push(subArray(size).array[i]);
      //   } else {
        //     chunked.push(subArray(size).array[i]);
        //   }
        // }
        
        // }
        
        // module.exports = chunk;

//////////////////////////////////////
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
    //       last.push(element);
    //     }
    //   }
    //     console.log(chunked);
    //   return chunked;
    
    // }
    
    // module.exports = chunk;
    
////////////////////////////////////////
// function chunk(array, size) {
//   const chunked = [];
//   for (let i of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
  //       chunked.push([i]);
  //     } else {
    //        last.push(i);
    //       }
    //   }
    //   return chunked;
    // }

// module.exports = chunk;

///////////////////////////////////


// function chunk(arr, n) {
//   let chunked = [];
//   let arr = [];
//   let n

//   function n() {
// //parameter indicates how many characters in an array
// //return an array of arrays

//     arr.map([]).slice(n);
//     return slice;
//   }
// }
// module.exports = chunk;
