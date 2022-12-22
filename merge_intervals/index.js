// Write a function that takes in a 2D array of meeting
// times, where each sub array contains 2 integers representing a 
//meeting start and end time. Return a new 2D array such that 
//overlapping meeting blocks are condensed into combined meeting blocks

//keep track of the lowest number and the highest number in 
//each arr to compare them with the other arrays

// upon comparing the two arrays if the lowest is higher than the 
//lowest of the second arr then shift off the two middle numbers

var mergeMeetingTimes = function(arr) {
  var arrCopy = JSON.parse(JSON.stringify(arr));
  var sortedArr = arrCopy.sort((a, b) => a[0]-b[0] );
  const result = [sortedArr[0]];


  //loop through result arr of arrays 
  for (let i = 0; i <= arr.length-1; i++) {
    //set variable to each 2 items in each array
    let e1 = result[result.length-1][1]
    let timeBeginning = arr[i][0];
    let timeEnding = arr[i][1];

    // if second number of the first array is lower than the first
    //number in second array. save first array in the new aray to return
    if (e1 >= timeBeginning) {
      result[result.length-1][1] = Math.max(e1, timeEnding)
      // newArrayToReturn.push([timeBeginning, timeEnding]);
      console.log(result, 'result line 21 ONLY ')
    } else {
      result.push(arr[i])
    }

    //check each array and compare each to see if 
    //the first time number is within another first time
    // if (timeBeginning <= arr[i+1][0]) {

    //   if (timeEnding >= arr[i+1][0] && timeEnding <= arr[i+1][1]) {
    //     //cut off middle number arr[i+1][0]
    //     //by adding the first number to the newreturnarray
    //     newArrayToReturn.push([timeBeginning, arr[i+1][1]]);
    //     console.log('newArrayToReturn end>begin & < 2n end',newArrayToReturn);

    //     //check second number second array.
    //     if (timeEnding >= arr[i+1][1]) {
    //       //cut off second number of second array
    //       newArrayToReturn.push([arr[i][0], arr[i][1]]);
    //       console.log('newArrayToReturn after time ending is > second ending',newArrayToReturn);
    //     }
    //   }
    // }

        //keep track of 
  }
  console.log('REsult',result);

  return result;
};

// export default mergeMeetingTimes;