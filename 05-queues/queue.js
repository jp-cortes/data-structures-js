//first in first out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        if(this.first === null) {
            console.log('The queue is empty')
        }
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            // this.top = newNode;
            this.first = newNode;
            this.last = newNode;
        } else {
            const holdingPointer = this.first;
            this.last.next = newNode;
            this.last = newNode;
            // this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    dequeue() {
        const deletedItem = this.last;
        if(!this.first) {
            console.log('The queue is empty')
            return null;
        } 
        if(this.first === this.last) {
            this.last = null;            
        }
        this.last = this.last.next;
        this.length--;
        console.log('deleted item', deletedItem)
        return this;
    }
}
const myQueue = new Queue();