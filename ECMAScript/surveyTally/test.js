const countKeys = require("./questionTally");

test("Check if countKeys is a function", ()=>{
  const countingKeys = countKeys;
  expect(typeof countingKeys).toEqual('function')

});