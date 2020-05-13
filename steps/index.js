//Create visual steps out of scores(#) and parenthesis, bottom level has the same number
//of scores as levels of scores plus 
//add a space on the right hand side for each score every time you add a new step
//Write a function that accepts a positive number N
//The function will console log a step shape with N levels: 1 level looks like this '#'
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

//If column number is equal to or less than row number add "#"
//If Column number is greater than row number add a space " "
//Console log answer


function steps(n) {

 //First iterate over rows n times
 for (var row = 0; row < n; row++) {
     //set a variable to empty string to build a string
     let stair = '';

     //Iterate over column n times
     for (var column = 0; column < n; column++) {
        
        if (column <= row) {
           stair += '#';
        } else {
          stair += ' ';
        }
     }
     console.log(stair);
 }
}

module.exports = steps;