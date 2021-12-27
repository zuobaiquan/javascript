/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var roman = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    num += '';
    num = num.split('').reverse();
    var n = '';
    for (var i = num.length - 1; i >= 0; i--) {
        n += roman[i][+ num[i]];
    }
    return n;
};
