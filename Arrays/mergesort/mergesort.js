
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

function merge(arr, low, mid, high) {

    let len1 = mid - low + 1
    let len2 = high - mid
    // create new temp array for storing left and right list
    let left = new Array(len1)
    let right = new Array(len2)
    // copy the left part in left and right part in right
    for (let i = 0; i < len1; i++) {
        left[i] = arr[low + i];
    }
    for (let j = 0; j < len2; j++) {
        right[j] = arr[mid + 1 + j];
    }
    // now compare left with right and accordingly put it in main list
    let i = 0; j = 0;
    let k = low;
    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++]
        }
        else {
            arr[k++] = right[j++]
        }
    }
    //    put all the remaining elements either in left or in right in to the main list
    while (i < len1) {
        arr[k++] = left[i++]
    }
    while (j < len2) {
        arr[k++] = right[j++]
    }
}

function mergeSort(arr, low, high) {
    console.log(arr, low, high);
    if (low >= high) {
        return;
    }
    let mid = low + parseInt((high - low) / 2)
    console.log(`Mid= ${mid}`);
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high)


}
function main() {
    let arrMain = [38, 27, 43, 10]//[64, 25, 12, 22, 11]//[10, 20, 30, 40, 50]
    // arrMain = addNewArray()
    mergeSort(arrMain, 0, arrMain.length - 1)
    console.log("Sorted arr:");
    console.log(arrMain);
}
main()