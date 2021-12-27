/**
 * 检测数组是否排序成功
 */

function isSorted(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}
