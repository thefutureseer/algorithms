//CHECK IF THE TWO STRINGS ARE ANAGRAMS OF EACH OTHER

//Turn both strings into lowecase, delete all spaces and symbols
//Check if both strings are the same size
//Check if same size strings by number of keys then sort both strings the same way to check if they have the same characters
//Build a character map out of both

// function anagrams(stringA, stringB) {
//   //Run helper function on each string
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   //Check if the amount of keys is the same. Using Object.keys and length
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//      return false;
//   } 
//   //"For In" loop to iterate one object 
//   for (let char in aCharMap) {
//       //Check if the other object matches
//       if (aCharMap[char] !== bCharMap[char]) {
//          return false;
//       }
//     }
//     //Else if both are false return true
//     return true;
//   }
  
//   //Helper function to build a character map object from string
//   function buildCharMap(str) {
//     //Variable set to an empty object
//     var charMap = {};
//     //Use RegEx to remove spaces, symbols and make entire string lowercase
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       //Increment each character and handle case if no character added to character map (return map)
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     //Return a copy of the new string
//     return charMap;
//   }

// module.exports = anagrams;

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

//BIG O NOTATION "Order N"
//Big O(n) 
//Linear time
//The worst case time (iterations) grows on par with the number of items in the input in other words N elements requires N iterations


//October 9th Friday 10pm
//Check to see if the two strings are anagrams of each other
// function anagrams(str1, str2) {
//   //loop through str1 taking each element and loop through str2 
//   //checking if or how many elements it matches

//  var anag = false;

  // //Loop through First string
  // for (var i = 0; i <= str1; i++) {
  //  //Variable to hold character of first string
  //  var elem1 = str1[i];
  //  console.log("CONSOLE.LOG" + elem1);

  //  //Loop through
  //  for (var j = 0; j <= str2; j++) {
  //   var elem2 = str2[j]
  //   console.log("CONSOLE.LOG" + elem2);

  //   if (elem1 === elem2) {
  //     anag = true;
  //   } else {
  //     anag = false;
  //   }
  //  }
//  };
//   return anag;
// };


// function anagrams(str1, str2) {
  
//   var characterMap1 = characterMap(str1);
//   var characterMap2 = characterMap(str2);

//   var obj1 = {};
//  function characterMap(str) {
//   for (i of str.replace(/^\w/g, "").toLowerCase()) {
//     str[i] = obj1 + 1 || 1;
//   }
// }

// if (Object.keys(characterMap1).length == Object.keys(characterMap2).length) {
//   return true;
// } else {
//  return;
// }
// };

// module.exports = anagrams;

//Check to see if too strings are anagrams:
// function anagrams(str1, str2) {

  
  
//   //Use the helper function to make an object out of each given string
//   const obj1 = turnIntoObject(str1);
//   const obj2 = turnIntoObject(str2);
  
//   //Compare the amount of keys 
//   if (Object.keys(obj2).length !== Object.keys(obj1).length) {
//     return false;
//   }

//   for (let char in obj1) {
//     if (obj1[char] !== obj2[char]) {
//       return false;
//     }
//   }
//   return true;
// };

// //Helper function creates objects out of strings use it on many strings
// function turnIntoObject(readyToBeObject) {
//   //With RegEx take out all spaces an turn string into lowercase letters
//   //readyToBeObject.replace(/^\w/g,"").toLowerCase();
//   //Loop over the new string and add each character to an 
//   //object while counting
//   for (let oneCharAtATime of readyToBeObject.replace(/^\w/g,"").toLowerCase()) {
//     //Empty object to become a character map by taking string & turning it into an object
//     charMap = {}; 
//     charMap[oneCharAtATime] = charMap[oneCharAtATime] + 1 || 1
//  }
// return; //Look up return statement

// }
// module.exports = anagrams;


// function anagrams(string1, string2) {
//   const object1 = makeObjectFromStr(string1);
//   const object2 = makeObjectFromStr(string2);
//   if (Object.keys(object2).length !== Object.keys(object1).length) {
//     return false;
//   };

//     for (let charOfScopeObj in object1) {
  //       if (object1[charOfScopeObj] == object2[charOfScopeObj]) {
    //         return true;
    //       }
    //   }
    //   return false;
    // };
    
    // const newObjectFromString = {};
    
    //   function makeObjectFromStr(str) {
      //     for (let eachCharacter of str.replace(/[^/w]/g, "").toLowerCase()) {
        //       newObjectFromString[eachCharacter] = newObjectFromString[eachCharacter] + 1 || 1 
        //     }
        //     return newObjectFromString;
        //   };




//Build character maps out of string 1 and string 2 given as parameters
//Compare each character in each map

// function anagrams(str1, str2) {
  
//   const postObj1 = buildObject(str1);
//   const postObj2 = buildObject(str2);

//   // for () {
    
//     // }  
//   }
//   console.log("THIS IS POST BUILT OBJECT FRO STR : " + strToObject + " 1st obj: " + postObj1 + " & 2nd: " + this.postObj2);

//   function buildObject(str) {
//     const strToObject = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       strToObject[char] = strToObject[char] + 1 || 1;
//     }
//     return strToObject;
//   }

// //anagrams('1' , '3' );
// module.exports = anagrams;

function anagrams(str1, str2) {
  const Obj1 = toObj1(str1);
  const Obj2 = toObj1(str2);

 if (Object.keys(Obj1).length !== Object.keys(Obj2).length) {
   return false;
 } if () {

 }
}

function toObj1(str) {
  const newObj = {};

  for (let i of str.replace(/[^\w]/g, '').toLowerCase()) {
    newObj[i] = newObj[i] + 1 || 1;
  }
  return newObj;
}
module.exports = anagrams;