
const prompt = require('prompt-sync')();
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
function showArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }

}

// Remember it is based on exchange adjacent Elements, for every exteral loop pass
// internal loop will go from start to the new end by swapping the elements in asc or desc onder 
// in a basic way we are pushing the largest or smallest element to the last and than decreasing
// the boundary of internal loop as last element is already at its sorted position
function bubbleSortByRows(arr) {
    let rows = arr.length;
    let cols = arr[0].length

    for (let row = 0; row < rows; row++) {
        for (let i = 0; i < cols; i++) {
            console.log(`Psss ${i}`);
            console.log(arr);
            for (let j = 0; j < cols - i - 1; j++) {

                if (arr[row][j] > arr[row][j + 1]) {
                    [arr[row][j], arr[row][j + 1]] = [arr[row][j + 1], arr[row][j]]
                }
            }
            console.log(arr);
        }
    }
    console.log("sorted array");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}

function bubbleSortByCols(arr) {
    let rows = arr.length;
    let cols = arr[0].length

    for (let col = 0; col < cols; col++) {
        for (let i = 0; i < rows; i++) {
            console.log(`Psss ${i}`);
            // console.log(arr);
            for (let j = 0; j < rows - i - 1; j++) {
                console.log(arr[j][col], arr[j + 1][col]);
                if (arr[j][col] > arr[j + 1][col]) {
                    [arr[j][col], arr[j + 1][col]] = [arr[j + 1][col], arr[j][col]]
                }
            }
            console.log(arr);
        }
    }
    console.log("sorted array");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function strictSort(arr) {
    let arrFlat = arr.flat(1)
    for (let i = 0; i < arrFlat.length; i++) {
        for (let j = 0; j < arrFlat.length - i - 1; j++) {
            if (arrFlat[j] > arrFlat[j + 1]) {
                [arrFlat[j], arrFlat[j + 1]] = [arrFlat[j + 1], arrFlat[j]]
            }
        }
    }
    console.log(arrFlat);
    let rows = arr.length;
    let cols = arr[0].length;
    let k = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr[i][j] = arrFlat[k++]
        }
    }

    for (let i = 0; i < rows; i++) {
        console.log(arr[i]);
    }
}
function main() {
    let arrMain = [[34, 67, 23], [21, 45, 76], [97, 85, 23]]//[10,20,30,40,50]
    // arrMain = addNewArray()
    // bubbleSortByRows(arrMain)
    // bubbleSortByCols(arrMain)
    strictSort(arrMain)
}
main()