// Import bubbleSort function
const bubbleSort = require("./bubblesort"); 
const testArray = [64, 34, 25, 12, 22, 11, 90];

function generateLargeRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
}

test('Performance Test', () => {
  expect(() => bubbleSort(largeTestArray)).not.toThrow();
});

test('Basic sorting test', () => {
  const sortedArray = bubbleSort(testArray);
  const expectedArray = [11, 12, 22, 25, 34, 64, 90];
  expect(sortedArray).toEqual(expectedArray);
});

test('Empty array test', () => {
  const testArray = [];
  const sortedArray = bubbleSort(testArray);
  expect(sortedArray).toHaveLength(0);
});

const largeArraySize = 10000;
const largeTestArray = generateLargeRandomArray(largeArraySize);

test('Performance Test/ runs w/o errors', () => {
  expect(() => bubbleSort(largeTestArray)).not.toThrow();
});

test('Repeated values test', () => {
  const sortedArray = bubbleSort([4,4,4,3,2,1,1]);
  const expectedArray = [1, 1, 2, 3, 4, 4, 4];
  expect(sortedArray).toEqual(expectedArray);
});