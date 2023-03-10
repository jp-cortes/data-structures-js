//example of the structure
// 1-- > 2-- > 3-- > 4-- > 5-- > null;
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null,
//                 },
//             },
//         },
//     },
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1
    }
    // add to the tail
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    //add to the head
    preppend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
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
        newNode.next = holdingPointer;
        
        this.length++;

        return this;
    }
    // delete a specific index
    myDelete(index) {
        const pointer = this.getTheIndex(index);
        const previousPointer = this.getTheIndex(index - 1);
        const nextPointer = this.getTheIndex(index + 1);
        previousPointer.next = nextPointer
        
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

const myLinkedList = new MySinglyLinkedList(1);