
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

function ternarySearch(arr, low, high, element) {
    while (low <= high) {
        let mid1 = Math.round(low + ((high - low) / 3))
        let mid2 = Math.round(high - ((high - low) / 3))

        console.log(mid1, mid2);
        if (arr[mid1] == element) {
            console.log(`Element ${element} found at position ${mid1}`);
            return;
        }
        if (arr[mid2] == element) {
            console.log(`Element ${element} found at position ${mid2}`);
            return;
        }

        if (element < arr[mid1]) {
            high = mid1 - 1
        }
        else if (element > arr[mid2]) {
            low = mid2 + 1
        }
        else {
            low = mid1 + 1
            high = mid2 - 1
        }
    }
    console.log("Element not found");

}
function main() {
    let arrMain = []
    arrMain = [10, 20, 30, 40, 50, 60, 70, 80, 90]// addNewArray()
    console.log(arrMain);
    let element = parseInt(prompt('Enter new element= '))
    ternarySearch(arrMain, 0, arrMain.length - 1, element)
}
main()