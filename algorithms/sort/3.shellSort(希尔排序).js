const generateRandomArray = require('../util/sortTestHelper.js')


let arr = generateRandomArray(15, 1, 120)

/*
方法说明：希尔排序
@param  array 待排序数组
*/

//希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。希尔排序是非稳定排序算法。

//排序思路：先将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是最高的，因此希尔排序在时间效率上比前两种方法有较大提高。


function shellSort(arr) {

    let gap = 1,
        len = arr.length,
        target, j

    //动态定义间隔序列
    while (gap < len / 5) {
        gap = gap * 5 + 1
    }

    console.time('shellSort')

    for (gap; gap > 0; gap = Math.floor(gap / 5)) {

        for (let i = gap; i < len; i++) {

            target = arr[i]

            for (j = i - gap; j >= 0; j -= gap) {

                if (arr[j] > target) {
                    arr[j + gap] = arr[j]
                } else {
                    break
                }
            }

            arr[j + gap] = target
        }
    }
    console.timeEnd('shellSort')

    return arr

}

console.log(shellSort(arr))
