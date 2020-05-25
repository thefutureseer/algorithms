//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER

//Turn both strings into lowecase, delete all spaces and symbols
//Check if both strings are the same size
//Check if same size strings by number of keys then sort both strings the same way to check if they have the same characters
//Build a character map out of both

function anagrams(stringA, stringB) {
  //Run helper function on each string
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  //Check if the amount of keys is the same. Using Object.keys and length
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
     return false;
  } 
  //"For In" loop to iterate one object 
  for (let char in aCharMap) {
      //Check if the other object matches
      if (aCharMap[char] !== bCharMap[char]) {
         return false;
      }
    }
    //Else if both are false return true
    return true;
  }
  
  //Helper function to build a character map object from string
  function buildCharMap(str) {
    //Variable set to an empty object
    var charMap = {};
    //Use RegEx to remove spaces, symbols and make entire string lowercase
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      //Increment each character and handle case if no character added to character map (return map)
      charMap[char] = charMap[char] + 1 || 1;
    }
    //Return a copy of the new string
    return charMap;
  }

module.exports = anagrams;

//Tools 

//"Helper function" to simplify the string and build a character map to return:
//"EMPTY OBJECT" = to add characters 
//"FOR ..OF LOOP": Use Regex "REPLACE" method (delete white spaces, only use word characters)
//"toLowerCase method" make sure all letters are lower case
//"Iterating" each string and Adding each character to object as character map
//Return character map to the main function for use

//"Main function" builds character maps out of parameters strings, checks to see 
//if two character maps have the same amount of keys and same characters:
//"Variables" to take in the parameters and build a character map
//"IF" statement: Check if two objects have the same amount of keys using "OBJECT"/ "KEYS "
//"FOR ..IN LOOP" to iterate one object
//"IF" to check if the second object has the same characters in it
//return if true