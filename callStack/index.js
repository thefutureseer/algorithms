function factorial(n) {
  console.log(`add this to the top o thee callstack: factorial(${n})...`);
  
  if (n === 0) {
    console.log("Base case reached. Returning 1. and begin doing all the functions on the top o thee callstack");
    return 1; // base case
  }
  
  const result = n * factorial(n - 1); // recursive call
  console.log(`Returning the top o thee callStack and multiply it by: factorial(${n}) = ${result}`);
  return result;
}

console.log(factorial(5));

// In this example, 
//the factorial function calculates 
//the factorial of a number n by 
//recursively multiplying n with 
//the factorial of n-1 until it 
//reaches the base case of n === 0.

// Here's how the call stack would 
//look during the execution of this 
//example:

// factorial(5) is called, and its frame is added to the call stack.
// Inside factorial(5), factorial(4) is called, and its frame is added to the call stack.
// Inside factorial(4), factorial(3) is called, and its frame is added to the call stack.
// Inside factorial(3), factorial(2) is called, and its frame is added to the call stack.
// Inside factorial(2), factorial(1) is called, and its frame is added to the call stack.
// Inside factorial(1), factorial(0) is called, and its frame is added to the call stack.
// factorial(0) reaches the base case and returns 1. Its frame is removed from the call stack.
// factorial(1) multiplies 1 with the result from step 7 and returns 1. Its frame is removed from the call stack.
// factorial(2) multiplies 2 with the result from step 8 and returns 2. Its frame is removed from the call stack.
// factorial(3) multiplies 3 with the result from step 9 and returns 6. Its frame is removed from the call stack.
// factorial(4) multiplies 4 with the result from step 10 and returns 24. Its frame is removed from the call stack.
// factorial(5) multiplies 5 with the result from step 11 and returns 120. Its frame is removed from the call stack.
// The call stack becomes empty, 
//and the program execution ends. 
//The result of factorial(5), 
//which is 120, is logged to 
//the console.
// In this way, 
//as the recursive calls reach the 
//base case and start returning, 
//each function finishes its computation 
//and removes its frame from the call 
//stack until the stack is completely 
//unwound.