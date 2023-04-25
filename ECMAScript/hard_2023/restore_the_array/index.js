/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


var numberOfArrays = function(s, k) {
  const mod = 1000000007;
  const n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (s[i - 1] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1];
    }
    for (let j = i - 2; j >= 0 && i - j <= 9; j--) {
      let num = parseInt(s.slice(j, i));
      if (num <= k && s[j] !== "0") {
        dp[i] = (dp[i] + dp[j]) % mod;
      }
    }
  }

  return dp[n];
};

module.exports = numberOfArrays;