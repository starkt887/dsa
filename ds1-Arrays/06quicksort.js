
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
function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}
//pivot is at end
function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j)
            i++;
        }
    }
    swap(arr, i , high)

    return i ; //new pivot
}
//pivot is at first
function partition2(arr, low, high) {
    let pivot = arr[low]
    let i = high ;
    for (let j = high; j >= low + 1; j--) {
        if (arr[j] > pivot) {
            swap(arr, i, j)
            i--;
        }
    }
    swap(arr, i, low)

    return i ; //new pivot
}

function quickSort(arr, low, high) {

    if (low < high) {
        let pi = partition2(arr, low, high)
        console.log(pi);
        quickSort(arr, low, pi - 1)
        console.log("Left side");
        console.log(arr);
        quickSort(arr, pi + 1, high)
        console.log("Right side");
        console.log(arr);
    }



}
function main() {
    let arrMain = [10, 80, 30, 90, 40]//[64, 25, 12, 22, 11]//[10, 20, 30, 40, 50]
    // arrMain = addNewArray()
    quickSort(arrMain, 0, arrMain.length - 1)
    console.log("Sorted arr:");
    console.log(arrMain);
}
main()