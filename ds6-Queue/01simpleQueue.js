const prompt = require('prompt-sync')();

class Queue {
    constructor(size) {
        this.queue = new Array(size)
        this.MAX_SIZE = size;
        this.front = 0
        this.rear = 0
    }
    enqueue() {
        if (!this.isFull()) {
            let element = parseInt(prompt("Enter new element= "))
            this.queue[this.rear] = element
            if (this.rear !== this.MAX_SIZE) {
                this.rear++
            }
            this.showQueue()
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            let element = this.queue.shift()
            console.log(`Element ${element} is decueued`);
            this.rear--
            this.showQueue()
        }
    }
    frontElement() {
        if (!this.isEmpty()) {
            let element = this.queue[this.front]
            console.log(`Element ${element} is at front`);
            this.showQueue()
        }
    }
    rearElement() {
        if (!this.isEmpty()) {
            let element = this.queue[this.rear - 1]
            console.log(`Element ${element} is at rear`);
            this.showQueue()
        }
    }
    isFull() {
        if (this.rear == this.MAX_SIZE) {
            console.log("Queue is full");
            return true;
        }
        console.log("Queue have some space");
        this.showQueue()
        return false
    }
    isEmpty() {
        if (this.queue.length == 0) {
            console.log("Queue is empty!");
            return true
        }
        console.log("Queue have some elements");
        this.showQueue()
        return false;
    }
    size() {
        console.log(`Queue size= ${this.queue.length}`);
    }
    showQueue() {
        console.log(this.queue);
    }
}
function showOperations() {
    console.log("1. Queue length");
    console.log("2. Enqueue new element");
    console.log("3. Dequeue top element");
    console.log("4. Front Element");
    console.log("5. Rear Element");
    console.log("6. isEmpty");
    console.log("7. isFull");
    console.log("8. Show queue");
    console.log("9. Exit");
}

function main() {
    let choice = 0;
    let size = parseInt(prompt("Enter the queue size= "))
    let queue = new Queue(size)
    while (choice != 9) {
        showOperations()

        choice = parseInt(prompt("Enter your choice= "))
        switch (choice) {
            case 1:

                queue.size()
                break;
            case 2:
                queue.enqueue()
                break;
            case 3:
                queue.dequeue()
                break;
            case 4:
                queue.frontElement()
                break;
            case 5:
                queue.rearElement()
                break;
            case 6:
                queue.isEmpty()
                break;
            case 7:
                queue.isFull()
                break;
            case 8:
                queue.showQueue()
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