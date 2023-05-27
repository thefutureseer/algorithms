// Import the function to be tested
const fibonacci = require('./index');

// Test suite for the fibonacci function
describe('fibonacci', () => {
  // Test case for position 0
  it('should return 0 for position 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  // Test case for position 1
  it('should return 1 for position 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  // Test case for position 2
  it('should return 1 for position 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  // Test case for position 3
  it('should return 2 for position 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  // Test case for position 4
  it('should return 3 for position 4', () => {
    expect(fibonacci(4)).toBe(3);
  });

  // Test case for position 5
  it('should return 5 for position 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

      // Test case for position 6
  it('should return 8 for position 6', () => {
    expect(fibonacci(6)).toBe(8);
  });

  // Test case for position 7
  it('should return 13 for position 7', () => {
    expect(fibonacci(7)).toBe(13);
  });

  // Test case for position 7
  it('should return 21 for position 8', () => {
    expect(fibonacci(8)).toBe(21);
  });

  // Test case for position 7
  it('should return 34 for position 9', () => {
    expect(fibonacci(9)).toBe(34);
  });  

  // Add more test cases as needed for different positions
});