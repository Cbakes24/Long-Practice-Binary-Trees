// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      let newNode = new TreeNode(val);
      if (currentNode === null) {
        this.root = newNode;
        return;
      }
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this.insert(val, currentNode.left);
        }
      }
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }

    search(val) {
      let currentNode = this.root; //currentNode is an object

      while (currentNode) {//while the root has a value
        if (val === currentNode.val) return true; //if val equals the root value
        if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          currentNode = currentNode.right;
        }
        // else {
        //   return true
        // }

      }
      return false;
    }

    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return null;

      if (currentNode) {
        console.log(currentNode.val);
      }
      this.preOrderTraversal(currentNode.left);

      this.preOrderTraversal(currentNode.right);

    }

    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return null;

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return null;
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const queue = [this.root];
      // queue.push(this.root);

      while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);

        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = [this.root];

      while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.val);

        if (node.left !== null) {
          stack.push(node.left);
        }
        if (node.right !== null) {
          stack.push(node.right);
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
// Your code here
