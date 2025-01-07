# Dijkstra's Algorithm
# Goal:
# Find the shortest path from a starting node to all other nodes in a weighted graph.

# Dijkstra'S WITH EARLY STOPPING: "path tracing" or "path reconstruction":

# How to Add Early Stopping
# To include early stopping:

# Add a goal parameter to the function.
# Check if the current_node being processed is the goal.
# If the goal is reached, break out of the loop.

# Time Complexity:


import heapq  # For the priority queue

def dijkstra_with_early_stopping(graph, start, goal):
    # Initialize distances and priority queue
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    priority_queue = [(0, start)]  # (distance, node)
    parents = {start: None}  # To reconstruct the path

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        # Stop early if the goal node is reached
        if current_node == goal:
            break

        # Process neighbors
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                parents[neighbor] = current_node
                heapq.heappush(priority_queue, (distance, neighbor))

    # Reconstruct path from start to goal
    path = []
    node = goal
    while node is not None:
        path.append(node)
        node = parents[node]
    path.reverse()

    return path, distances[goal]

# Example graph: adjacency list
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

# Test the algorithm
start_node = 'A'
goal_node = 'D'
shortest_path, cost = dijkstra_with_early_stopping(graph, start_node, goal_node)
print("Shortest path:", shortest_path)
print("Cost:", cost)


# COMPLEXITY
# Time Complexity:
# (O((V + E) cdot log V)), where (V) is the number of vertices and \(E\) is the number of edges.
# Space Complexity:
# (O(V + E)), due to the graph and priority queue.

# import heapq  # For the priority queue (min-heap)

# def dijkstra(graph, start):
#     # Step 1: Initialize distances dictionary with infinity for all nodes
#     # Set the start node's distance to 0
#     distances = {node: float('inf') for node in graph}
#     distances[start] = 0

#     # Priority queue to store (distance, node), starting with the start node
#     priority_queue = [(0, start)]

#     # Step 2: While the queue is not empty, process nodes
#     while priority_queue:
#         # Pop the node with the smallest distance
#         current_distance, current_node = heapq.heappop(priority_queue)

#         # Step 3: Skip processing if we've already found a shorter path
#         if current_distance > distances[current_node]:
#             continue

#         # Step 4: Update distances to neighbors
#         for neighbor, weight in graph[current_node]:
#             distance = current_distance + weight  # Calculate new distance

#             # If the new distance is shorter, update it
#             if distance < distances[neighbor]:
#                 distances[neighbor] = distance
#                 # Add the neighbor to the priority queue with the new distance
#                 heapq.heappush(priority_queue, (distance, neighbor))

#     return distances

# # Example graph (adjacency list format)
# graph = {
#     'A': [('B', 1), ('C', 4)],
#     'B': [('A', 1), ('C', 2), ('D', 6)],
#     'C': [('A', 4), ('B', 2), ('D', 3)],
#     'D': [('B', 6), ('C', 3)]
# }

# # Run Dijkstra's algorithm
# start_node = 'A'
# shortest_distances = dijkstra(graph, start_node)
# print(f"Shortest distances from {start_node}: {shortest_distances}")
