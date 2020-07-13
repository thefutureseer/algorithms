//With a given number Build a pyramid out of score/hashtags which 
//will have the height of that number and the bottom row will be
//the width of that number

//Psuedo code: 
//From 1 to the given number "n"
//If 1-n length each on requires that number of hashtags
//If no hashtags add spaces to equal the same amount of "n"

// function pyramid(n, columns = (n*2)-1, level = "") {
//   var row = 0;

//     if (n === column) {
//       return;
//     }
//     if (n >= level.length) {
//       //Do the math to center the top hashtag in the first row
//       //Given number divided by half & place the hashtag accordingly
//       pyramid(n, column + 1);
//       return;
//     }
//     if (level.length >= columns) {
//       level = Math.floor(columns / 2) + " "; 
//       //Math for where to place the hashtag
//       level = "#"
//       level = Math.ceil(columns / 2) + " ";
//     }
//     pyramid(n, columns, level);

//     return level;
// };

// module.exports = pyramid;

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  //Iterate through rows up to n - 1
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
       level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;