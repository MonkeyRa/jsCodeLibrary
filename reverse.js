// 整数反转
var reverse = function (x) {
    let num
    if (x > 0) {
        num = Number(String(x).split('').reverse().join(''))
    } else {
        num = -Number(String(Math.abs(x)).split('').reverse().join(''))
    }
    if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) {
        return 0
    } else {
        return num
    }
}