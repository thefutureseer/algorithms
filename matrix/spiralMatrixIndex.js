//Create empty array of arrays called results
//Create a counter var starting at 1
//While loop:as long as start column is less than end column and end row is <=end row
//first for loop: from sart Column to end Column: responsible for assembling the top row array.
//results

function matrix(n) {
  var results = [];
  for(i=0; i<n; i++){
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;
  while (startColumn <= endColumn && startRow <= endRow){
//Create Top row
  for (let i = startColumn; i <= endComumn; i++) {
    results[sartRow][i]= counter;
    counter++;
  }
  startRow++;
//Create Right column
  for ( let i = startRow; i<=endRow; i++);
   results[i][endColumn]=counter;
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
    resuts[i][startColumn] =counter;
    counter++;
  }
  startColumn++;
 }
 return results;
}




module.exports = matrix;
