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
//If n number is equal to j stop everthing & the function is done.
//If n is equal to string length console log string and call function agian for the next level of strings
//if stairs string length is less than or equal the number j then add "#"
//If Stairs string length is greater than j number add a space " "

//Solved with Reursion (compared to the solution at the bottom: j is like row & stairs used like column)
function steps(n, j = 0, stairs = "") {
  //Set all base cases to save infinite recursion: 
  if (n === j) {
     return;
  } 
  //The only recursive part
  if (n === stairs.length) { 
     console.log(stairs);
     return steps(n, j + 1);
  }
  if (stairs.length <= j) {
     stairs += "#";
  } else {
      stairs += " ";
  }  
  steps(n, j, stairs);
}

module.exports = steps;

//Write a function that accepts a positive number N
//The function will console log strings stacked on top of 
//each other in a step shape with N levels and the bottom most level has N number of #'s.
//If column number is equal to or less than row number add "#"
//If Column number is greater than row number add a space " "
//Console log answer

// function steps(n) {

//  //First iterate over rows n times
//  for (var row = 0; row < n; row++) {
//      //set a variable to empty string to build a string
//      let stair = '';

//      //Iterate over column n times
//      for (var column = 0; column < n; column++) {
        
//         if (column <= row) {
//            stair += '#';
//         } else {
//           stair += ' ';
//         }
//      }
//      console.log(stair);
//  }
// }