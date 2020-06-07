const binarySearch = require('./index');

test('binarySearch is a function', ()=> {
  expect(typeof binarySearch).toEqual('function');
});

test('key is 56 return true', () => {
  expect(binarySearch([1,3,7,8,9,45,56], 56)).toBeTruthy();
});
