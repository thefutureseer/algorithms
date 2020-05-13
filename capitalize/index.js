//Capitalize the first letter of every word in a string


function capitalize(str) {
  //Create empty string with first letter capitalized
  let result = str[0].toUpperCase();
  
  //Loop through string, check if character to the left is a space, capitalize current character
  //and add it to result string 
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
         //if its not a space simply add current character to the result string .
         result += str[i];
      }
  }
  //Return new string
  return result;
}

module.exports = capitalize;

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