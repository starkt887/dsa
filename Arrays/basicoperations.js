
const prompt = require('prompt-sync')();

function arrLength(arr) {
    console.log(arr.length);
}
function traversal(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function addNewArray() {
    let arr = prompt('Enter new array?').split(",");
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        showArray(arr)
        return arr
    }
}
function addNewElement(arr) {
    let element = parseInt(prompt('Enter new element= '))
    arr.push(element)
}
function findElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1
}
function searchElement(arr) {
    let element = parseInt(prompt('Enter element to search= '))
    let resultId = findElementIndex(arr, element)
    if (resultId !== -1) {
        console.log(`Element ${element} found at ${resultId} poistion`);
        return;
    }
    console.log("Element not found");
}
function deleteElement(arr) {
    let element = parseInt(prompt('Enter element to delete= '))
    let resultId = findElementIndex(arr, element)
    if (resultId !== -1) {
        for (let j = resultId; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1]
        }
        arr.length = arr.length - 1//update the lenght of array
        console.log(`Element ${element} found at ${resultId} & deleted`);
        showArray(arr)
        return;
    }
    console.log("Element not found");
}
function reverseArray(arr) {
    let i = 0; j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
        i++; j--;
    }
    showArray(arr)
}
function showArray(arr) {
    console.log(arr);
}

function showOperations() {
    console.log("1. Array length");
    console.log("2. Add new Array");
    console.log("3. Traverse new Array");
    console.log("4. Add element to Array");
    console.log("5. Remove element from Array");
    console.log("6. Search element");
    console.log("7. Reverse the array");
    console.log("8. Exit");
}

function main() {
    let arrMain = []
    let choice;
    while (choice != 8) {
        showOperations()
        choice = parseInt(prompt('Enter your choice= '));
        console.log(`Your choice is: ${choice}`);
        console.log()
        switch (choice) {
            case 1:
                arrLength(arrMain)
                break;
            case 2:
                arrMain = addNewArray()
                break;
            case 3:
                traversal(arrMain)
                break;
            case 4:
                addNewElement(arrMain)
                break;
            case 5:
                deleteElement(arrMain)
                break;
            case 6:
                searchElement(arrMain)
                break;
            case 7:
                reverseArray(arrMain)
                break;
            case 8:
                console.log("End of Program");
                break;
            default:
                console.log("Invalid! Choose a different choice!");
                break;
        }
    }

}
main()
