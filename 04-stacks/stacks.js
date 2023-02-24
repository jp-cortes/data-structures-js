//last in first out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        if(this.top === null) {
            console.log('The stack is empty')
        }
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        const deletedItem = this.top;
        if(!this.top) {
            console.log('The stack is empty')
            return null;
        } 
        if(this.top === this.bottom) {
            this.bottom = null;            
        }
        this.top = this.top.next;
        this.length--;
        console.log('deleted item', deletedItem)
        return this;
    }
}
const myStack = new Stack();