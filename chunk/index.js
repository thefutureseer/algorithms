//Given an array and array size
//For every array return an array of subarrays of length size 
// ...elements per array and the final array can be one

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

function chunk(array, size) {
  const chunked = [];
  for (let i of array) {
    const last = chunked[i] === chunked.length - 1;
    if (!last || last.length === size) {
      chunked.push([i]);
    } else {
    last.push([i]);
  }
  }
  if (chunked)
return chunked;
}

module.exports = chunk;