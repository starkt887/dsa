
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
// Remember in here we are just making sure that the smallest element comes are first position 
// at first it is assumed the min element is at first pos and than the internal loop checks 
// all the other values comparing it with current min index and if it finds new min than updates 
// the min index and than continue till it finds the min value index and at last swaps it, 
// than the internal loop starts from next position as first is already a smallest element
function selectionSort(arr) {
    let minId;
    for (let i = 0; i < arr.length; i++) {
        minId = i
        console.log(`Pass ${i}`);
        console.log(arr);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minId]) {
                minId = j
            }
        }
        swap(arr, i, minId)
        console.log(arr);
    }

    console.log(arr);

}
function main() {
    let arrMain = []//[64, 25, 12, 22, 11]//[10, 20, 30, 40, 50]
    arrMain = addNewArray()
    selectionSort(arrMain)
}
main()