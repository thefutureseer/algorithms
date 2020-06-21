//PSUEDO CODE
//write a program that prints out numbers 1-n (n being the given number)
//For every 5th number print out fizz instead of the number
//every third number print buzz instead
//if both 3 & 5 print fizzbuzz!

//Function takes in a given number
function fizzBuzz(n) {
  //For loop to go through each number from 1 to n
  for (let i = 1; i <= n; i++) {
     //Check each number to see if it can be divided by 15 if so print fizzbuzz (all lowercase) to the console
     if (i % 15 === 0) {
      console.log("fizzbuzz" );
    } 
    //Check each number if it can be divided by 3 if so print fizz (all lowercase) to the console 
    else if (i % 3 === 0) {
      console.log("fizz");
    }
    //check each number if it can be divided by 5 and if so pirn buzz (lowercase) to the console
    else if (i % 5 === 0) {
      console.log("buzz");
    } 
    else {
      //Otherwise print the number 
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

//TIME COMPLEXITY Big 0(n) it has one loop taking all the time and adding an equal amount of time with 
//every integer added. All other operations are constant time.