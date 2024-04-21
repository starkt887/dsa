
const prompt = require('prompt-sync')();

function arrLength(arr) {
    console.log(arr.length);
}
function traversal(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
function addNewArray() {
    let rows = parseInt(prompt('Enter no of Rows= '))
    let cols = parseInt(prompt('Enter no of Cols= '))
    let arr = []
    for (let i = 0; i < rows; i++) {
        let arrCols = prompt(`Enter (${cols}) in Row no.${i}= `).split(",");
        if (arrCols) {
            arrCols = arrCols.map((col) => parseInt(col))
            arr.push(arrCols)
        }
    }
    showArray(arr)
    return arr
}

function addNewRow(arr) {
    let cols = arr[0].length
    let arrCols = prompt(`Enter (${cols}) in Row no.${arr.length}= `).split(",");
    if (arrCols) {
        arrCols = arrCols.map((col) => parseInt(col))
        arr.push(arrCols)
    }
    showArray(arr)
}
function findElementIndex(arr, element) {
    let rows = arr.length;
    let cols = arr[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] == element) {
                return [i, j];
            }
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
function deleteRow(arr) {
    let id = parseInt(prompt('Enter Row.id to delete= '))
    if (arr[id]) {
        for (let i = id; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr.length = arr.length - 1//update the lenght of array
        console.log(`Row ${id} found & deleted`);
        showArray(arr)
        return;
    }
    console.log("Element not found");
}
function transposeArray(arr) {
    let rows = arr.length;
    let cols = arr[0].length;

    let arr2 = Array(rows)
    for (let i = 0; i < rows; i++) {
           arr2[i]=Array(rows).fill(0)
    }
    console.log(arr2);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr2[j][i] = arr[i][j]
        }
    }

    showArray(arr2)
}
function showArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }

}

function showOperations() {
    console.log("1. matrix length");
    console.log("2. Add new matrix");
    console.log("3. Traverse new matrix");
    console.log("4. Add Row to matrix");
    console.log("5. Remove Row from matrix");
    console.log("6. Search element");
    console.log("7. Transpose the matrix");
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
                addNewRow(arrMain)
                break;
            case 5:
                deleteRow(arrMain)
                break;
            case 6:
                searchElement(arrMain)
                break;
            case 7:
                transposeArray(arrMain)
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
