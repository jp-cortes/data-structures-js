// example of a dynamic array with 

class MyArray {
    constructor() {
        this.lenght = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data;
    }
    pop() {
       const lastItem = this.data[this.lenght - 1];
       delete this.data[this.lenght - 1];
       this.lenght--;

        return lastItem;
    }
    myDelete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.lenght - 1];
        this.lenght--;
    }
}

const myArray = new MyArray();

myArray.push("Rosie"); //{0: 'Rosie'}
myArray.push("Sakura"); //{0: 'Rosie', 1: 'Sakura'}
myArray.push("Megumi"); //{0: 'Rosie', 1: 'Sakura', 2: 'Megumi'}

myArray.get(1); //'Sakura'
myArray.pop();// Megumi delete the last item
myArray.myDelete(1); //'Sakura' show the deleted item