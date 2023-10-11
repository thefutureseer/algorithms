// //sort an unordered array with bubble sort
// let arrayOne = [1,4,6,5,4,3,1,7,9,5,2]
// //flag to let us know if the sorting is done
// let swapped;

// function sort(arr) {
//   //value to decrement for the do while loop
//   let end = arr.length -1;
//   swapped = false;

//   for (let i = 0, j =1; i < end; i++, j++) {
//     if (arr[i] > arr[j]) {
//       swapped = true;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
      
//     }
//   }
//   end--;
// };

// do {
//   sort(arrayOne);
// } while (swapped);

// console.log(arrayOne);


function bubbleSort(arr) {
    var n = arr.length;
    var swapped;
  
    do {
        swapped = false;
    
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
              }
            }
          } while (swapped);
        
          return arr;
        }
        module.exports = bubbleSort;


        
        // // Example usage:
        // var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
        // var sortedArray = bubbleSort(unsortedArray);
        // console.log(sortedArray);
        
        
        // //sort an unordered array with bubble sort
        // let arrayOne = [1,4,6,5,4,3,1,7,9,5,2]
// //flag to let us know if the sorting is done
// let swapped;

// function sort(arr) {
//   //value to decrement for the do while loop
//   let end = arr.length -1;
//   swapped = false;

//   for (let i = 0; i < end; i++) {
//     if (arr[i] > arr[i + 1]) {
//       swapped = true;
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   end--;
// };

// do {
//   sort(arrayOne);
// } while (swapped);

// console.log(arrayOne);