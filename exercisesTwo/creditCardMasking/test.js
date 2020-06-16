const maskify = require('./index');

test('maskify is a function', ()=> {
  expect(typeof maskify).toEqual('function');
});

test("should work for some examples", function(){
  expect(maskify('4556364607935616')).toEqual('############5616');
  expect(maskify('1')).toEqual('1');
  expect(maskify('11111')).toEqual('#1111');
});