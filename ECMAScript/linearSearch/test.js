const linSearch = require("./index");

test("is a function", () => {
  const funcYes = typeof linSearch;
  expect(funcYes).toEqual('function');
});

test("is index of target", () => {
  const targ = 3;
  const params = [1,2,3];
  const isTarget = linSearch(params, targ);
  const indexNum = 2;
  expect(isTarget).toEqual(indexNum);
});

test("is index of target", () => {
  const targ = 3;
  const params = [1,2,4,3];
  const isTarget = linSearch(params, targ);
  const indexNum = 3;
  expect(isTarget).toEqual(indexNum);
});

test("is only index of target of the first match in array", () => {
  const targ = 3;
  const params = [1,3, 2,4,3];
  const isTarget = linSearch(params, targ);
  const indexNum = 1;
  expect(isTarget).toEqual(indexNum);
});

