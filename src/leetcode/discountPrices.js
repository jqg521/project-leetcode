/*
 * @lc app=leetcode.cn id=2288 lang=javascript
 *
 * [2288] 价格减免
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
const discountPrices = function (sentence, discount) {
  const arr = sentence.split(' ')
  arr.forEach((item, index) => {
    if (isValidDollarAmount(item)) {
      const originalNumber = Number(item.replace('$', ''))

      const discountedNumber =
        discount == 100
          ? Number(0.0).toFixed(2)
          : (originalNumber - (originalNumber * discount) / 100).toFixed(2)

      arr[index] = '$' + discountedNumber
    }
  })
  return arr.join(' ')
}
function isValidDollarAmount(str) {
  // 正则表达式：美元符号$，后面可以有空格，接着是一个或多个数字，
  // 可选地后面跟着一个小数点和一个或多个数字，但不能有负号或其他非数字字符
  const regex = /^\d+$/
  return regex.test(str)
}
// @lc code=end
