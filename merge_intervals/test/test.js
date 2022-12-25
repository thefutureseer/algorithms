const mergeMeetingTimes = require('../index');

  describe("merge meeting times function", () => {

    it(" mergeMeetingTimes() is a function ", () => {
     const whatIs = typeof mergeMeetingTimes;
     expect(whatIs).toEqual('function');
    });

    it(" should return [[1, 4]] if given [[1,2], [2,4]] ", () => {
      const arr = [[2,4], [3,6]];
      const result = mergeMeetingTimes(arr);
      const equals = [[2,6]];
      expect(result).toEqual(equals);
    });

    it(`should return [[ 1, 4 ]] if given the array [[ 1, 3 ], [ 2, 4 ]]`, function() {
      var arr = [[1, 3], [2, 4]];
  
      var result = mergeMeetingTimes(arr);
  
      expect(result).toEqual([[1, 4]]);
    });

  });
