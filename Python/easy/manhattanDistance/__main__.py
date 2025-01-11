def manhattan_distance(current, goal):
    # current and goal are tuples like (x, y)
    return abs(current[0] - goal[0]) + abs(current[1] - goal[1])

# Example usage
start = (2, 3)  # Starting position
goal = (5, 7)   # Goal position
print(manhattan_distance(start, goal))  # Output: 7