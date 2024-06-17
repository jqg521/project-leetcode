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
/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
const findLUSlength = function (strs) {
  const n = strs.length
  let ans = -1
  for (let i = 0; i < n; ++i) {
    let check = true
    for (let j = 0; j < n; ++j) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false
        break
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length)
    }
  }
  return ans
}

const isSubseq = (s, t) => {
  let ptS = 0,
    ptT = 0
  while (ptS < s.length && ptT < t.length) {
    if (s[ptS] === t[ptT]) {
      ++ptS
    }
    ++ptT
  }
  return ptS === s.length
}

// @lc code=end
