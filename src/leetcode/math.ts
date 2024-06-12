/*
 * @lc app=leetcode.cn id=2806 lang=javascript
 *
 * [2806] 取整购买后的账户余额
 */

// @lc code=start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
const accountBalanceAfterPurchase = function (purchaseAmount) {
  const round = Math.mound(purchaseAmount / 10) * 10
  const round2 = Math.floor(purchaseAmount / 10) * 10
  if (round - purchaseAmount >= round2 - purchaseAmount) {
    return 100 - round
  } else {
    return 100 - round2
  }
}
// @lc code=end
