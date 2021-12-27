var arr = [41, 55, 76, 87, 88, 99, 123, 432, 546, 577, 688, 786];

function twoFind(arr, wantVal, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        document.writeln('SORRY: 找不到 ' + wantVal + ' ！');
        return;
    }
    var minIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[minIndex] > wantVal) {
        twoFind(arr, wantVal, leftIndex, minIndex - 1);
    } else if (arr[minIndex] < wantVal) {
        twoFind(arr, wantVal, minIndex + 1, rightIndex);
    } else {
        document.writeln('找到了 ' + wantVal + ' ,下表为' + minIndex);
    }
}
twoFind(arr, 9, 0, arr.length - 1);
