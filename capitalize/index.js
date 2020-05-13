//Capitalize the first letter of every word in a string

//Create empty array
//Take a string loop through splitting it by spaces.
//Take the first letter of each word to capitalize it concat it with the rest of the word and push the word to array
//Join the words in the array together 

//Easier solution and full of javascript string methods
function capitalize(str) {

  //Make an empty array
  const words = [];

  //For loop & Split string by each space to create an array of strings
  for (let i of str.split(' ')) {
    //Take first letter of each word and uppercase it
    //then concatenate it with the rest of the word
    //Push it to the empty array
    words.push(i[0].toUpperCase() + i.slice(1));

  }
  //Join words together with a space between each and return the result
  return words.join(' ');

}

module.exports = capitalize;