class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

// let x = new ListNode(23,null);
// x.next = new ListNode(43,null);
// x.next.next = new ListNode(45,null);

// console.log(x);

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * adds a new element after tail
   * @param {*} val 
   */
  push(val) {
    let newNode = new ListNode(val, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Removes current tail element and assign previos node as new tail
   */
  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let currentTail = null;

    while (current.next) {
      currentTail = current;
      current = current.next;
    }

    this.tail = currentTail;
    if(currentTail)
        this.tail.next = null;

    this.length--;
    
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  /**
   * Removes the current head and assign next node as new head
   */
  shift(){
    if(!this.length) return undefined;
    this.head = this.head.next;
    this.length--;
    if(this.length == 0){
      this.tail = null;
    }
  }

  /**
   * Adds an element at the top
   * @param {*} val 
   */
  unshift(val){
    const node = new ListNode(val, null);
    if(!this.head && !this.tail){
      this.head = node;
      this.tail = node;
      this.head.next = this.tail;
      this.tail.next = null;
    } else{
      const currentHead = this.head;
      this.head = node;
      this.head.next = currentHead
    }
    this.length++;
  }

  /**
   * Accept an index and return node positioned on that particular index
   * @param {Number} index 
   * @returns Node
   */
  getNode(index){
    if(index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++){
      if(i === index) return currentNode;
      else{
        currentNode = currentNode.next;
      }
    }
  }

  /**
   * Update node at particular index
   * @param {Number} index 
   * @param {*} val 
   * @returns boolean (whether particular node updated or not)
   */
  updateNode(index, val){
    let node = this.getNode(index);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }

  /**
   * Insert a node at specific index and assign node of that particular index to be the next node of inserted node
   * @param {Number} index 
   * @param {*} val 
   * @returns boolean (whether node inserted or not)
   */
  insertNode(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0){
      this.unshift(val);
      return true;
    } else if(index === this.length){
      this.push(val);
      return true;
    } else{
      let node = new ListNode(val, null);
      let previousNode = this.getNode(index - 1);
      let nextNode = previousNode.next
      previousNode.next = node;
      node.next = nextNode;
      this.length++;
      return true;
    }
  }

  /**
   * 
   * @param {Number} index 
   * @returns boolean (Whether a node is deleted or not)
   */
  deleteNode(index){
    if(index < 0 || index >= this.length) return false;
    if(index === 0){
      this.shift();
      return true;
    }else if(index === (this.length - 1)){
      this.pop();
      return true;
    } else{
      let previousNode = this.getNode(index - 1);
      let currentNode = previousNode.next;
      previousNode.next = currentNode.next;
      this.length--;
      return true;
    }
  }

  reverse(){
    if(!this.length) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

  }
}

let myLinkedList = new SinglyLinkedList();
myLinkedList.push(23);
myLinkedList.push(45);
myLinkedList.push(67);
myLinkedList.push(12);

// myLinkedList.pop();

console.log("Single Linked List push example: ", myLinkedList);
