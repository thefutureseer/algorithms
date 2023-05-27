const fibonacci = (position, iterations = [], logger = null) => {
  if (position < 2) {
    iterations.push(position);
    if (logger) {
      logger.log(`fibonacci(${position}) called`);
    }
    return position;
  }

  iterations.push(position);
  if (logger) {
    logger.log(`fibonacci(${position}) called`);
  }
  
  const result = fibonacci(position - 1, iterations, logger) + fibonacci(position - 2, iterations, logger);
  iterations.push(result);
  if (logger) {
    logger.log(`fibonacci(${position}) result: ${result}`);
  }
  
  return result;
};

module.exports = fibonacci;