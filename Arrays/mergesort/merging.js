
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

function mergeTwoLists(arr1, arr2) {

    let len1 = arr1.length;
    let len2 = arr2.length;
    let newArr = new Array(len1 + len2)
    let i = 0, j = 0, k = 0
    console.log("Good till here");
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            newArr[k++] = arr1[i++]
        }
        else {
            newArr[k++] = arr2[j++]
        }
    }
    console.log("Good till here2");
    // if there are any remaining elements
    while (i < len1) {
        newArr[k++] = arr1[i++]
    }
    while (j < len2) {
        newArr[k++] = arr2[j++]
    }
    console.log(newArr);
}


function main() {
    let arr1 = [10, 30, 80, 150, 175]
    let arr2 = [20, 25, 75, 280, 1000, 1550]
    // arr1 = addNewArray()
    // arr2 = addNewArray()
    mergeTwoLists(arr1, arr2)
}
main()