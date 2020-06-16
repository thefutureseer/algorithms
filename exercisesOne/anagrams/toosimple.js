//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER
//Change two strings into lowercase, no space and no symbols with regex
//Compare the two "new" strings return true if they match  

//Simple & quickest solution but more **problematic
function anagram(stringA, stringB) {
  //return and "Clean string" and check if they match all in one line:
  return cleanString(stringA) === cleanString(stringB);
}

//Helper function to "Clean a string" delete space and symbols and change to lowercase
//split into an array to sort it then join it back together (now each string is easy to compare).
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagram;

//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER
//Change the two strings into lowercase, no spaces and no symbols use regex.
//compare number of keys they have, if number of keys match then compare values
//Put them into hashtables to see if comperable