const generateRandomArray = require('../util/sortTestHelper.js')

let arr = generateRandomArray(10, 10, 100)

/*
方法说明：插入排序
@param  array 待排序数组
*/

//排序思路：每次将一个待排序的元素与已排序的元素进行逐一比较，直到找到合适的位置按大小插入。


//原始版
function insertionSort(arr) {

    console.time('t')

    for (let i = 1, len = arr.length; i < len; i++) {

        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {

            let temp
            temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }

    console.timeEnd('t')

    return arr
}


//优化版，每次比较不再交换，而是移动位置来优化提高性能
function improveInsertSort(arr) {

    console.time('t')

    for (let i = 1, len = arr.length; i < len; i++) {

        let target = arr[i] //先把目标元素复制一份，保存起来，不去贸然交换位置

        let j //j就是target最后应该插入的位置

        for (j = i; j > 0; j--) {

            if (arr[j - 1] > target) { //如果目标元素比前面一个元素小，那么这个元素不应该放在当前位置

                arr[j] = arr[j - 1] //把目标元素前面的一个数字向后挪一个位置

            } else {

                break

            }

        }

        arr[j] = target

    }

    console.timeEnd('t')

    return arr

}

console.log(improveInsertSort(arr))
