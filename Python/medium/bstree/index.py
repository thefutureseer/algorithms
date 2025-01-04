"""
Binary Search Tree Operations - Insertion and Search

Complexity:
    Insertion/Search:
        - Best/Average Case: O(log n), where n is the number of nodes in a balanced tree.
        - Worst Case (unbalanced tree): O(n), where n is the number of nodes.
    Space Complexity:
        - O(h), where h is the height of the tree (due to recursion).
        - In a balanced tree: h ≈ log n -> Space Complexity: O(log n).
        - In an unbalanced tree: h = n -> Space Complexity: O(n).

Note:
    To maintain efficiency in practice, 
    consider using self-balancing 
    trees like AVL or Red-Black Trees.
"""

class Node:
    def __init__(self, value):
        """
        Initialize a node with a value and pointers to left and right children.
        """
        self.value = value  # The value stored in the node
        self.left = None    # Pointer to the left child node
        self.right = None   # Pointer to the right child node


class BinarySearchTree:
    def __init__(self):
        """
        Initialize an empty binary search tree.
        The root node starts as None.
        """
        self.root = None  # The root of the BST

    # Insertion
    def insert(self, value):
        """
        Insert a new value into the BST.
        """
        if self.root is None:
            # If the tree is empty, the new node becomes the root
            self.root = Node(value)
        else:
            # Otherwise, recursively find the correct position for the new value
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, current, value):
        """
        Helper method to recursively insert a value in the tree.
        """
        if value < current.value:
            # If the value is less than the current node's value, go left
            if current.left is None:
                # Create a new node if the left child is empty
                current.left = Node(value)
            else:
                # Recur on the left child
                self._insert_recursive(current.left, value)
        else:
            # If the value is greater or equal, go right
            if current.right is None:
                # Create a new node if the right child is empty
                current.right = Node(value)
            else:
                # Recur on the right child
                self._insert_recursive(current.right, value)

    # Search
    def search(self, value):
        """
        Search for a value in the BST.
        Returns True if the value is found, otherwise False.
        """
        return self._search_recursive(self.root, value)

    def _search_recursive(self, current, value):
        """
        Helper method to recursively search for a value in the tree.
        """
        if current is None:
            # If we reach a None node, the value is not in the tree
            return False
        if value == current.value:
            # If the current node matches the value, we've found it
            return True
        elif value < current.value:
            # If the value is less than the current node's value, search in the left subtree
            return self._search_recursive(current.left, value)
        else:
            # If the value is greater, search in the right subtree
            return self._search_recursive(current.right, value)

    # In-order Traversal
    def inorder_traversal(self):
        """
        Perform an in-order traversal of the tree.
        Returns a list of all node values in sorted order.
        """
        result = []  # List to store the traversal result
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, current, result):
        """
        Helper method to perform in-order traversal recursively.
        """
        if current is not None:
            # Traverse the left subtree first
            self._inorder_recursive(current.left, result)
            # Visit the current node and add its value to the result list
            result.append(current.value)
            # Traverse the right subtree
            self._inorder_recursive(current.right, result)

# Example usage:
bst = BinarySearchTree()

# Insert values into the BST
bst.insert(50)  # Root node
bst.insert(30)  # Goes to the left of root
bst.insert(70)  # Goes to the right of root
bst.insert(20)  # Goes to the left of node 30
bst.insert(40)  # Goes to the right of node 30
bst.insert(60)  # Goes to the left of node 70
bst.insert(80)  # Goes to the right of node 70

# Perform in-order traversal
print("In-order Traversal:", bst.inorder_traversal())  # Output: [20, 30, 40, 50, 60, 70, 80]

# Search for values in the BST
print("Search for 40:", bst.search(40))  # Output: True (value exists in the tree)
print("Search for 90:", bst.search(90))  # Output: False (value does not exist in the tree)