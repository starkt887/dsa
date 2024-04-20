const prompt = require('prompt-sync')();

let head = null;
let tail = null;
let id = 0;
class User {
    constructor(name) {
        this.id = ++id
        this.name = name
        this.next = null
        this.previous = null
    }
    setNext(nextNode) {
        this.next = nextNode
    }
    setPrevious(previousNode) {
        this.previous = previousNode
    }
    getNext() {
        return this.next
    }
    getPrevious() {
        return this.previous
    }
}
function lengthList() {
    let pos = 0;
    let listItem = head
    while (listItem !== null) {
        listItem = listItem.next
        pos++
    }
    console.log(`Lenght: ${pos}`);
}
function createNode() {
    let name = prompt("Enter user name= ")
    let node = new User(name)
    return node;
}
function addNode() {
    let newNode = createNode();
    if (head == null) {
        head = newNode;
        tail = newNode;
        return;
    }
    newNode.setPrevious(tail);//set previous as current tail
    tail.setNext(newNode);//set next to new node
    tail = newNode;//update the tail to new node
    console.log(head, tail);
}
function searchNode(targetPos) {
    let listItem = head
    let pos = 1
    while (listItem != null) {
        if (pos === targetPos) {//search for the previous position
            return listItem
        }
        listItem = listItem.next
        pos++;
    }
    return -1
}
function addNodeToPos() {
    let position = parseInt(prompt("Enter the position= "))
    if (position === 1) {
        console.log("Setting Head");
        let newNode = createNode()
        newNode.setNext(head);//set newnode next as current head
        head.setPrevious(newNode);//set previous of current head to newnode
        head = newNode;//update head to newNode
    } else {
        let targetNode = searchNode(position)
        if (targetNode !== -1) {
            let newNode = createNode()
            let preTargetNode = targetNode.getPrevious();
            preTargetNode.setNext(newNode)//update the next node to newnode of the previousnode of targetnode
            targetNode.setPrevious(newNode)//update the previousnode of target node to new node
            newNode.setPrevious(preTargetNode)
            newNode.setNext(targetNode)
        }
        else {
            console.log("Position doesnt exists!");
        }
    }
}
function deleteNodeAtPos() {
    let position = parseInt(prompt("Enter the position= "))
    if (position === 1) {
        console.log("Deleting Head");
        head = head.getNext()//set next element 
        head.setPrevious(null)
    } else {
        let targetNode = searchNode(position)
        if (targetNode !== -1) {
            let targetNextNode = targetNode.getNext()
            let targetPreviousNode = targetNode.getPrevious()
            targetPreviousNode.setNext(targetNextNode)//update previous-next to target-next
            if (targetNextNode == null) {
                tail = targetPreviousNode
            }
            else {
                targetNextNode.setPrevious(targetPreviousNode)//update next-previous to target-previous
            }
        }
        else {
            console.log("Position doesnt exists!");
        }
    }
}
function searchNodeByName() {
    let name = prompt("Enter the name= ")
    let listItem = head
    let pos = 1;
    while (listItem !== null) {
        if (listItem.name === name) {
            console.log(`${name} found at ${pos}`);
            return;
        }
        pos++;
        listItem = listItem.getNext()
    }
    console.log(`${name} not found in list`)
}
function traverseList() {
    console.log("******Linked List********");
    let listItem = head;
    console.log(`Head= ${head.name}`);
    let pos = 1;
    while (listItem != null) {
        let previous = listItem.getPrevious() ? listItem.getPrevious().name : "NOS"
        let next = listItem.getNext() ? listItem.getNext().name : "NOE"
        console.log(`listItem= ${pos++}`, previous, listItem.name, next);
        listItem = listItem.getNext()
    }
    console.log(`Tail= ${tail.name}`);
    console.log("******Linked List End********");
}
function showOperations() {
    console.log("\n******Operations********");
    console.log("1. Linkedlist Length");
    console.log("2. Create/Add node");
    console.log("3. Add node to position");
    console.log("4. Delete Node");
    console.log("5. Traverse Linkedlist");
    console.log("6. Search a Node");
    console.log("7. Exit");
}

function main() {
    let choice = 0
    while (choice != 7) {
        showOperations()
        choice = parseInt(prompt("Enter the choice"))
        switch (choice) {
            case 1:
                lengthList()
                break;
            case 2:
                addNode()
                break;
            case 3:
                addNodeToPos()
                break;
            case 4:
                deleteNodeAtPos()
                break;
            case 5:
                traverseList()
                break;
            case 6:
                searchNodeByName()
                break;
            case 7:
                console.log("End of program");
                break;
            default:
                console.log("Invalide choice");
                break;
        }
    }

}
main()