//BIG O time complexity & why:
//Big O(n)
//It takes the same amount of time for each peice of data to be
//handled and the time increases by the same amount per. 

//Given a string, return a new string in the reverse order.
//E.I. : reverse(REVERSE) === ESREVER , reverse(STOP) === POTS


// function reverse(str) {
//   let accume = '';
//   for (i of str) {
//     accume = i + accume;
//   };
//   return accume;
// }
// module.exports = reverse;


// psuedo code=> 
// 1) turn the string into an array
// 2) reverse the array
// 3) turn the array into a string
// 4) return the string now reversed



// PSUEDO CODE #2 A LITTLE MORE MANUAL
//Create an empty string variable
//for of loop through each character of string provided
//take the character and add it to the empty string variable
//return the variable 

// function reverse(str) {
//   let i = '';
//   for (let character of str) {
//     i = character + i;
//   }
//   return i;
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------

//#3 PSUEDO CODE #3
// str = 'abcd';
// function reverse(str) {
//   return str.split('').reduce((strAccumulator, element)=> {
//    return  element + strAccumulator;
//   }, '');
// }

// module.exports = reverse;
// ......--------------------------------------------------------------------


// ......--------------------------------------------------------------------
//#1.0 easy  PASSED January 2nd 2020
// function reverse(str) {
//  return str.split('').reverse().join('');
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#1.5 2nd easiest PASSED 1-2-2020
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#2 without reverse method. for of loop 2015 PASSED 1-2-2020
// function reverse(str) {
//   let reversed = '';
//   for (let i of str) {
//     reversed = i + reversed;
//   }
//   return reversed;
// }
// function reverse(str) {
//   let j = '';
//   for (let i of str) {
//     j = i + j;
//   }
//   return j;
// }
// module.exports =reverse;

// ......--------------------------------------------------------------------
// #3 more manual style
// function reverse(str) {
//  return str.split('').reduce((accumulativeArray, passThrough) => {
//     return passThrough + accumulativeArray;
//   }, '');
// }
// module.exports = reverse;

// #3.5 simplified!! changed it and passed firt try 1-2-2020
// function reverse(str) {
//   return str.split('').reduce((accumulativeArray, passThrough) => passThrough + accumulativeArray, '');
//  }
//  module.exports = reverse;

        // ......--------------------------------------------------------------------
        //#1.0 easy

        // function reverse(str) {
          //  return str.split('').reverse().join('');
          // }
          
          // module.exports = reverse;

//#2
//Create a variable and change the variable every step of the way
//Then return the variable:
// function reverse(str) {
//   let rev = str.split('');
//   rev.reverse();
//   return rev.join('');
// }
// module.exports = reverse;