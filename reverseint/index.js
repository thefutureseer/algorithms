//Big O and why
//Linear order Big O(n)
//Everytime you double the amount of elements, the time it takes to 
//run and complete will grow in proportion.

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

var reverseInt = function(int) {
  //math.abs is absolute number. Math.sign * int
  //toString makes the int available to change like a string
  //split turns the int/string into an array
  //reverse turns it around
  //join turns it back into a string
  //parseFloat/parseInt wraps the entire thing and 
  let revint = int.toString().split('').reverse().join('')
  
  return parseFloat(revint) * Math.sign(int);
}
module.exports = reverseInt;

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
// module.exports = reverseInt;




