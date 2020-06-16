// function reverse(str) {
//  let jEqualsAccumulativeReversedString = '';
//  for (let i of str) {
//  jEqualsAccumulativeReversedString = i + jEqualsAccumulativeReversedString;
//  }
//  return jEqualsAccumulativeReversedString;
// }
// module.exports = reverse;

//Given a string, return a new string in the reverse order.
//REVERSE === ESREVER , STOP === POTS
//Pseudo code=== edoc oduesP
//1 Get the index and change the last to the first etc
//2 Find a great library for strings
//3 turn string into an ARRAY, Reverse array, array back to string, RETURN string
// a = [S,T,O,P];

//#1 psuedo code=> #1
// 1) turn the string into an array
// 2) reverse the array
// 3) take away the commas => turn the array into a string
// 4) return the string now reversed

function reverse(str) {
 return str.split('').reverse().join('');
}

module.exports = reverse;

//#1.5
// function reverse(str) {
//  const arr = str.split('');
//  arr.reverse();
//  return arr.join('');
// }
// module.exports = reverse;

//#2 PSUEDO CODE #2 A LITTLE MORE MANUAL
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

//self reverse a string: string=array=reverse=string: return FAILED TWICE//
//#1 vanilla javascript?
// let str = 'abcd';
// function reverse(str) {
//  return str.split('').reverse().join('');
// }
// reverse(str);

// module.exports = reverse;

// ......--------------------------------------------------------------------
//#2 without reverse because its too easy. for of loop 2015  FAILED TWICE
// function reverse(str) {
//  let reversed = '';
//  for(let i of str) {
//   reversed = i + reversed;
//  }
//  return reversed;

// }
// module.exports = reverse;


// ......--------------------------------------------------------------------
// #3 more manual style

// function reverse(str) {
//  return str.split('').reduce((accumulateString, stringValueNow) => {
//    return stringValueNow + accumulateString;
//   }, '');
// };
// module.exports = reverse

// ......--------------------------------------------------------------------
//#1.0 easy  PASSED January 2nd 2020
// function reverse(str) {
//  return str.split('').reverse().join('');
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#1.5 2nd easiest PASSED! 1-2-2020
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#2 without reverse because its too easy. for of loop 2015 PASSED 1-2-2020
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
//#2 without reverse because its too easy. Use for of loop 2015


// ......--------------------------------------------------------------------
// #3 more manual style



// ......--------------------------------------------------------------------
//#1.0 easy



// ......--------------------------------------------------------------------
//#1.5 easiest





// ......--------------------------------------------------------------------
//#2 without reverse because its too easy. for of loop 2015 



// ......--------------------------------------------------------------------
// #3 more manual style use reduce instead of a for loop:
// function reverse(str) {
//   return str.split('').reduce((j,i) => j = i + j);
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#1.0 easy
// function reverse(str) {
//   return str.split('').reverse().join('');
// }
// module.exports = reverse;


// ......--------------------------------------------------------------------
//#1.5 easiest with a variable and 3 lines.
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
//#2 more manual style without reverse because its too easy. (for ...of) loop 2015 
// function reverse(str) {
//   let reversed = '';
//   for (let i of str) {
//     reversed = i + reversed;
//   }
//   return reversed;
// }
// module.exports = reverse;

// ......--------------------------------------------------------------------
// #3 more manual style use reduce instead of a for loop:
//  function reverse(str) {
//    return str.split('').reduce((i, j)=> j + i, '')
//  }
//  module.exports = reverse;