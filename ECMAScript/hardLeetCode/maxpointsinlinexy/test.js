const maxPoints = require('./maxPoints');

test('maxPoints function is working', () => {
  expect(maxPoints([[1,1],[2,2],[3,3]])).toBe(3);
  expect(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])).toBe(4);
  expect(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5]])).toBe(5);
  expect(maxPoints([[2,2],[3,3],[1,1]])).toBe(3);
  expect(maxPoints([[5,3],[3,2],[1,4],[2,3],[4,1],[1,1]])).toBe(4);
  expect(maxPoints([[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]])).toBe(6);
  expect(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]])).toBe(6);
  expect(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]])).toBe(10);
  expect(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]])).toBe(11);
});

