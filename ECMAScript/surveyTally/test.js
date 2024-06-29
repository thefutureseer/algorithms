const countKeys = require("./questionTally");

test("Check if countKeys is a function", () => {
  expect(typeof countKeys).toEqual('function');
});

test("Function to count id's of takers", () => {
  const inputJsonObj = '[{"_id":"66585a86f96fa5443587abdc","respondentName":"Field supervisor S.O.C."},{"_id":"66585a86f96fa5443587ab","respondentName":"supervisor S.O.C."},{"_id":"585a86f96fa5443587abdc","respondentName":" S.O.C."}]';
  const numberOfKeys = countKeys(inputJsonObj);
  console.log(numberOfKeys, " THIS IS NUM KEY");
  expect(numberOfKeys.idCount).toEqual(3);
});

test("Function handles empty input", () => {
  const inputJsonObj = '[]';
  const numberOfKeys = countKeys(inputJsonObj);
  expect(numberOfKeys.idCount).toEqual(0);
});

test("Function handles invalid JSON", () => {
  const inputJsonObj = 'invalid-json';
  const numberOfKeys = countKeys(inputJsonObj);
  expect(numberOfKeys.majorityVote).toEqual('invalidJson');
});

test("Function counts correctly without _id key", () => {
  const inputJsonObj = '[{"respondentName":"Field supervisor S.O.C."},{"respondentName":"supervisor S.O.C."}]';
  const numberOfKeys = countKeys(inputJsonObj);
  expect(numberOfKeys.idCount).toEqual(0);
});

test("Function counts correctly with mixed true/false for vampireHighSchool", () => {
  const inputJsonObj = '[{"_id":"1","vampireHighSchool":true},{"_id":"2","vampireHighSchool":false},{"_id":"3","vampireHighSchool":true}]';
  const numberOfYays = countKeys(inputJsonObj);
  console.log("num of yeses: json obj: ", numberOfYays.highSchoolForever)
  expect(numberOfYays.highSchoolForever).toEqual(2);
});