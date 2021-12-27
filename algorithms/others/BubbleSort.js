/**
 * 冒泡排序
 * @param arr
 * @param n
 */

/**
 * 如果有100个数的数组，仅前面10个无序，后面90个都已排好序且都大于前面10个数字，
 * 那么在第一趟遍历后，最后发生交换的位置必定小于10，
 * 且这个位置之后的数据必定已经有序了，记录下这位置，第二次只要从数组头部遍历到这个位置就可以了。
 */
function bubbleSort3(arr, n) {
    var j, k, mid;
    var flag;

    flag = n;
    while (flag > 0) {
        k = flag;
        flag = 0;
        for (j = 1; j < k; j++)
            if (arr[j - 1] > arr[j]) {
                mid = arr[j - 1];
                arr[j - 1] =  arr[j];
                arr[j] = mid;
                flag = j;
            }
    }
}
/**
 * 设置标志 flag, 一趟之内有一次交换则为 true, 一次都没有,说明已经有序, 有序则停止
 */
function bubbleSort2(arr, n) {
    var j, k, mid;
    var flag;

    k = n || arr.length;
    flag = true;
    while (flag) {
        flag = false;
        for (j = 1; j < k; j++)
            if (arr[j - 1] > arr[j]) {
                mid = arr[j - 1];
                arr[j - 1] =  arr[j];
                arr[j] = mid;
                flag = true;
            }
        k--;
    }
}

function bubbleSort1() {

}

function swap( arr1, arr2) {
    var i = arr1;
    arr1 = arr2;
    arr2 = arr1;
}