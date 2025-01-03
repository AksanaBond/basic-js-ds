const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
   const newNode = new ListNode(value);
   if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
   }else {
    this.tail.next = newNode;
    this.tail = newNode;
   }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const top = this.head.value;
    this.head = this.head.next;
    return top;
  }
}

module.exports = {
  Queue,
};
