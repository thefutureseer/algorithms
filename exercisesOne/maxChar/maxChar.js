//Time complexity 
//Big O(n) 
//Because doubling the number of inputs affects the growth of the algorithm proportionally.

//Given a string, return the character most commonly used in the string

//PSUEDO CODE 
//LOOP THROUGH STRING finding matchs and keeping count of each

// Function called maxChar to take in given string as an argument
function maxChar(str) {
  // Variable of empty object to create a map of each key being character and value being the count of that character 
  const charsMap = {};
  // Variable to keep track of the highest value
  let max = 0;
  // Variable to keep track of which string character has the highest value
  let maxChar = "";

//MORE MANUAL LOOP WITH IF STATEMENT:
// For loop through the given string to build map: the keys as characters and values as count of that character
 for ( let i of str) {
// IF there is a character increment by one  ELSE set key: character value to one
   if (charsMap[i]) {
     charsMap[i]++;
   } else {
     charsMap[i] = 1;
   }
 }
// For loop through charsMap object to find the higest value 
   for (let i in charsMap) {
// IF charsMap at index has a greater value than variable "max", set max to new value and maxChar to new character string
     if (charsMap[i] > max) {
       max = charsMap[i];
       maxChar = i;
     }
   }
// Return maxChar which will be the character with the most reoccurances in the given string
   return maxChar;
}

module.exports = maxChar;


//Psuedo code
//Given a string return the most reoccuring character
//Variable with empty object to count each key which will be each new character
//for loop through the given string and add to the object keys with each new character and add one for every repeated 
//character
//Check for highest reoccuring character
//Return highest one


// function maxChar(str) {
//  var countmap = {};
//  var max = 0;
//  var charMax = '';

//  for (let i of str) {
//    countmap[i] = countmap[i] + 1 || 1
//    }
//    //Loop through countmap for highest number and return
//    for (let i in countmap) {
//        if (countmap[i] > max) {
//          max = countmap[i] ;
//          charMax = i;
//        }
//       }
//     return charMax;
//  }
  
// module.exports = maxChar;