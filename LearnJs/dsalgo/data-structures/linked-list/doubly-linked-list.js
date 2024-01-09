class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Insert a value at the end
   * @param {*} val
   */
  push(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        let prevNode = this.tail;
        this.tail = newNode;
        this.tail.prev = prevNode;
        this.tail.prev.next = this.tail;
    }
    this.length++;
    return this;
  }

  /**
   * remove element from the end
   */
  pop(){
    if(!this.length) return undefined;
    if(this.length == 1) {
        this.head = null;
        this.tail = null;
    };

    const prevNode = this.tail.prev;
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    return this;
  }
}
