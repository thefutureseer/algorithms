//Given an array and array size ("chunk size")
//divide the array and return an array of subarrays each with length size given ("chunk size") 
// ...elements per subarray and the final array can be one

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

//ALGORITHM:
//create empty array to hold chunks called CHUNKED 
//for each element of the *UNchunked* array
//INSIDE FOR OF LOOP:retrieve the last element in *chunked* array
//if last element does not exist or if last element is equal to chunk size then
// push current element from array to chunked

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



//Solution with 'array.slice'
//Create empty chunked array
//Create index variable start at 0
//While index is less than array.length
//Push a slice of length size of array into chunked
//Add size to index


// function chunk(array, size) {
//   const array = [1,2,3,4,5,6,7];
//   const chunked = [];
//   const index = 0;
//   const subChunk = index + size;

//   const chunk = array.slice(0, 2)

// }
// module.exports = chunk;

//Psuedo code
//Empty var array to build the new one
//loop through array to grab every two and push them into empty array
//Take in array loop through and use slice(start, end) to push "chunk size" in to empty array 



//code it without looking at what he's doing on the video
//psuedo code from video walk through of what we want the algorithm to do

//function with 2 arguments one array and one integer for size of subarrays to be built in an empty array called CHunked
//Empty array called chunked to build new array of chunks
//for each loop through given array
    //for each element in the given array go through Series of steps: 1) get the last element in chunked array (may be empty array) 
    //If last element does not exist or its length is equal to chunked size then do this:
    //Push element from given array into chunked 

// function chunk(array, size) {
//   //Empty array for building an array of subarrays
//   var chunked = [];
//   //console.log(chunked + "  current chunked array " + "size is " + size );
//   //For ..of loop to iterate through each element 
//   for (let i of array) {
//     //Temperary variable to get the last element of the chunked array of subarrays 
//     var subchunked = chunked[chunked.length - 1];
//     console.log(subchunked + "subchunked at check for last of chunked" + " ----- " + chunked + " CHunked befor push inside for ..of " + size + "  is size");

//     if (!subchunked || subchunked.length === size) {
//       //Add/push the entire chunk and the current element to the chunked array
//       var checkthepush = chunked.push([i]);
//       console.log(checkthepush +  " is pushed to chunked " + size + "  is size " + i + " is iterator");
//       //console.log(chunked + " after push inside if " + size + "  is size");
//     } else {
//             subchunked.push(i);
//     }
//   }
//   return chunked;
// }
// module.exports = chunk;

//Chunk function Takes two arguments: array and size which is the size each subarray will be in the array built 
//built from the given array
function chunk(array, size) {
  //Create an empty array to build out with subarrays
  let chunked = [];
  //Create an empty index variable to help measure subarrays
  let index = 0;
  //While index is less than the length of the array do this
  while (index < array.length) {
        //Using built in array method on given array to build a subarray of index 0 through given 
        //size above index and use the built in method push to push it into Chunked variable
        chunked.push(array.slice(index, index + size));
        //Increment index variable by the given amount until size of array is met
        index += size;
  }
  //Return the built out chunked array full of subarrays
  return chunked;
}
module.exports = chunk;

//Time complexity is Big O(n)