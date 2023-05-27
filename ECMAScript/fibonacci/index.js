const fibonacci = (count) => {
   // w/fib sequence starting at 1 and 1 
   // return if count is under 2
   if(count < 2) {
    return count;
   };

   return (fibonacci(count - 1) + fibonacci(count - 2));

};
module.exports = fibonacci;