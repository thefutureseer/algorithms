var merge = require('./index');

test("Merge is a function", () => {
  //check type
  const mergeFun = typeof merge;
  expect(mergeFun).toEqual('function');
});

test("take 2 arrays and merge them", () => {
  const arrone = [1, 3, 5, 7];
  const arrtwo = [2, 4, 8, 9];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [1, 2, 3, 4, 5, 7, 8, 9];
  expect(mergeOne).toEqual(arr3);
});