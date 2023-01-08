//Capitalize the first letter of every word in a string


// function capitalize(str) {
//   //Create empty string with first letter capitalized
//   let result = str[0].toUpperCase();
  
//   //Loop through string, check if character to the left is a space, capitalize current character
//   //and add it to result string 
//   for (let i = 1; i < str.length; i++) {
//     if (str[i-1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//          //if its not a space simply add current character to the result string .
//          result += str[i];
//       }
//   }
//   //Return new string
//   return result;
// }

// module.exports = capitalize;

//Create empty array
//Take a string loop through splitting it by spaces.
//Take the first letter of each word to capitalize it concat it with the rest of the word and push the word to array
//Join the words in the array together 

//Easier solution and full of javascript string methods
// function capitalize(str) {
  
//   //Make an empty array
//   const words = [];

//   //For loop & Split string by each space to create an array of strings
//   for (let i of str.split(' ')) {
//     //Take first letter of each word and uppercase it
//     //then concatenate it with the rest of the word
//     //Push it to the empty array
//     words.push(i[0].toUpperCase() + i.slice(1));

//   }
//   //Join words together with a space between each and return the result
//   return words.join(' ');
// }

// function capitalize(str) {
//   //Make an empty array named words
//   const words = [];
//   //Split the string by spaces to get an array
//   //Capitalize first letter of every string
//   for (let byWord of str.split(' ')) {
//       words.push(byWord[0].toUpperCase() + byWord.slice(1));
//   }
//   //join with spaces
//   return words.join(' ');
// }



//Set first letter of string to capital
 function capitalize(str) {
   let capString = str[0].toUpperCase()
   for (let i = 1; i < str.length; i++) {
     if (str[i - 1] === ' ') {
       capString += str[i].toUpperCase();
     } else {
        capString += str[i];
     }
  }
   return capString;
 }
//const firstCap = str[0].toUpperCase();
//Loop through to check if theres a space to the left if so capitalize the character we are looking at
//

//RUNTIME IS linear, BIG O(n)


module.exports = capitalize;
