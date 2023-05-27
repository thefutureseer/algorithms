const fibonacci = (position, iterations = [], count = 0) => {
  console.log(`Iteration ${count}: Fibonacci(${position})`);

  if (position < 2) {
    iterations.push(position);
    console.log(`  - Recursive calls: ${count}`);
    console.log(`  - Iterations: [${iterations.join(', ')}]`);
    console.log(`  - Result: ${position}`);
    return position;
  }

  iterations.push(position);

  const result = fibonacci(position - 1, iterations, count + 1) + fibonacci(position - 2, iterations, count + 1);
  iterations.push(result);

  console.log(`  - Recursive calls: ${count}`);
  console.log(`  - Iterations: [${iterations.join(', ')}]`);
  console.log(`  - Result: ${result}`);
  return result;
};

fibonacci(4);