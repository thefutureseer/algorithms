// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//Linear runtime BIG O(n)

// function reverseInt(n) {
    // const reversed = n.toString().split('').reverse().join('');
  // return parseInt(reversed) * Math.sign(n);
// }
 
// module.exports = reverseInt;

// function reverseInt(n) {

//   const reversed = n.toString().split('').reverse().join('');
//     if (n < 0) {
//       return parseInt(reversed) * -1;

//     }
//     return parseInt(reversed);
// }
// module.exports = reverseInt;

//THIS ONE LINE SOLUTION ENDS UP BEING NASTY
// function reverseInt(n) {
//   return (
//    parseInt(
//      n.toString()
//       .split('')
//       .reverse()
//       .join('')
//    ) * Math.sign(n)
//   );
// }

//Doesn't work on really big numbers over 16 digits
// const n = 12000000000222020202020200403044305034060543850928509739845723804709328409823094702937409237902739

//Function takes in an integer
function reverseInt(n) {
  //We cannot reverse a number directly so turn it into a string first
  //Set a variable to turn the given integer into a string
  const reversed = n.toString()  
  //Split the string into an array 
  .split('')
  //then reverse the array
  .reverse()
  //Then join the array back into a string
  .join('');
  //Use ParseInt to turn string into a number and  Math . sign to deal with the negative or positive aspect
   return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;