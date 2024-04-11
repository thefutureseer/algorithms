// Write a function that takes in a 2D array of meeting
// times, where each sub array contains 2 integers representing a 
//meeting start and end time. Return a new 2D array such that 
//overlapping meeting blocks are condensed into combined meeting blocks

//keep track of the lowest number and the highest number in 
//each arr to compare them with the other arrays

// upon comparing the two arrays if the lowest is higher than the 
//lowest of the second arr then shift off the two middle numbers


var mergeMeetingTimes = function(arr) {
  //the correct answer does not 
  //need to use a deep copy because 
  //the input intervals array is not being modified. 
  //This line does a deep copy if needed:
  var arrCopy = JSON.parse(JSON.stringify(arr));

  //sort the deep copy in ascending 
  //order. 'a' - 'b' if returns
  // positive it means the 'a'
  //is lesser value.
  var sortedArr = arrCopy.sort((a, b) => a[0] - b[0]);

  //variable to store the first interval in
  //the sorted array
  var result = [sortedArr[0]];

  //look at each interval and compare
  for (var i = 1; i < sortedArr.length; i++) {
    //Store the result variable which 
    //is the first item the the 
    //sorted array
    var lastMeeting = result[result.length - 1];
    console.log(lastMeeting, " 1last meeting")
    // variable to look at each 
    //interval in the sorted array
    var currentMeeting = sortedArr[i];
    console.log(currentMeeting, " 1current meeting");
    
    //merging logic:
    //if the second interval in the sorted 
    //results array is larger 
    //than the first interval in the array
    // then do this
    if (lastMeeting[1] >= currentMeeting[0]) {
      console.log(lastMeeting, " 2last meeting")
      console.log(currentMeeting, " 2current meeting")
      //if the second interval in the sorted
      //results array is less than the second
      //
      if (lastMeeting[1] < currentMeeting[1]) {
        console.log(lastMeeting, " 3 last meeting")
        console.log(currentMeeting, " 3current meeting")
        lastMeeting[1] = currentMeeting[1];
      }
    } else {
      console.log(currentMeeting, " 4current meeting")
      console.log(result, " result")
      result.push(currentMeeting);
    }
    console.log(currentMeeting, "5current meeting")
    console.log(lastMeeting, " 4 /5last meeting")
  }
  
  console.log(result, " finished result")
  return result;
};

mergeMeetingTimes([[1, 3], [2, 4], [3,5], [6, 7 ]]);

///////////Brut force //////////

// var mergeMeetingTimes = function(arr) {
//   var arrCopy = JSON.parse(JSON.stringify(arr));
//   var sortedArr = arrCopy.sort((a, b) => a[0]-b[0] );
//   const result = [sortedArr[0]];


//   //loop through result arr of arrays 
//   for (let i = 0; i <= arr.length-1; i++) {
//     //set variable to each 2 items in each array
//     let e1 = result[result.length-1][1]
//     let timeBeginning = arr[i][0];
//     let timeEnding = arr[i][1];

//     // if second number of the first array is lower than the first
//     //number in second array. save first array in the new aray to return
//     if (e1 >= timeBeginning) {
//       result[result.length-1][1] = Math.max(e1, timeEnding)
//       // newArrayToReturn.push([timeBeginning, timeEnding]);
//       console.log(result, 'result line 21 ONLY ')
//     } else {
//       result.push(arr[i])
//     }

//     //check each array and compare each to see if 
//     //the first time number is within another first time
//     // if (timeBeginning <= arr[i+1][0]) {

//     //   if (timeEnding >= arr[i+1][0] && timeEnding <= arr[i+1][1]) {
//     //     //cut off middle number arr[i+1][0]
//     //     //by adding the first number to the newreturnarray
//     //     newArrayToReturn.push([timeBeginning, arr[i+1][1]]);
//     //     console.log('newArrayToReturn end>begin & < 2n end',newArrayToReturn);

//     //     //check second number second array.
//     //     if (timeEnding >= arr[i+1][1]) {
//     //       //cut off second number of second array
//     //       newArrayToReturn.push([arr[i][0], arr[i][1]]);
//     //       console.log('newArrayToReturn after time ending is > second ending',newArrayToReturn);
//     //     }
//     //   }
//     // }

//         //keep track of 
//   }
//   console.log('REsult',result);

//   return result;
// };

 module.exports = mergeMeetingTimes;