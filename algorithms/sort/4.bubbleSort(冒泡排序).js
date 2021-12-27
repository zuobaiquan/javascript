const generateRandomArray = require('../util/sortTestHelper.js')

let arr = generateRandomArray(20000, 1, 12000)

/*
方法说明：冒泡排序
@param  array 待排序数组
*/

//排序思路：从最下面的元素开始，对相邻的元素进行比较，经过交换使得较小的元素在较大的元素之上，经过对每个元素的两两比较，最后最小的元素被移到前面的位置。


//原始版
function bubbleSort(arr) {
    let i, len, j, temp
    console.time('bubbleSort')
    for (i = 0, len = arr.length; i < len - 1; i++) { // 有N个元素只需比较N-1次
        for (j = len - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
        }
    }
    console.timeEnd('bubbleSort')
    return arr
}


//优化版,对前面已经是有序的就不用排了
function improveBubbleSort1(arr) { // 如果前面的已经排好序，那么之后的就不用进行交换和比较了
    let i, len, j, flag, temp
    console.time('improveBubbleSort1')
    for (i = 0, len = arr.length; i < len - 1; i++) { //有N个元素只需比较N-1次
        flag = false
        for (j = len - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                flag = true // 如果交换了则变为true
            }
        }
        if (flag == false) {
            break
        }
    }
    console.timeEnd('improveBubbleSort1')
    return arr
}


//再次优化版，记录每次交换的位置，从交换位置的地方再次比较，比上面的更优雅先进
function improveBubbleSort2(arr) {
    let i, pos, j, temp //初始时,最后位置保持不变
    i = arr.length - 1
    console.time('improveBubbleSort2')
    while (i > 0) {
        pos = 0 //每趟开始时,无记录交换
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j //记录交换的位置
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        i = pos //为下一趟排序作准备
    }
    console.timeEnd('improveBubbleSort2')
    return arr
}


//究极版，两头齐头并进,最终汇合。
function improveBubbleSort3(arr) {
    let start = 0,
        end = arr.length - 1,
        temp, i
    console.time('improveBubbleSort3')
    while (start < end) {
        for (i = start; i < end; i++) {
            //正向冒泡,找到最大者
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        --end
        //反向冒泡,找到最小者
        for (i = end; i > start; i--) {
            if (arr[i] < arr[i - 1]) {
                temp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = temp
            }
        }
        ++start
    }
    console.timeEnd('improveBubbleSort3')
    return arr
}

function improveBubbleSort4(arr) {

}


let arr0 = JSON.parse(JSON.stringify(arr))
let arr1 = JSON.parse(JSON.stringify(arr))
let arr2 = JSON.parse(JSON.stringify(arr))
let arr3 = JSON.parse(JSON.stringify(arr))

bubbleSort(arr0)
improveBubbleSort1(arr1)
improveBubbleSort2(arr2)
improveBubbleSort3(arr3)
