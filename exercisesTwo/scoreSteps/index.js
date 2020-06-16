//Create visual steps out of scores(#) and parenthesis, bottom most level has the same number
//of scores as there are levels of scores.
//add a space on the right hand side of the score symbol, for each level every time you add a new step
//Write a function that accepts a positive number N
//The function will console log strings stacked on top of 
//each other in a step shape with N levels and the bottom most level has N number of #'s.
//: 1 level looks like this '#'
//TWO LEVELS
// '# ' One space to the right
// '##'
//If three levels of scores, add a space to the right of the two scores and if four scores, three scores has a space to right.
//THREE LEVELS (bottom level has three scores)
// '#  '
// '## '
// '###'
//Bottom score has no space unless N = 1
//FOUR LEVELS (Bottom level has four scores)
// '#   ' Three spaces to the right.
// '##  '
// '### '
// '####' NO  Space to the right.


//Understand base cases to make life easier:
//If n number is equal to column stop everthing & the function is done.
//If n is equal to string length console log string and call function agian for the next level of strings
//if stairs string length is less than or equal the number column then add "#"
//If Stairs string length is greater than column number add a space " "

//Solved with Reursion (compared to the solution at the bottom: j is like row & stairs used like column)
function steps(n, column = 0, stairs = "") {
  //Set all base cases to save infinite recursion: 
  //Rows decrements untill reaches same number as columns and stops
  if (n === column) {
     return;
  }
  //Every time we get to the length of the string
  if (n === stairs.length) { 
     //Console log string after each row is built 
     console.log(stairs);
     //Go to Next column to build the next string
     //Then return
     steps(n, column + 1);
     //Return can be here or along with the previous line.
     return;
    }
    //Add something to every single column
  if (stairs.length <= column) {
     stairs += "#";
  } else {
      stairs += " ";
  }  
  //Call steps function with the three parameters
  steps(n, column, stairs);
}

module.exports = steps;

//Write a function that accepts a positive number N
//The function will console log strings stacked on top of 
//each other in a step shape with N levels and the bottom most level has N number of #'s.
//If column number is equal to or less than row number add "#"
//If Column number is greater than row number add a space " "
//Console log answer

// function steps(n) {

//  //Iterate over row and column
//  for (var row = 0; row < n; row++) {
//      //set a variable to empty string to build a string
//      let stair = '';

//      //Iterate over column n times, each column has either # or ' '
//      for (var column = 0; column < n; column++) {
           //Add # or ' '
//         if (column <= row) {
//            stair += '#';
//         } else {
//           stair += ' ';
//         }
//      }
// Console log each string after each iteration
//      console.log(stair);
//  }
// }