
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//#1 most compact and straight forward solution.
//Big O(n)

//PSUEDO CODE: Reverse the string then compare the reversed string to the original.
   //Function takes in a string as a parameter to check if its a palindrome 
// function palindrome(str) {
    //Variable to hold a copy of the finished product
    //Take the string, split it into an array, reverse it, join it back to a string
//  const pal = str.split('').reverse().join('');
    //Compare given string to the same string but reversed
//  return pal === str;
// }
//  module.exports = palindrome;

//#2 Not best but is Using advanced array helper : array.every()
//Bit O(n)
// function palindrome(str) {
    //Can be returned right away. take given string, split, ".every" method to do something to every character
//  return str.split('').every((char, i)=>{
     //Return the boolean of whether or not the two strings match
     //str.length is the length of the string. 
     //"- i" is iterating over entire string
     //and "- 1" because it starts with a zero index
//   return char === str[str.length - i - 1]
//  });
// }
// module.exports = palindrome;
