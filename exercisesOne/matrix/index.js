


function matrix(n) {
    //Begin with an empty array to be built out which will end up being the final result to return
    let result = [];
    //First loop through length of n to add empty arrays to the empty result array
    for (let i = 0; i < n; i++) {
        result.push([]);
    }    
    //Counter to help make sure we dont count the same character twice
    let counter = 1;
    //Beginning of the row
    let rStart = 0;
    //End of the row
    let rEnd = n-1;
    //beginning of column
    let cStart = 0;
    //End of Column
    let cEnd = n-1;

    //Loop through n while starting row is less than end row and starting column is less than end column
    while (cStart <= cEnd && rStart <= rEnd) {
        //Loop through from first column to the last column
        for (let i = cStart; i <= cEnd; i++) {
            //Results array at start-Row at [i] Assign the counter variable each time you loop a new column
            result[rStart][i] = counter;
            //Increment counter by 1 to keep count
            counter++;
        }
        //Increment row by one to make sure we dont iterate over it agian.
        rStart++

        //Loop through the remaining rows (new row start to row end) in the last column
        for (let i = rStart; i <= rEnd; i++) {
            //Results array at end-column at [i] Assign the counter variable every time loop runs
            result[i][cEnd] = counter;
            //Increment counter by 1 to keep count
            counter++; 
        }
        //Increment column end by one so we dont iterate over it again
        cEnd--;
        //Iterate from the new column end to the start column
        for (let i = cEnd; i >= cStart; i--) {
            //Assign the result-row end to counter variable number each time loop through
            result[rEnd][i] = counter;
            //Increment counter by one
            counter++
        }
        //Decrement last row so we never loop it again
        rEnd--;
        //Iterate through the rows from end row to new start row until end row is greater than or equal to start row index wise
        for (let i = rEnd; i >= rStart; i--) {
            //Result at [i] iteration at start column assign to the counter variable
            result[i][cStart] = counter;
            counter++;
        }
        //Increment column by one 
        cStart++;
      }
      return result;
}

module.exports = matrix;


//Time complexity is big O(n^2)


//Create empty array of arrays called results
//Create a counter var starting at 1
//While loop:as long as start column is less than end column and end row is <=end row
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
