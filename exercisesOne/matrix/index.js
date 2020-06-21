//Create empty array of arrays called results
//Create a counter var starting at 1
//While loop:as long as start column is less than end column and end row is <=end row
//first for loop: from sart Column to end Column: responsible for assembling the top row array.
//results

function matrix(n) {
  var results = [];
  for (i=0; i<n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;
  while (startColumn <= endColumn && startRow <= endRow){
//Create Top row
  for (let i = startColumn; i <= endColumn; i++) {
    results[startRow][i]= counter;
    counter++;
  }
  //Increment start row so now its the second row ( a.k.a. [1])
  startRow++;
//Create Right column
  for ( let i = startRow; i <= endRow; i++){
   results[i][endColumn] = counter;
   counter++;
  }
  endColumn--;
//Create Bottom row
  for (let i= endColumn; i>=startColumn; i--){
    results[endRow][i]=counter;
    counter++;
  }
  endRow--;
//create start row/column or 4th section
  for (let i= endRow; i>=startRow; i--) {
    results[i][startColumn] =counter;
    counter++;
  }
  startColumn++;
}
return results;
}

module.exports = matrix;


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
  
