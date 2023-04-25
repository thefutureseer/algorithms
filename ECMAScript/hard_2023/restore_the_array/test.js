const numberOfArrays = require("./index");

describe('numberOfArrays', () => {
  // Test case 1
  test('s="1317" and k=2000 should return 8', () => {
    let s = "1317";
    let k = 2000;
    let expectedOutput = 8;
    let actualOutput = numberOfArrays(s, k);
    console.log("test 1 consoling: ",expectedOutput === actualOutput); // Output: true
    expect(actualOutput).toBe(expectedOutput);
  });

  test('s="1000" and k=10 should return 0', () => {
    // Test case 2
    s = "1000";
    k = 10;
    expectedOutput = 0;
    actualOutput = numberOfArrays(s, k);
    console.log("test 2 consoling: ", expectedOutput === actualOutput); // Output: true
    expect(actualOutput).toBe(expectedOutput);
  });

});


// // Test case 3
// s = "127531";
// k = 50;
// expectedOutput = 4;
// actualOutput = numberOfArrays(s, k);
// console.log(expectedOutput === actualOutput); // Output: true

// // Test case 4
// s = "23456";
// k = 200;
// expectedOutput = 4;
// actualOutput = numberOfArrays(s, k);
// console.log(expectedOutput === actualOutput); // Output: true

// // Test case 5
// s = "1000000000";
// k = 9;
// expectedOutput = 0;
// actualOutput = numberOfArrays(s, k);
// console.log(expectedOutput === actualOutput); // Output: true
