//Helper function to verify if a string is a palindrome
function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 == rev;
}

//Function to find the longest palindrome in a given string
//Take everysingle string and check it
function longest_palindrome(str1) {

  //Two variable names on one var. First variable name "max_length"
  //keeps track of the number of characters in the longest 
  //Palindrome we come accross second variable name "maxp" is set
  //to the string of the longest 
  var max_length = 0, maxp = '';

  //Looping through one side of the entire string because 
  //palindrome has a mirror effect
  for(var i = 0; i < str1.length; i++)  {
    //Sub string method to get all characters from beginning to the end
    //of str1
    var subs = str1.substr(i, str1.length);

    //loop through the substrings
    for(var j = subs.length; j >= 0; j--)  {
      //Second substring method get all strings from beginning to 
      //"j iteration"
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1)
      continue;

      //Reverse the string to check if its a palindrome and
      //if it is update the max palindrome if a bigger one is found
      if (is_Palindrome(sub_subs_str)) {
      if (sub_subs_str.length > max_length) {
        max_length = sub_subs_str.length;
        maxp = sub_subs_str;
  }
  }
  }
  }
 return maxp;
  }

module.exports = [longest_palindrome, is_Palindrome];