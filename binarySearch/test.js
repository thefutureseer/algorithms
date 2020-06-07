const binarySearch = require('./index');

test('binarySearch is a function', ()=> {
  expect(typeof binarySearch).toEqual('function');
});

test('key is 56 greater than the mid point & return true', () => {
  expect(binarySearch([1,3,7,8,9,10,45,56], 56)).toBeTruthy();
});

test('Key is less than mid point & return true', () => {
  expect(binarySearch([1,3,7,8,9,10,45,56], 3)).toBeTruthy();
});