//Find all the vowels in any given string add them up and return the number of vowels in the string

//Big O(log n)


// function vowels(str) {
//  let count = 0;
//  //Use either a String or an Array but an array might be better here because future dev looking at this string
//  //might be mislead & wonder is the order of characters important
//  //const checker = 'aeiou'; an array could include ['abc', 'dog', 'longerMatches']
//  const checker = ['a','e','i','o','u'];

//  //Iterate through given string 
//  for (let char of str.toLowerCase()) {
//   //Use "includes" which is a helper method included with all strings and arrays
//   //Check if a vowel matches a character in the given string
//   if (checker.includes(char) ) {      
//        //If a match is found add one to count
//        count ++;
//      }
//  }
//  return count;
// }

//Much more condensed version useing RegEx so easy almost cheating
// function vowels(str) {
//    //Variable/const named matches set to given string Matching method to return all mtches found on given string 
//    //Square brackets in RegEx: if the string in the variable contains anything in the square brackets then let us know
//    //The g in this regEx: Make sure the function won't stop at the first match
//    //The i in this regEx: insensitive or case insensitive so we dont have to manualy change everything to lowercase
//  const matches = str.match(/[aeiou]/gi);
//  //Turnary: If matches is not null but an array, return the length. If no matches return 0 instead of the default "null"
//  return matches ? matches.length : 0;
// }

//Even more simple! 
// function vowels(str) {
//    return (str.match(/[aeiou]/ig)||[]).length;
//  }

// module.exports = vowels;

//Find all the vowels of a given string

function vowels(str) {
  //REGEX: square braces says if the given string contains any character inside of the square braces let me know
  //REGEX: g makes sure, after one match, continue searching for more matches if there are multiple vowels find them all
  //REGEX: i to make it case insensitive
  
  //Set a variable to store the outcome of
  // the given string using the match method with RegEX to match all vowels 
  //the given string might have wheather upper or lowercase
 var matches = (str.match(/[aeiou]/gi));
 //With a trnary operation return the number value of the outcome. It may be zero
 return matches ? matches.length : 0
}

module.exports = vowels;
