//PSUEDO CODE
//write a program that prints out numbers 1-100
//For every 5th number print out fizz instead of the number
//every third number print buzz instead
//if both print fizzbuzz!

// function fizzBuzz(n) {
// //  var n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//  for (i=1; i <= n; i++) {
// //is the number a multiple of 3 or 5?
//   if (i % 3 ===0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     }
//     else if ( i % 3 === 0 ) {
//       console.log("buzz");
//     }
//     else if (i % 5 === 0) {
//       console.log("fizz");
//     }
  
//     else {
//       console.log(i);
//     }
//   }
// }
// module.exports = fizzBuzz;

function fizzBuzz(n) {
  for (let i =1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}


module.exports = fizzBuzz;