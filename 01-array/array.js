// example of a dynamic array with 

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
       const lastItem = this.data[this.length - 1];
       delete this.data[this.length - 1];
       this.length--;

        return lastItem;
    }
    myDelete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    shift() {
        const firstItem = this.data[0];
        delete this.data[0];
        this.length--;
 
         return firstItem;
    }
    unShift(item) {
        if(!item) {
            return this.length;
        }
        if(item === 0) {
            this.data[0] = item;
            this.length++;
            return this.data;
        }
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length++;
       
        return this.length;
    }
}

const myArray = new MyArray();

myArray.push("Rosie"); //{0: 'Rosie'}
myArray.push("Sakura"); //{0: 'Rosie', 1: 'Sakura'}
myArray.push("Megumi"); //{0: 'Rosie', 1: 'Sakura', 2: 'Megumi'}

myArray.get(1); //'Sakura'
myArray.pop();// Megumi delete the last item
myArray.myDelete(1); //'Sakura' show the deleted item