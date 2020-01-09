//Given a string, return the character most commonly used in the string
//Example ('345777') === 7 , ('asdfghjjj') === j

// //?make a function to take a string as an arguement?
// function maxChar(str) {
// //?set a const for an object
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// module.exports = maxChar;

//Given a string, return the character most commonly used in the string
//Example ('345777') === 7 , ('asdfghjjj') === j

//PSUEDO CODE 
//Turn string into an array
//find the matching ascii for each.  OR parse the array for multiple characters
//push each match to an array
//join array back to a string
//return the string


//PSUEDO CODE #2
//LOOP THROUGH STRING to find match and keep count of each

// function maxChar(str) {

// }
// module.exports = maxChar;

//letters
// function maxChar(str) {
//  const charsMap = {};
//  let max = 0;
//  let maxChar = "";
//  for ( let i of str) {
//    if (charsMap[i]) {
//      charsMap[i]++;
//    } else {
//      charsMap[i] = 1;
//    }
//  }
//    for (let i in charsMap) {
//      if (charsMap[i] > max) {
//        max = charsMap[i];
//        maxChar = i;
//      }
//    }
//    return maxChar;
// }

// module.exports = maxChar;

//letters one liner
// function maxChar(str) {
//   const str = "Hello There";
//   const chars = {};
//   for (let i of str) {
//     chars[i] = chars[i] + 1 || 1;
//   }
// }

//PSUEDO CODE to get the most occuring letter/number 
//First Take a string (then a number) 
//make an empty object
//turn the string into an object map
//return the most common letter/number

//MORE MANUAL LOOP WITH IF STATEMENT:
// function maxChar(str) {
//  const str = "Hello There";
//  const char = {};
//  for (let i of str) {
//    if (!char[i]) {
//      char[i]=1;
//    } else {
//      char[i]++;
//    }
//  }
// }
// module.exports = maxChar;

//PSUEDO CODE to get the most occuring letter/number 
//First Take a string (then a number) 
//make an empty object
//turn the string into an object map
//loop throught the object
//return the most common letter/number

// function maxChar(str) {
// //  const str = "Hello There";
//  const charMap = {};
//  let max = 0;
//  let maxChar = "";
//  for (let i of str) {
//    charMap[i] = charMap[i] + 1 || 1;
//  }
//  //iterate through the object and return the character most frequently used:
//  //This is a direct straight forward approach.
//  for (let i in charMap) {
//    if (charMap[i] > max) {
//     max = charMap[i];
//     maxChar = i;
//    }
//  }
//  return maxChar;
// //  for (let i in ch) {
// //   maxChar[i]++;
// //   letter[i];
// //  }
// }
// module.exports = maxChar;

//PSUEDO CODE to get the most occuring letter/number 
//First Take a string (then a number) 
//make an empty object
//turn the string into an object map
//return the most common letter/number

// function maxChar(str) {

// }
// module.exports = maxChar;

//PSUEDO CODE to get the most occuring letter/number 
//First Take a string (or a number) 
//and make an empty object
//turn the string into an object map
//iterate through the object 
//count the times a letter comes up
//update the letter when its most used
//return the most common letter/number

function maxChar(str) {
 const mapObj = {};
 let maxChar = '';
 let maxNum = 0;

 for (let i of str) {
   mapObj[i] = mapObj[i] + 1 || 1;
  
 }
 for (let i in mapObj) {
   if (mapObj[i] > maxNum) {
     maxNum = mapObj[i];
     maxChar = i;
   }
 }
 return maxChar;
}
module.exports = maxChar;