//test every part of the algorithm
const getMaxProfit = require('./maxProfit');

test('maxProfit is a funtion', ()=>{
 //this:
 var maxProfits = getMaxProfit;
 //is this:
 expect(typeof maxProfits).toEqual('function');
});

test('Does maxprofit work', ()=>{
 const arr = [10, 7, 5, 8, 11, 9];
 const result = getMaxProfit(arr);
  expect(result).toEqual(6)
})

// test('should run example code', () => {
//   // creates a new mocked function with no formal arguments.
//   expect(example.function.name).toEqual('square');
//   expect(example.function.length).toEqual(0);