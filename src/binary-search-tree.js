const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  node = null;

  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
      return;
    }

    let current = this.node;

    while (current) {
      if (data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(data);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(data);
          return;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this.node;
    while (current && current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current ?? null;
  }

  remove(data) {
    if (!this.node) return;

    let current = this.node;
    let parent = null;
    let isLeftChild = true;

    while (current && current.data !== data) {
        parent = current;
        if (data < current.data) {
            isLeftChild = true;
            current = current.left;
        } else {
            isLeftChild = false;
            current = current.right;
        }
    }

    if (!current) return false;

    if (!current.left && !current.right) {
        if (current === this.node) {
            this.node = null;
        } else if (isLeftChild) {
            parent.left = null;
        } else {
            parent.right = null;
        }
    }
    else if (!current.left) {
        if (current === this.node) {
            this.node = current.right;
        } else if (isLeftChild) {
            parent.left = current.right;
        } else {
            parent.right = current.right;
        }
    }
    else if (!current.right) {
        if (current === this.node) {
            this.node = current.left;
        } else if (isLeftChild) {
            parent.left = current.left;
        } else {
            parent.right = current.left;
        }
    }
    else {
        let successor = current.right;
        let successorParent = current;

        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }

        if (successorParent !== current) {
            successorParent.left = successor.right;
            successor.right = current.right;
        }

        successor.left = current.left;

        if (current === this.node) {
            this.node = successor;
        } else if (isLeftChild) {
            parent.left = successor;
        } else {
            parent.right = successor;
        }
    }
  }

  min() {
    let current = this.node;
    while (current && current.left) {
      current = current.left;
    }

    return current?.data ?? null;
  }

  max() {
    let current = this.node;
    while (current && current.right) {
      current = current.right;
    }

    return current?.data ?? null;
  }
}

module.exports = {
  BinarySearchTree
};