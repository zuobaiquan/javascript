const generateRandomArray = require('../util/sortTestHelper.js')

let arr = generateRandomArray(30000, 10, 100)

/*
方法说明：选择排序
@param  arr 待排序数组
*/

//基本原理:遍历找到最小的索引值,然后与当前元素进行交换

function selectionSort(arr) {

    console.time('t')

    for (let i = 0, len = arr.length; i < len; i++) {

        let minIndex = i

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }

        }

        /*
        第一种交换两个数字的方法,不引入临时变量,缺陷就是容易越界
        if (minIndex !== i) { //如果最小的数字就排在首位就不交换位置,由于数字是引用,index值一样,交换会出问题
            arr[i] = arr[i] + arr[minIndex]

            arr[minIndex] = arr[i] - arr[minIndex]

            arr[i] = arr[i] - arr[minIndex]
        }
        */


        /*
        第二种交换两个数字的方法,引入一个临时变量,缺陷就是引入了临时变量
        let temp
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        */


        //第三种交换两个数字的方法,这里逼格高一点,采用位操作,还好我学过C语言,缺陷就是不能处理浮点数
        if (minIndex !== i) {
            arr[i] = arr[i] ^ arr[minIndex]
            arr[minIndex] = arr[i] ^ arr[minIndex]
            arr[i] = arr[i] ^ arr[minIndex]
        }

    }

    console.timeEnd('t')


    return arr
}


console.log(selectionSort(arr))
