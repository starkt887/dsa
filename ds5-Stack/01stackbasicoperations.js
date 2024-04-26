const prompt = require('prompt-sync')();

class Stack {
    constructor() {
        this.stack = []
    }
    push() {
        let element = parseInt(prompt("Enter new element= "))
        this.stack.push(element)
        this.showStack()
    }
    pop() {
        let element = this.stack.pop()
        console.log(`Element ${element} is popped`);
        this.showStack()
    }
    top() {
        let element = this.stack[this.stack.length - 1]
        console.log(`Element ${element} is at top`);
        this.showStack()
    }
    isEmpty() {
        if (this.stack.length == 0) {
            console.log("Stack is empty!");
            return true
        }
        console.log("Stack have some elements");
        this.showStack()
        return false;
    }
    size() {
        console.log(`Stack size= ${this.stack.length}`);
    }
    showStack() {
        console.log(this.stack);
    }
}
function showOperations() {
    console.log("1. Stack length");
    console.log("2. Push new element");
    console.log("3. Pop top element");
    console.log("4. Show Top Element");
    console.log("5. isEmpty");
    console.log("6. Show stack");
    console.log("8. Exit");
}

function main() {
    let choice = 0;
    let stack = new Stack()
    while (choice != 8) {
        showOperations()
        choice = parseInt(prompt("Enter your choice= "))
        switch (choice) {
            case 1:
                stack.size()
                break;
            case 2:
                stack.push()
                break;
            case 3:
                stack.pop()
                break;
            case 4:
                stack.top()
                break;
            case 5:
                stack.isEmpty()
                break;
            case 6:
                stack.showStack()
                break;
            case 8:
                console.log("End of program");
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    }
}
main();