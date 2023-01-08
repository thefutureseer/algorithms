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

///////////Dec 28th

test('returns correct max profit for given stock prices', () => {
  expect(getMaxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
  expect(getMaxProfit([10, 9, 8, 7, 6, 5])).toBe(0);
  expect(getMaxProfit([5, 6, 7, 8, 9, 10])).toBe(5);
});

test('throws error when given less than 2 stock prices', () => {
  expect(() => getMaxProfit([10])).toThrow('Need more than 2 prices to get profit');
  expect(() => getMaxProfit([])).toThrow('Need more than 2 prices to get profit');
});
