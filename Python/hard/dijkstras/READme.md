Listing all variables, functions, and their purposes before coding is a good practice. Here's a structured breakdown of Dijkstra's algorithm:

---

### **Key Variables**
1. **`graph`**:
   - **Type:** Dictionary
   - **Purpose:** Represents the weighted graph as an adjacency list where keys are nodes and values are dictionaries of neighboring nodes with edge weights.

2. **`start`**:
   - **Type:** String (or the type of node used in the graph)
   - **Purpose:** The starting node for the algorithm.

3. **`distances`**:
   - **Type:** Dictionary
   - **Purpose:** Tracks the shortest known distance from the start node to each node. Initially, set to infinity (`float('inf')`) for all nodes except the start node, which is set to 0.

4. **`priority_queue`**:
   - **Type:** Min-Heap (Priority Queue)
   - **Purpose:** Stores tuples of the form `(current_distance, node)` to process nodes based on the shortest distance.

5. **`visited`**:
   - **Type:** Set
   - **Purpose:** Tracks nodes that have been processed to avoid reprocessing them.

6. **`current_distance`**:
   - **Type:** Integer or Float
   - **Purpose:** Represents the distance of the current node being processed from the start node.

7. **`current_node`**:
   - **Type:** String (or node type)
   - **Purpose:** The node currently being processed.

8. **`neighbor`**:
   - **Type:** String (or node type)
   - **Purpose:** A neighboring node of the current node.

9. **`weight`**:
   - **Type:** Integer or Float
   - **Purpose:** The weight of the edge connecting the `current_node` and `neighbor`.

10. **`path` (optional)**:
    - **Type:** Dictionary
    - **Purpose:** Tracks the previous node for each node to reconstruct the shortest path.

---

### **Key Functions**
1. **`dijkstra(graph, start)`**:
   - **Purpose:** Implements Dijkstra's algorithm to find the shortest distances from the start node to all other nodes in the graph.

2. **`reconstruct_path(end, path)` (optional)**:
   - **Purpose:** Reconstructs the shortest path to a specific node using the `path` dictionary.

---

### **Algorithm Steps with Variables**
1. **Initialize Variables:**
   - Create `distances` with infinity values, except for the start node.
   - Initialize `priority_queue` with `(0, start)`.
   - Create an empty `visited` set.
   - (Optional) Initialize `path` for tracking the shortest path.

2. **Process Nodes from Priority Queue:**
   - While the `priority_queue` is not empty:
     - Extract the `current_distance` and `current_node` with the smallest distance.
     - Skip if the `current_node` is already in `visited`.

3. **Update Neighbors:**
   - For each `neighbor` of `current_node`:
     - Calculate `distance = current_distance + weight`.
     - If `distance` is shorter than `distances[neighbor]`:
       - Update `distances[neighbor]`.
       - Add `(distance, neighbor)` to the `priority_queue`.
       - (Optional) Update `path[neighbor]` to `current_node`.

4. **Mark Node as Visited:**
   - Add `current_node` to the `visited` set.

5. **Return Results:**
   - Return `distances` (and optionally the `path` dictionary for reconstructing paths).

---

### **Example Initialization**
```python
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

start = 'A'

# Variables to track
distances = {'A': 0, 'B': float('inf'), 'C': float('inf'), 'D': float('inf')}
priority_queue = [(0, 'A')]
visited = set()
path = {}
```