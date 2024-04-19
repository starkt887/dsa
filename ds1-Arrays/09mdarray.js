// Multi-dimensional array operations


const prompt = require('prompt-sync')();

function arrLength(arr) {
    console.log(arr.flat(1).length);
}
function traversal(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function addNewArray() {
    let rows = parseInt(prompt('Enter no of rows= '))
    let cols = parseInt(prompt('Enter no of cols= '))
    let arrMain = []

    for (let i = 0; i < rows; i++) {
        let arr = []
        for (let j = 0; j < cols; j++) {
            arr.push(parseInt(prompt(`R-${i}, C-${j} = `)));
        }
        arrMain.push(arr)
    }

    showArray(arrMain)
    return arrMain

}
function addSingleRow(arr) {

    let rows = arr.length
    let cols
    if (rows) {
        cols = arr[0].length
    }
    if (rows && cols) {
        let tempArr = []
        for (let j = 0; j < cols; j++) {
            tempArr.push(parseInt(prompt(`R-${rows + 1}, C-${j} = `)));
        }
        arr.push(tempArr)
    }
    else {
        console.log("Create new array first to add new row");
    }

}
function findElementIndex(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == element) {
                return `${i}-${j}`;
            }
        }
    }
    return -1
}
function searchElement(arr) {
    let element = parseInt(prompt('Enter element to search= '))
    let resultId = findElementIndex(arr, element)
    if (resultId !== -1) {
        let positionsRC = resultId.split('-')
        console.log(`Element ${element} found at ${positionsRC[0]} Row, ${positionsRC[1]} Col poistion`);
        return;
    }
    console.log("Element not found");
}
function deleteElement(arr) {
    let element = parseInt(prompt('Enter element to delete= '))
    let resultId = findElementIndex(arr, element)
    if (resultId !== -1) {
        let row = resultId.split('-')
        for (let j = resultId; j < arr[row].length - 1; j++) {
            arr[row][j] = arr[row][j + 1]
        }
        arr[row].length = arr[row].length - 1//update the lenght of array
        console.log(`Element ${element} found & deleted`);
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
    console.log("4. Add new Row to Array");
    console.log("5. Remove element from Array");
    console.log("6. Search element");
    console.log("7. Reverse the array");
    console.log("8. Exit");
}

function main() {
    let arrMain = [];
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
                addSingleRow(arrMain)
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
