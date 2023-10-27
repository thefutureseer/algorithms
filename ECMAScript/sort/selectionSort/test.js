const sort = require('./index');

test("sort is a function", ()=>{
  expect(typeof sort).toEqual('function');
});

test("order numbers in array [1, 3, 5, 7, 2]", ()=>{
  let arr = [1, 3, 5, 7, 2];
  const arr2 = [1, 2, 3, 5, 7];
  let arr3 = sort(arr);
  console.log("func ",arr3)
  expect(arr3).toEqual(arr2);
});

test("if array only has one, [1]", () => {
  const arr = [1];
  const arr2 = [1];
  const arr3 = sort(arr);
  expect(arr3).toEqual(arr2);
})