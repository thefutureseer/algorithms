"""
'Score Steps' (Recursive Solution)

This function prints a staircase pattern of `n` rows using recursion.

Algorithm:
    - The function uses recursion to build and print each row of the staircase.
    - The parameter `column` tracks the current row being built.
    - The parameter `stairs` accumulates the characters of the current row.

Base Cases:
    - If `column` equals `n`, recursion terminates (all rows are built).
    - If the length of `stairs` equals `n`, the current row is complete, and it is printed.
      The function then moves to the next row by incrementing `column`.

Recursive Step:
    - Add either a `#` or a space (` `) to `stairs` based on its length relative to `column`.
    - Recursively call the function with updated `stairs` and the same `column`.

Complexity:
    - Time Complexity: O(n^2), as each row builds a string of length `n`, and there are `n` rows.
    - Space Complexity: O(n^2), due to the recursive call stack and string operations.

Args:
    n (int): The total number of rows in the staircase.
    column (int): Tracks the current row being built (default is 0).
    stairs (str): Tracks the characters of the current row (default is an empty string).

Example:
    Input: n = 3
    Output:
    #
    ##
    ###
"""

def steps(n, column=0, stairs=""):
    """
    Prints a staircase pattern of `n` rows using recursion.
    """
    # Base Case: If all rows are complete, stop recursion
    if column == n:
        return

    # Base Case: If the current row is complete, print it and move to the next row
    if len(stairs) == n:
        print(stairs)  # Print the completed row
        steps(n, column + 1)  # Start building the next row
        return

    # Build the current row: Add '#' if within bounds, otherwise add a space
    if len(stairs) <= column:
        stairs += "#"
    else:
        stairs += " "

    # Recursively call with the updated `stairs` for the same row
    steps(n, column, stairs)

# Example Usage
if __name__ == "__main__":
    steps(3)