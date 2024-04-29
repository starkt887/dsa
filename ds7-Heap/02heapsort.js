const prompt = require('prompt-sync')();

function size(arr) {
    console.log(`Heap size:${arr.length}`);
}
function parent(i) {
    return Math.floor(((i - 1) / 2))
}
function lChild(i) {
    return ((2 * i) + 1)
}
function rChild(i) {
    return ((2 * i) + 2)
}
function heapSortDesc(arr) {
    let heap = new Array(arr.length)
    let k = 0;
    while (k < arr.length) {
        heap[k] = arr[k]
        let i = k;
        while (i !== 0 && heap[parent(i)] < heap[i]) {
            [heap[parent(i)], heap[i]] = [heap[i], heap[parent(i)]]
            i = parent(i)
        }
        k++;
    }
    showHeap(heap)

    let heapSize = heap.length
    let sortedArr = []
    while (heapSize >= 0) {
        let root
        if (heapSize === 1) {
            root = heap[0]
            --heapSize
            sortedArr.push(root)
            break
        }
        root = heap[0]
        heap[0] = heap[--heapSize]
        showHeap(heap)
        let i = 0
        let lchild = lChild(i)
        let rchild = rChild(i)
        let largest = i;
        while (lchild < heapSize && rchild < heapSize) {
            console.log(largest, lchild, rchild);
            console.log(heap[largest], heap[lchild], heap[rchild]);
            if (lchild < heapSize && heap[i] < heap[lchild]) {
                largest = lchild
            }
            if (rchild < heapSize && heap[largest] < heap[rchild]) {
                largest = rchild
            }
            if (largest !== i) {
                [heap[largest], heap[i]] = [heap[i], heap[largest]]
                i = largest
                lchild = lChild(i)
                rchild = rChild(i)
            }
        }
        sortedArr.push(root)
    }

    showHeap(heap)
    console.log("Sorted Array in Descending:");
    console.log(sortedArr);
}
function heapSortAsc(arr) {
    let heap = new Array(arr.length)
    let k = 0;
    while (k < arr.length) {
        heap[k] = arr[k]
        let i = k;
        while (i !== 0 && heap[parent(i)] > heap[i]) {
            [heap[parent(i)], heap[i]] = [heap[i], heap[parent(i)]]
            i = parent(i)
        }
        k++;
    }
    showHeap(heap)

    let heapSize = heap.length
    let sortedArr = []
    while (heapSize >= 0) {
        let root
        if (heapSize === 1) {
            root = heap[0]
            --heapSize
            sortedArr.push(root)
            break
        }
        root = heap[0]
        heap[0] = heap[--heapSize]
        showHeap(heap)
        let i = 0
        let lchild = lChild(i)
        let rchild = rChild(i)
        let min = i;
        while (lchild < heapSize && rchild < heapSize) {
            console.log(min, lchild, rchild);
            console.log(heap[min], heap[lchild], heap[rchild]);
            if (lchild < heapSize && heap[i] > heap[lchild]) {
                min = lchild
            }
            if (rchild < heapSize && heap[min] > heap[rchild]) {
                min = rchild
            }
            if (min !== i) {
                [heap[min], heap[i]] = [heap[i], heap[min]]
                i = min
                lchild = lChild(i)
                rchild = rChild(i)
            }
        }
        sortedArr.push(root)
    }

    showHeap(heap)
    console.log("Sorted Array in Ascending:");
    console.log(sortedArr);
}

function showHeap(arr) {
    console.log(arr);

}




function main() {
    
    // let inparr=[10, 20, 30, 40, 50, 60, 70]
    // heapSortDesc(inparr)
    // let inparr = [70, 60, 50, 40, 30, 20, 10]
    // heapSortAsc(inparr)
}
main();