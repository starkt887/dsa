
const prompt = require('prompt-sync')();
function addNewArray() {
    let arr = prompt('Enter new array= ').split(",");
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        console.log(arr);
        return arr
    }
}

function binarySearch(arr, low, high, element) {
    while (low <= high) {
        let mid = Math.round((low + high) / 2)
        console.log(mid);
        if (arr[mid] == element) {
            console.log(`Element ${element} found at position ${mid}`);
            return;
        }
        if (element > arr[mid]) {
            low = mid + 1;
        }
        else if (element < arr[mid]) {
            high = mid - 1;
        }

    }
    console.log("Element not found");

}
function main() {
    let arrMain = []
    arrMain = addNewArray()
    console.log(arrMain);
    let element = parseInt(prompt('Enter new element= '))
    binarySearch(arrMain, 0, arrMain.length - 1, element)
}
main()