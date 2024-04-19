
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
// Remember it is based on exchange adjacent Elements, for every exteral loop pass
// internal loop will go from start to the new end by swapping the elements in asc or desc onder 
// in a basic way we are pushing the largest or smallest element to the last and than decreasing
// the boundary of internal loop as last element is already at its sorted position
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(`Psss ${i}`);
        console.log(arr);
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
        console.log(arr);
    }
    console.log("sorted array");
    console.log(arr);

}
function main() {
    let arrMain = [64, 25, 12, 22, 11]//[10,20,30,40,50]
    // arrMain = addNewArray()
    bubbleSort(arrMain)
}
main()