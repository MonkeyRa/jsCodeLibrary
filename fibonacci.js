// 斐波那契数列
var fib = function (n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % (1e9 + 7)
    }
    return fibonacci[n]
  };