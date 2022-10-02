//BIG O and WHY:
//Time complexity is "Linear" Order of n
//Big O(n) 
//Because doubling the number of inputs affects the growth of the algorithm proportionally.

//Given a string, return the character most commonly used in the string

//PSUEDO CODE 
//Set 3 variables 1. keep track of the key/character 2. Keep track
//of which key has the highest value & 3. An empty object to hold the
//string after its turned into an object 
//Turn the given string into an object and loop through the object
//keeping count of each character
//Return the most abundant character

//function to take a string and keep count of the character which
//comes up the most
// function maxChar(str) {
  
//   //variable to hold the most repetitive char
//   var maxCharac = '';
//   //variable to hold count of highest counted char
//   var maxCount = 0;
//   //Build a character map (object) out of an empty object
//   var maxObjec = {};

//   //Double nested for loop to loop the string with each character
//   //checking each one for a match
  
//   //Loop through given string (str) & turn it into an object 
//   //I.E. str={char: 0index}
//   for (let i of str) {
//     //maxObjec[i] will return a refrence to the character value
//     if (maxObjec[i]) {
//       //For every entry, if there is a character add the character
//       //to map (object) plus count each time that character is seen
//       maxObjec[i]++;
//     } else {
//       //If there is no number for a character add 1.
//       maxObjec[i] = maxObjec[i] = 1;
//     }
//   }
//   //second for loop through an object keeping track of which key has the 
//   //highest number
//   for (let j in maxObjec) {
//     //If the current number being looked at is larger than the previous
//     //then the larger number is set to the maxCount & the key/character
//     //of that number is stored and set to the maxCharac
//     if(maxObjec[j] > maxCount) {
//       maxCount = maxObjec[j];
//       maxCharac = j;
//     }
//   };
// //Return the most abundant character which is set to maxCharac
// return maxCharac;
// };
// module.exports = maxChar;

// Function called maxChar to take in given string as an argument
// function maxChar(str) {
  //   // Variable of empty object to create a map of each key being character and value being the count of that character 
  //   const charsMap = {};
  //   // Variable to keep track of the highest value
  //   let max = 0;
  //   // Variable to keep track of which string character has the highest value
  //   let maxChar = "";
  
  // //MORE MANUAL LOOP WITH IF STATEMENT:
  // // For loop through the given string to build map: the keys as characters and values as count of that character
  //  for ( let i of str) {
    // // IF there is a character increment by one  ELSE set key: character value to one
    //    if (charsMap[i]) {
      //      charsMap[i]++;
      //    } else {
        //      charsMap[i] = 1;
        //    }
        //  }
// // For loop through charsMap object to find the higest value 
//    for (let i in charsMap) {
// // IF charsMap at index has a greater value than variable "max", set max to new value and maxChar to new character string
//      if (charsMap[i] > max) {
//        max = charsMap[i];
//        maxChar = i;
//      }
//    }
// // Return maxChar which will be the character with the most reoccurances in the given string
//    return maxChar;
// }

// module.exports = maxChar;


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

//Set 3 variables to Turn given str into an obj

////////////////////////////////
//COMMON HELP FOR ALGORITHM SOLVING

//Create an object from a string

//Variable string to be looped through and added to an object
// let str = 'allday';
// //Set a variable to an empty object
// let newObj = {};

// //Loop through to insert each character into the object incrimenting
// //by one each time the same character is added
// for(let i of str) {
//  if(!newObj[i]) {
//   newObj[i] = 1;
//  } else {
//    newObj[i]++;
//  }
// }


function maxChar(str) {
  const objMap = {};
  let highNum = 0;
  let highChar = '';

  for (let i of str) {
   if(objMap[i]) {
    objMap[i]++;
    }
    else {
      objMap[i] = 1;
    }
  }

  for (let i in objMap) {
    if (objMap[i] > highNum) {
      highNum = objMap[i];
      highChar = i;
    }
  }

 return highChar;
}

module.exports = maxChar;