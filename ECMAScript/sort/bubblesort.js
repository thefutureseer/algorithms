//sort an unordered array with bubble sort
let arrayOne = [1,4,6,5,4,3,1,7,9,5,2]
//flag to let us know if the sorting is done
let swapped;

function sort(arr) {
  //value to decrement for the do while loop
  let end = arr.length -1;
  swapped = false;

  for (let i = 0, j =1; i < end; i++, j++) {
    if (arr[i] > arr[j]) {
      swapped = true;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      
    }
  }
  end--;
};

do {
  sort(arrayOne);
} while (swapped);

console.log(arrayOne);



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