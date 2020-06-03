

//Given a string, return a new string in the reverse order.
//REVERSE === ESREVER , STOP === POTS
//Pseudo code=== edoc oduesP
//1 Get the index and change the last to the first etc
//2 Find a great library for strings
//3 turn string into an ARRAY, Reverse array, array back to string, RETURN string
// a = [S,T,O,P];

//#1 psuedo code=> #1 with three methods including reverse
//Big O(n) Linear
// 1) turn the string into an array
// 2) reverse the array
// 3) take away the commas => turn the array into a string
// 4) return the string now reversed

//  function reverse(str) {
//      //Return right away. Take the string variable parameter
//    return str
//       //Method to split string into array because reverse is an array method
//       .split('')
//       //Method to reverse an array
//       .reverse()
//       //Method to join an array into a string
//       .join('');
//  }
//  module.exports = reverse;


//#2 PSUEDO CODE #2 A LITTLE MORE MANUAL with for ..of loop 
//Big O(n) Linear
//Create an empty string variable
//for of loop through each character of string provided
//take the character and add it to the empty string variable
//return the variable 

//  function reverse(str) {
//   //Create an empty string variable
//   let i = '';
//   //For loop (less mistakes made with this for ..of loop)
//   for (let character of str) {
//     //Add each character to the new string in reverse order
//     i = character + i;
//   }
//   //Return after the loop
//   return i;
// }

//#3 with reduce helper function 
//Big O(n) Linear

// function reverse(str) {
//   //Can return right away
//   //Turn string into an array with split()
//   return str.split('')
//     //Use reduce helper function 1st parameter String being built/2nd parameter current character being iterated over
//     .reduce((emptyStrAccumulator, currentCharacterInArray)=> {
//       //Return answer for the final return to use
//       return currentCharacterInArray + emptyStrAccumulator ;
//       //Empty string after function but inside reduce/
//     }, "")
// }

// #3 simplified 
function reverse(str) {
  //Return right away. split string into an array
  return str.split('')
    //Reduce method to build one string from the pieces of an array. 1st parameter is a function to build the 
    //reversed string which takes two prameters, 1st is empty string 2nd is the character we are iterating over
    //The second parameter of the reduce function is where the empty string is to begin with 
    .reduce((str, i) => i + str, "");
}

 module.exports = reverse;

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
// #3 more manual style

// function reverse(str) {
//  return str.split('').reduce((accumulateString, stringValueNow) => {
//    return stringValueNow + accumulateString;
//   }, '');
// };
// module.exports = reverse
