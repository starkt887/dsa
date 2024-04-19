const prompt = require('prompt-sync')();

let head = null;
let tail = null;
let id = 0;
class User {
    constructor(name) {
        this.id = ++id
        this.name = name
        this.next = null
    }
    setNext(nextNode) {
        this.next = nextNode
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
    tail.next = newNode;//set next to new node
    tail = newNode;//update the tail to current node
    console.log(head, tail);
}
function searchNode(targetPos) {
    let listItem = head
    let pos = 1
    while (listItem != null) {
        if (pos === (targetPos - 1)) {//search for the previous position
            return listItem
        }
        listItem = listItem.next
        pos++;
    }
    return -1
}
function addNodeToPos() {
    let position = prompt("Enter the position= ")
    if (position == 1) {
        console.log("Setting Head");
        let newNode = createNode()
        newNode.next = head;//set current head as next to newNode
        head = newNode;//update head to newNode
    } else {
        let prevNode = searchNode(position)
        if (prevNode !== -1 && prevNode.next !== null) {
            let newNode = createNode()
            newNode.next = prevNode.next;//set new node next to previous nodes next
            prevNode.next = newNode//set previous next to new node
        }
        else {
            console.log("Position doesnt exists!");
        }
    }
}
function deleteNodeAtPos() {
    let position = prompt("Enter the position= ")
    if (position == 1) {
        console.log("Deleting Head");
        head = head.next//set next element 
    } else {
        let prevNode = searchNode(position)
        if (prevNode !== -1 && prevNode.next !== null) {
            let targetNode = prevNode.next;//get the targetNode
            prevNode.next = targetNode.next;//set the next of targetNode to the next of its prevNode
            if (prevNode.next == null) {//if last node is deleted
                tail = prevNode
            }
        }
        else {
            console.log("Position doesnt exists!");
        }
    }
}
function searchNode() {
    let name = prompt("Enter the name= ")
    let listItem = head
    let pos = 1;
    while (listItem !== null) {
        if (listItem.name === name) {
            console.log(`${name} found at ${pos}`);
            return;
        }
        pos++;
        listItem = listItem.next
    }
    console.log(`${name} not found in list`)
}
function traverseList() {
    console.log("******Linked List********");
    let listItem = head;
    console.log(`Head= ${head.name}`);
    let pos = 1;
    while (listItem != null) {
        console.log(`listItem= ${pos++}`, listItem.name);
        listItem = listItem.next
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
                searchNode()
                break;
            case 7:
                console.log("Invalide choice");
                break;
            default:
                break;
        }
    }

}
main()