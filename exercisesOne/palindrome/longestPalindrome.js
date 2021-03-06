//Big O and why:
//Quadratic time complexty: Big O(n²) due to the nested double for loops
// IMAGE: If we have a party of people who don't know each other and everytime someone arrives they have to 
// shake hands with everyone in the room. Everybody has shaken everybodys hand and its basically 
// like quadradic time.

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

  //Looping through string once because palindrome is like a mirror
  for(var i = 0; i < str1.length; i++) {
    //Sub string method to get all characters from beginning to the end
    //of str1
    var subs = str1.substr(i, str1.length);

    //loop through the substrings
    for(var j = subs.length; j >= 0; j--) {
      //Second substring method get all strings from beginning of the string to 
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
};

module.exports = [longest_palindrome, is_Palindrome];

//////////////////////////////////////////////////////////
//Helper function. Check if string is palindrome


// function is_Palindrome(str1) {
//   const rev = str1.split('').reverse().join('');
//   return str1 == rev;
// };

// // Main function to go through the string checking for the 
// // longest palindrome

// function longest_palindrome(str1) {
//   var maxNum = 0;
//   var maxPal = '';
//   for (var i = 0; i < str1.length; i++) {
//     var subs = str1.substr(0, str1.length);
//     // debugger;
//     for (var j = subs.length; j >= 0; j--) {
//       var subOfSubs = subs.substr(0, j);
//       // debugger;
//       if (subOfSubs.length <= 1)
//        continue;
//        if (is_Palindrome(subOfSubs)) {
//          if (subOfSubs > maxNum) {
//           maxNum = subOfSubs.length;
//           maxPal = subOfSubs;
//          }
//        }
//     }
//   }
//   return maxPal;
// }
// longest_palindrome('97878787870');
// module.exports = [longest_palindrome, is_Palindrome];


//Helper function to verify if a string is a palindrome
// function is_Palindrome(str1) {
//   var rev = str1.split("").reverse().join("");
//   return str1 == rev;
// }

// //Function to find the longest palindrome in a given string
// //Take everysingle string and check it
// function longest_palindrome(str1) {
//   //Two variable names on one var. First variable name "max_length"
//   //keeps track of the number of characters in the longest 
//   //Palindrome we come accross second variable name "maxp" is set
//   //to the string of the longest 
//   var max_length = 0, maxp = '';

//   //Looping through string once because palindrome is like a mirror
//   for(var i = 0; i < str1.length; i++) {
//     //Sub string method to get all characters from beginning to the end
//     //of str1
//     var subs = str1.substr(i, str1.length);

//     //loop through the substrings
//     for(var j = subs.length; j >= 0; j--) {
//       //Second substring method get all strings from beginning of the string to 
//       //"j iteration"
//       var sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1)
//       continue;
//       //Reverse the string to check if its a palindrome and
//       //if it is update the max palindrome if a bigger one is found
//       if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > max_length) {
//           max_length = sub_subs_str.length;
//           maxp = sub_subs_str;
//         }
//       }
//     }
//   }
//  return maxp;
// };
// longest_palindrome('83122199');
// module.exports = [longest_palindrome, is_Palindrome];

//Helper function. Check if string is palindrome
// function is_Palindrome(str1) {
//   const reversedStr = str1.split('').reverse().join('');
//   return str1 == reversedStr;
// };

// function longest_palindrome(str1) {
//   //Two variables one for max number of characters, second for 
//   //the actual characters of the longest palindrome
//   var maxNum = 0, maxStr = '';
//   for (var i = 0; i < str1.length; i++) {
//     var subs = str1.substr(0, str1.length);
//     for (var j = subs.length; j >= 0; j--) {
//       var sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1)
//         continue;
//        if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > maxNum) {
//           maxNum = sub_subs_str.length;
//           maxStr = sub_subs_str;
//         }
//        }
//     }
//   }
//  return maxStr;
// }

// module.exports = [longest_palindrome, is_Palindrome];

//////////////////////////////////////////////////////////



//Helper function. Check if string is palindrome
// function is_Palindrome(str1) {
//   const reversedStr = str1.split("").reverse().join("");
//   return str1 == reversedStr;
// };

// function longest_palindrome(str1) {
//   //Two variables one for max number of characters, second for 
//   //the actual characters of the longest palindrome
//   var maxNum = 0, maxStr = '';
//   for(var i = 0; i < str1.length; i++) {
//     var subs = str1.substr(0, str1.length);
//     for(var j = subs.length; j >= 0; j--) {
//       var sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1)
//         continue;
//        if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > maxNum) {
//           maxNum = sub_subs_str.length;
//           maxStr = sub_subs_str;
//         }
//        }
//     }
//   }
//  return maxStr;
// }

// module.exports = [longest_palindrome, is_Palindrome];