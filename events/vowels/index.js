//Find all the vowels in any given string add them up and return the number of vowels in the string

function vowels(str) {
 let count = 0;
 //Use either a String or an Array but an array might be better here because future dev looking at this string
 //might be mislead & wonder is the order of characters important
 //const checker = 'aeiou'; an array could include ['abc', 'dog', 'longerMatches']
 const checker = ['a','e','i','o','u'];

 //Iterate through given string 
 for (let char of str.toLowerCase()) {
  //Use "includes" which is a helper method included with all strings and arrays
  //Check if a vowel matches a character in the given string
  if (checker.includes(char) ) {      
       //If a match is found add one to count
       count ++;
     }
 }
 return count;
}

module.exports = vowels;