
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//#1 most compact solution
//PSUEDO CODE: Reverse the string then compare the reversed string to the original.
function palindrome(str) {
 const pal = str.split('').reverse().join('');
 return pal === str;
}

 module.exports = palindrome;

//#2 Not best but is Using advanced array helper : array.every() 

// function palindrome(str) {
//  return str.split('').every((char, i)=>{
//   return char === str[str.length - i - 1]
//  });
// }
// module.exports = palindrome;

// function palindrome(str) {
 
// }
// module.exports = palindrome;
