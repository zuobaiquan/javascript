//生成N个一定范围的随机数组

module.exports = function generateRandomArray(n, start, end) {
    let arr = []
    if (start > end) {
        console.log('输入有误，请重新输入！')
        return
    }
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * (end - start) + start)
    }

    return arr

}



//生成N个几乎是有序的随机数组

function generateNealyOrderArray(n, swapTimes) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }

    for (let i = 0; i < swapTimes; i++) {

        let posx = Math.floor(Math.random() * n)
        let posy = Math.floor(Math.random() * n)

        arr[posx] = arr[posx] ^ arr[posy]
        arr[posy] = arr[posx] ^ arr[posy]
        arr[posx] = arr[posx] ^ arr[posy]

    }

    return arr

}
