const countKeys = require("./questionTally");

test("Check if countKeys is a function", ()=>{
  const countingKeys = countKeys;
  expect(typeof countingKeys).toEqual('function');
});

test("Funciton to count id's of takers", ()=>{
  const inputJsonObj = '[{"_id":"66585a86f96fa5443587abdc","respondentName":"Field supervisor S.O.C."}, {"_id":"66585a86f96fa5443587ab","respondentName":"supervisor S.O.C."},{ "_id":"585a86f96fa5443587abdc","respondentName":" S.O.C."}]'
  const numberOfKeys = countKeys(inputJsonObj);
  console.log(numberOfKeys.idCount, " <--THIS IS NUM KEY")
  expect(numberOfKeys.idCount).toEqual(3);
});