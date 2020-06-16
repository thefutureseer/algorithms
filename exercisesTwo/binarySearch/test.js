const binarySearch = require('./index');

test('BinarySearch is a function', ()=> {
  expect(typeof binarySearch).toEqual('function');
});

test('Key is 56 greater than the mid point & return true', () => {
  expect(binarySearch([1,3,7,8,9,10,45,56], 56)).toBeTruthy();
});

test('Key is less than mid point & return true', () => {
  expect(binarySearch([1,3,7,8,9,10,45,56], 3)).toBeTruthy();
});

test('If key is the only element in array', ()=> {
  expect(binarySearch([33], 33)).toBeTruthy();
});

test('Long array to search', () => {
  expect(binarySearch([1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,,4,5,6,7,8,9,10,11,12,13,14,15,16,17,45,56], 45)).toBeTruthy();
});