 // 判断数组中最长连续递增序列
var findLengthOfLCIS = function (nums) {
    let count = 0, counts = [], len = nums.length;
    if (len < 1) {
      return 0
    } else {
      for (let i = 0; i < len; i++) {
        if (nums[i] < nums[i + 1]) {
          count++
        } else {
          counts.push(count)
          count = 0
        }
      }
      // 返回递增长度
      return Math.max(...counts) + 1
    }
  };