const fibonacci = (position, iterations = []) => {
  if (position < 2) {
    iterations.push(position); // Store the current position in the iterations array
    return position;
  }

  iterations.push(position); // Store the current position in the iterations array
  const result = fibonacci(position - 1, iterations) + fibonacci(position - 2, iterations);
  iterations.push(result); // Store the result in the iterations array
  return result;
};

module.exports = fibonacci;