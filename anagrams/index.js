//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER
//Change two strings into lowercase, no space and no symbols with regex
//Compare the two "new" strings return true if they match  

//Simple & quickest solution but more problematic

function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

//Helper function to delete space and symbols and change to lowercase
//split into an array to sort it then join it back together (now each string is easy to compare).
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagram;

//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER
//Change the two strings into lowercase, no spaces and no symbols use regex.
//compare number of keys they have, if number of keys match then compare values
//Put them into hashtables to see if comperable


  // function anagram(stringA, stringB) {
  //   //Build maps of the two strings
  //   const mapOfStrA = buildCharMap(stringA);
  //   const mapOfStrB = buildCharMap(stringB);
  
  //   //Compare the number of keys in both strings
  //   if (Object.keys(mapOfStrA).length !== Object.keys(mapOfStrB).length) {
  //      return false;
  //   }
  //   //Compare each character in string A to each in String B
  //   for (let char in mapOfStrA) {
  //     if (mapOfStrA[char] !== mapOfStrB[char]) {
  //       return false;
  //     }
  //   }
    
  //   return true;
  // }
  
  // //Can use a helper function to build a character map:
  // function buildCharMap(str) {
  //   const charMap = {};
  
  //   for (var i of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[i] = charMap[i] + 1 || 1
  //   }
  //   return charMap;
  // }