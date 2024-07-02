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

test("one item in array", ()=>{
  const arrone = [ 1 ];
  const arrtwo = [];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [1]
  expect(mergeOne).toEqual(arr3);
});

test("both arrays are empty", () => {
  const arrone = [];
  const arrtwo = [];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [];
  expect(mergeOne).toEqual(arr3);
});

test("each array has one element", () => {
  const arrone = [3];
  const arrtwo = [1];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [1, 3];
  expect(mergeOne).toEqual(arr3);
});

test("arrays with duplicate elements", () => {
  const arrone = [1, 3, 5, 5];
  const arrtwo = [2, 4, 5, 6];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [1, 2, 3, 4, 5, 5, 5, 6];
  expect(mergeOne).toEqual(arr3);
});

test("arrays with negative numbers", () => {
  const arrone = [-3, -1, 2, 4];
  const arrtwo = [-2, 0, 1, 3];
  const mergeOne = merge(arrone, arrtwo);
  const arr3 = [-3, -2, -1, 0, 1, 2, 3, 4];
  expect(mergeOne).toEqual(arr3);
});