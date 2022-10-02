//BIG O time complexity & why:
//Big O(n)
//It takes the same amount of time for each peice of data to be
//handled and the time increases by the same amount per. 

//Given a string, return a new string in the reverse order.
//E.I. : reverse(REVERSE) === ESREVER , reverse(STOP) === POTS

// psuedo code=> 
// 1) turn the string into an array
// 2) reverse the array
// 3) turn the array into a string
// 4) return the string now reversed


//#4 
//Answer with reduce helper method:
// function reverse(str) {
//  return str.split('').reduce((strRev, chr) => {
//   return chr + strRev;
//  }, '');
// };

//Same answer condenced to a single line
//Reduce takes two arguments (1) function and (2) a starting 
//initial value for the function. The function will run, pass in
//The starting argument as the first argument of the function and
//then whatever gets returned from the inner function will be
//used as the starting argument for each succesive run of the function.
//In total the reduce argument function runs 1 time for every 
//element in the given array. The first argument in the function is
//the developing reversed string. the second argument is the character
//currently being worked on . 
//The equation of character currently being worked on plus starting argument
//Means its starting at the end of the given array accumulating in reverse
//If those two were reversed it would accumulate in order. 
// function reverse(str) {
//   return str.split('').reduce((accume, i) => i + accume, '');
// };


// module.exports = reverse;

//#3 
//NO REVERSE FUNCTION. Answer with a for loop 
function reverse(str) {
    let strRev = "";
    for (i of str) {
      strRev = i + strRev;
      debugger;
      }
      return strRev;
    };
reverse('hiiii');
    
    module.exports = reverse;
    
    
    // PSUEDO CODE #2 A LITTLE MORE MANUAL
    //Create an empty string variable
    //for of loop through each character of string provided
    //take the character and add it to the empty string variable
    //return the variable
    
    //#2
    //Create a variable and change the variable every step of the way
    //Then return the variable:
    // function reverse(str) {
      //   let rev = str.split('');
      //   rev.reverse();
      //   return rev.join('');
      // }
      // module.exports = reverse;
      
      // ......--------------------------------------------------------------------
      //#1.0 easies/simple using reverse method
      
      // function reverse(str) {
        //  return str.split('').reverse().join('');
        // }
        
        // module.exports = reverse;