// Import the function to be tested
const fibonacci = require('./fibonacci');

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

  // Add more test cases as needed for different positions
});