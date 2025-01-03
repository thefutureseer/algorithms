# Iteratively Create an Array of Fibonacci Numbers 
# Note:
# The Fibonacci sequence starts 
# with 0 and 1, and each subsequent 
# number is the sum of the 
# previous two:
  
# ITERATIVE FUNCTION
# def fibonacci_iterative(n):
#     # Initialize an empty list to store the Fibonacci sequence
#     sequence = []
  
#     # Start with the first two numbers in the Fibonacci sequence
#     a, b = 0, 1
  
#     # Use a for loop to iterate 'n' times (one iteration for each number in the sequence)
#     for _ in range(n):
#         # Append the current value of 'a' (the current Fibonacci number) to the sequence
#         sequence.append(a)
  
#         # Update 'a' to the value of 'b' (move to the next number in the sequence)
#         # Update 'b' to the sum of the current 'a' and 'b' (the next Fibonacci number)
#         a, b = b, a + b
  
#     # After the loop, return the list containing the first 'n' Fibonacci numbers
#     return sequence
  
# # Example usage:
# print(fibonacci_iterative(10))  # Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# RECURSIVE FUNCTION

def recurse_ ();
sequence = []
a, b = 0, 1
a, b = b, a+b