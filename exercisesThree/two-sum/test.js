const twoSum = require("./index.js");

test('twoSum is a function', () => { 
  expect(typeof twoSum).toEqual('function')})

test('twoSum finds the indices of two numbers equaling a target number', () => {
  const target = 11;
  const array = [1,2,3,4,5,6];
  const funcTwoSum = twoSum(array, target);
  expect(funcTwoSum).toEqual([5, 4])
})
