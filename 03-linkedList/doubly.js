
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null,
        };
        this.tail = this.head;
        this.length = 1
    }
    // add to the tail
    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    //add to the head
    preppend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.length++;

        return this;
    }
    //insert a new value in a specific place of the list
    insert(index, value) {
        if (index >= this.length) {
            console.log(`Sorry the is not long enough the value: ${value} will be added to the tail`);
            return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.previous = firstPointer;
        newNode.next = holdingPointer;
        holdingPointer.previous = newNode;
        
        this.length++;

        return this;// working
    }
    myDelete(index) {
        const pointer = this.getTheIndex(index);
        if(index === 0) {
            const head = this.getTheIndex(index + 1);
            this.head = head
            head.previous = null;

            
            this.length--;
            
            console.log(`item deleted: ${pointer}`);
            
            return this;

        }
        else if (index === this.length) {
            const tail = this.getTheIndex(this.length - 1);
            this.tail = tail;
            tail.next = null;


            this.length--;
            
            console.log(`item deleted: ${pointer}`);
            
            return this;

        }
        
        const previousPointer = this.getTheIndex(index - 1);
        const nextPointer = this.getTheIndex(index + 1);
        previousPointer.next = nextPointer;
        nextPointer.previous = previousPointer;

        
        this.length--;
        console.log(`item deleted: ${pointer}`);
        return this;
    }
    //find a specific index
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }



}

const myDoublyLinkedList = new MyDoublyLinkedList(1);