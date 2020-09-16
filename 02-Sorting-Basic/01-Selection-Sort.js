// 选择排序
function selectionSort(arr){
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) {
            if (arr[i] > arr[j]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const a = selectionSort([5, 7, 9, 100, 2])
console.log(a)
