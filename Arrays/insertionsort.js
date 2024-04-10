
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

//Remeber always we are going from left to right sorting all the elements in left side
// and adding the elements from right side in its appropriate sorted position on left side
function insertionSort(arr) {
//my creation
    for (let i = 1; i < arr.length; i++) {
        console.log(`Pass ${i}`);
        console.log(arr);
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
        console.log(arr);
    }
    console.log("Sorted Array:");
    console.log(arr);

}
function main() {
    let arrMain = //[64, 25, 12, 22, 11]//[10, 20, 30, 40, 50]
    arrMain = addNewArray()
    insertionSort(arrMain)
}
main()