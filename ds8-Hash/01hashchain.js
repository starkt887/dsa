const prompt = require('prompt-sync')();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNext(node) {
        this.next = node
    }
    next() {
        return this.next
    }
}

class HashModel {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    createNode(element) {
        return new Node(element)

    }
    addNode(element) {
        let node = this.createNode(element)
        if (this.head === null) {
            this.head = node
            this.tail = node
            return
        }
        this.tail.setNext(node)
        this.tail = node
    }
    searchNode(element) {
        let listItem = this.head
        while (listItem !== null) {
            if (listItem.data == element) {
                console.log(`Element ${element} found`);
                return
            }
            listItem = listItem.next
        }
        console.log(`Element ${element} not found`)
    }
    showChain() {
        let listItem = this.head
        while (listItem !== null) {
            let next = listItem.next !== null ? listItem.next.data : "EOC";
            console.log(listItem.data, "=>", next);
            listItem = listItem.next
        }
    }
}

function hashFunction(element, size) {
    let modPos = element % size
    console.log(element, "==", modPos);
    return modPos

}

function main() {
    let inpArr = []//[8, 3, 13, 6, 4, 10, 26, 0, 11, 38]
    let size = 0
    let hashArray
    let choice = 0
    while (choice != -1) {
        choice = parseInt(prompt("Enter your choice= "))
        switch (choice) {
            case 1:
                inpArr = prompt("enter the array= ").split(",").map((num) => parseInt(num))
                console.log(inpArr);
                size = inpArr.length
                hashArray = new Array(size).fill(null)
                for (let i = 0; i < inpArr.length; i++) {
                    let position = hashFunction(inpArr[i], size)
                    if (hashArray[position] === null) {
                        hashArray[position] = new HashModel()
                    }
                    hashArray[position].addNode(inpArr[i])
                }

                console.log(hashArray);
                break;
            case 2:
                let que = parseInt(prompt("Enter the data to search= "))
                let position = hashFunction(que, size)
                if (hashArray[position] !== null) {
                    hashArray[position].searchNode(que)
                }
                else {
                    console.log("No Chain found");
                }
                break;
            case 3:
                for (let i = 0; i < hashArray.length; i++) {
                    console.log("Chain:", i);
                    if (hashArray[i] !== null)
                        hashArray[i].showChain()
                    else
                        console.log(hashArray[i]);
                    console.log("-------------");
                }

                break;
            case -1:
                console.log("End of program");
                break
            default:
                console.log("Invalid Choice!");
                break;
        }
    }
}
main()