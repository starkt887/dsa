const prompt = require('prompt-sync')();

class Heap {
    constructor(size) {
        this.heapSize = 0;
        this.MAX_SIZE = size;
        this.arr = new Array(size)
    }
    size() {
        console.log(`Heap size:${this.heapSize}`);
    }
    parent(i) {
        return Math.floor(((i - 1) / 2))
    }
    lChild(i) {
        return ((2 * i) + 1)
    }
    rChild(i) {
        return ((2 * i) + 2)
    }
    addElement() {
        if (this.heapSize === this.MAX_SIZE) {
            console.log("Heap is full");
            return
        }
        // let element = parseInt(prompt("Enter the element= "))
        let inparr = [10, 20, 30, 40, 50, 60, 70]
        let k = 0;
        while (k < inparr.length) {
            let i = this.heapSize
            this.arr[i] = inparr[k++];
            this.heapSize++;
            while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
                let temp = this.arr[this.parent(i)];
                this.arr[this.parent(i)] = this.arr[i];
                this.arr[i] = temp;
                i = this.parent(i)
            }
        }
    }
    removeMax() {
        if (this.heapSize === 0) {
            console.log("Heap is empty");
            return;
        }
        if (this.heapSize === 1) {
            console.log(`Deleted ${this.arr[0]}`);
            this.arr.length = --this.heapSize//decrease heap size and length of arr
            return;
        }
        let root = this.arr[0]
        let i = this.heapSize - 1;
        this.arr[0] = this.arr[i]
        this.arr.length = --this.heapSize//decrease heap size and length of arr
        let id = 0
        let largest = id
        let lchild = this.lChild(id)
        let rchild = this.rChild(id)
        while (lchild < this.heapSize && rchild < this.heapSize) {
            if (lchild < this.heapSize && this.arr[id] < this.arr[lchild]) {
                largest = lchild;
            }
            if (rchild < this.heapSize && this.arr[largest] < this.arr[rchild]) {
                largest = rchild;
            }
            if (largest !== id) {
                let temp = this.arr[largest]
                this.arr[largest] = this.arr[id];
                this.arr[id] = temp
                id = largest
                lchild = this.lChild(id)
                rchild = this.rChild(id)
            }
        }
        console.log(`Deleted ${root}`);
    }

    showHeap() {
        console.log(this.arr);
        let i = 0;
        console.log(this.arr[i]);
        let lchild = this.lChild(i)
        let rchild = this.rChild(i)
        while (i < this.heapSize && (lchild < this.heapSize || rchild < this.heapSize)) {
            let lChildVal = 0, rChildVal = 0
            if (lchild < this.heapSize) {
                lChildVal = this.arr[lchild]
            }
            if (rchild < this.heapSize) {
                rChildVal = this.arr[rchild]
            }

            console.log(`${lChildVal}---${rChildVal}`);
            i++
            lchild = this.lChild(i)
            rchild = this.rChild(i)
        }
    }
}

function showOperations() {
    console.log("1. Heap size");
    console.log("2. Add element to heap");
    console.log("3. Remove element from heap");
    // console.log("4. Front Element");
    // console.log("5. Rear Element");
    // console.log("6. isEmpty");
    // console.log("7. isFull");
    console.log("8. Show heap");
    console.log("9. Exit");
}

function main() {
    let choice = 0;
    let size = parseInt(prompt("Enter the heap size= "))
    let heap = new Heap(size)
    while (choice != 9) {
        showOperations()

        choice = parseInt(prompt("Enter your choice= "))
        switch (choice) {
            case 1:

                heap.size()
                break;
            case 2:
                heap.addElement()
                break;
            case 3:
                heap.removeMax()
                break;
            case 8:
                heap.showHeap()
                break;
            case 9:
                console.log("End of program");
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    }
}
main();