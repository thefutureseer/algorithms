# Basic Tree 
# as a building block for the 
# A* algorithms in the 
# folder labeled hardest

# Node-Based Representation: Basic Tree Example with Printing

class TreeNode:
    # Initialize a TreeNode with data and no children
    def __init__(self, nodeDataValue):
        self.nodeDataValue = nodeDataValue  # Store the value
        self.left = None  # Pointer to the left child
        self.right = None  # Pointer to the right child


class BasicBinaryTree:
    # Initialize the tree with a root node, entry point of the tree
    def __init__(self, root_value):
        self.root = TreeNode(root_value)  # Create the root node

    # Insert a left child to a parent node
    def insert_left(self, parent_node, nodeDataValue):
        if parent_node.left is None:  # If no left child exists
            parent_node.left = TreeNode(nodeDataValue)
        else:
            print(f"Left child already exists for node {parent_node.nodeDataValue}")

    # Insert a right child to a parent node
    def insert_right(self, parent_node, nodeDataValue):
        if parent_node.right is None:  # If no right child exists
            parent_node.right = TreeNode(nodeDataValue)
        else:
            print(f"Right child already exists for node {parent_node.nodeDataValue}")

    # Print the tree using in-order traversal
    def print_tree(self, node):
        if node is not None:
            self.print_tree(node.left)  # Visit left child
            print(node.nodeDataValue, end=" ")  # Print current node value
            self.print_tree(node.right)  # Visit right child


# Example Usage:
tree = BasicBinaryTree(10)  # Create a tree with root value 10
tree.insert_left(tree.root, 5)  # Add left child to root
tree.insert_right(tree.root, 15)  # Add right child to root

# Add more nodes for demonstration
tree.insert_left(tree.root.left, 3)  # Add left child to the node with value 5
tree.insert_right(tree.root.left, 7)  # Add right child to the node with value 5

# Print the tree (in-order traversal)
print("Tree contents (in-order traversal):")
tree.print_tree(tree.root)  # Output: 3 5 7 10 15