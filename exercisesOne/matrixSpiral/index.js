

//Time complexity is quadradic big O(n^2)



//Create empty array of arrays called results
//For loop from 1 to n and add empty arrays into the empty array in variable called result
//Create a counter var set it to 1
//While loop: as long as start column is less than end column and end row is <=end row
//first for loop: from sart Column to end Column: responsible for assembling the top row array.
//results


//Psuedo code
//Iterating through spiral matrix go through the first array then down the end of all arrays until you
//reach the last row and iterate throught that array backwards from last to first character in the last array
//then go up through all first characters of all rows except the first one which was already iterated through
//then iterate through that array which is the second array until the final character because that one was
//already iterated over

//Iterate through the first array (First row)
//Iterate through all the last characters of each array until you get to the final row then
//Iterate backwards through the final row of arrays until you get to the first character then
//Iterate through all the first characters exept the one we already iterated over, the one we stop on is to be 
//Iterated through until we reach the one we already touched then begin
//Iterating over the last character which has not been iterated through yet, on each row and 
//repeat the spiral or inward iteration of arrays

//Function called matrix taking in n (a user given integer) as an argument
function matrix(n) {
  //Empty array to hold n number of arrays
  let result = [];
  //For loop to create n number of empty arrays and push them into empty array called result
  for (let i = 0; i < n; i++) {
      result.push([]);
  }
  //Counter and set it to 1
  let counter = 1;
  //Start and end column
  let startColumn = 0;
  let endColumn = n-1;
  //Start and end row
  let startRow = 0;
  let endRow = n-1;

  //While loop to count each row and column inside of result array of arrays
  while (startColumn <= endColumn && startRow <= endRow) {
        //For loop iterating through all columns and 0 through n (given number/ argument)
        for (let i = startColumn; i <= endColumn; i++) {
            //In result array: at first array at first character set to counter integer
            result[startRow][i] = counter;
            //Increment counter by one
            counter++;
        }
        //Increment startRow by one to never look at the first row again
        startRow++;

        //For loop to iterate through available rows. Each iteration adds an integer to the end Column
        for (let i = startRow; i <= endRow; i++) {
            //Add to result arrays by setting the end index to counter value
            result[i][endColumn] = counter;
            //Increment counter by one
            counter++;
        }
        //Decrement end column by one to never look at it again
        endColumn--;

        //For loop iterating through the end row from largest available index to smallest available index setting 
        for (let i = endColumn; i >= startColumn; i--) {
            //Result array at i with startcolumn, assigning the counter integer
            result[endRow][i] = counter;
            //Increment counter by one
            counter++;
        } 
        //Decrement end row by one and never look at it again
        endRow--;
        
        //For loop to iterate through rows from new start column to new end column and set first column integers
        for (let i = endRow; i >= startRow; i--) {
            //Set result array of arrays in the rest of the first column with each iteration 
            result[i][startColumn] = counter;
            //Increment counter by one to set the next integer in the first column if there is one
            counter++;
        }
        //Increment startColumn by one because its full we never look at it again
        startColumn++;
    }
    //Return the anser: result array, each array inside if stacked on top of eachother the integers inside
    //of the arrays increment by one in a spiral beginning from top left or row 1 column 1 & starting at integer 1
    return result;
}
module.exports = matrix;