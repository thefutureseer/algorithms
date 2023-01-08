const mergeMeetingTimes = require('../index');

test('merges overlapping meetings', () => {
  expect(mergeMeetingTimes([[1, 3], [2, 4]])).toEqual([[1, 4]]);
  expect(mergeMeetingTimes([[1, 5], [2, 3], [4, 8]])).toEqual([[1, 8]]);
});

test('leaves non-overlapping meetings unchanged', () => {
  expect(mergeMeetingTimes([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
  expect(mergeMeetingTimes([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
});

test('sorts meetings by start time', () => {
  expect(mergeMeetingTimes([[3, 4], [1, 2]])).toEqual([[1, 2], [3, 4]]);
  expect(mergeMeetingTimes([[2, 3], [1, 5], [4, 8]])).toEqual([[1, 8]]);
});



//////////////////////////////////

// describe("mergeMeetingTimes", function() {
  
//   it(`should return [[ 1, 4 ]] if given the array [[ 1, 3 ], [ 2, 4 ]]`, function() {
//     var arr = [[1, 3], [2, 4]];

//     var result = mergeMeetingTimes(arr);

//     expect(result).to.eql([[1, 4]]);
//   });

//   it(`should return [[ 5, 8 ]] if given the array [[ 5, 6 ], [ 6, 8 ]]`, function() {
//     var arr = [[5, 6], [6, 8]];

//     var result = mergeMeetingTimes(arr);

//     expect(result).to.eql([[5, 8]]);
//   });

//   it(`should return [[ 1, 8 ]] if given the array [[ 1, 8 ], [ 2, 5 ]]`, function() {
//     var arr = [[1, 8], [2, 5]];

//     var result = mergeMeetingTimes(arr);

//     expect(result).to.eql([[1, 8]]);
//   });

//   it(`should return [[1, 4], [5, 8]] if given the array [
//     [ 5, 8 ],
//     [ 1, 4 ],
//     [ 6, 8 ]
//   ]`, function() {
//     var arr = [[5, 8], [1, 4], [6, 8]];

//     var result = mergeMeetingTimes(arr);

//     expect(result).to.eql([[1, 4], [5, 8]]);
//   });

//   it(`should return [[ 1, 12 ]] if given the array [
//     [ 1, 10 ],
//     [ 2, 5 ],
//     [ 6, 8 ],
//     [ 9, 10 ],
//     [ 10, 12 ]
//   ]`, function() {
//     var arr = [[1, 10], [2, 5], [6, 8], [9, 10], [10, 12]];

//     var result = mergeMeetingTimes(arr);

//     expect(result).to.eql([[1, 12]]);
//   });
// });


//////////////////////

  // describe("merge meeting times function", () => {

  //   it(" mergeMeetingTimes() is a function ", () => {
  //    const whatIs = typeof mergeMeetingTimes;
  //    expect(whatIs).toEqual('function');
  //   });

  //   it(" should return [[1, 4]] if given [[1,2], [2,4]] ", () => {
  //     const arr = [[2,4], [3,6]];
  //     const result = mergeMeetingTimes(arr);
  //     const equals = [[2,6]];
  //     expect(result).toEqual(equals);
  //   });

  //   it(`should return [[ 1, 4 ]] if given the array [[ 1, 3 ], [ 2, 4 ]]`, function() {
  //     var arr = [[1, 3], [2, 4]];
  
  //     var result = mergeMeetingTimes(arr);
  
  //     expect(result).toEqual([[1, 4]]);
  //   });

  // });
