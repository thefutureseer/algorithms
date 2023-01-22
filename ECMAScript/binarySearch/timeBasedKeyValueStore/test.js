const TimeMap = require('./index'); // import the TimeMap class

describe('TimeMap', () => { // describing the test suite for TimeMap class
    let timeMap;

    beforeEach(() => { // before each test create a new instance of TimeMap class
        timeMap = new TimeMap();
    });

    test('set and get a key-value pair', () => { // test case for setting and getting a single key-value pair
        timeMap.set('key1', 'value1', 10); // set the key-value pair
        expect(timeMap.get('key1', 5)).toBe(""); //expect the value of 'key1' at timestamp 5 to be ""
        expect(timeMap.get('key1', 10)).toBe("value1"); // expect the value of 'key1' at timestamp 10 to be "value1"
        expect(timeMap.get('key1', 15)).toBe("value1"); // expect the value of 'key1' at timestamp 15 to be "value1"
    });

    test('set and get multiple key-value pairs', () => { //test case for setting and getting multiple key-value pairs
        timeMap.set('key1', 'value1', 10); // set the key-value pair
        timeMap.set('key1', 'value2', 20); // set the key-value pair
        timeMap.set('key2', 'value3', 30); // set the key-value pair

        expect(timeMap.get('key1', 5)).toBe(""); //expect the value of 'key1' at timestamp 5 to be ""
        expect(timeMap.get('key1', 10)).toBe("value1"); // expect the value of 'key1' at timestamp 10 to be "value1"
        expect(timeMap.get('key1', 15)).toBe("value1"); // expect the value of 'key1' at timestamp 15 to be "value1"
        expect(timeMap.get('key1', 20)).toBe("value2"); // expect the value of 'key1' at timestamp 20 to be "
    });
  });