var subarraySum = function(nums, k) {
  const n = nums.length
  // if (n === 1) return nums[0] === k ? 1 : 0
  const map = new Map()
  map.set(0,1)
  let pre = 0
  let count = 0
  for (let i = 0; i < n; i++) {
      pre += nums[i]
      if (map.has(pre - k)) {
          count += map.get(pre - k)
      }
      if (map.has(pre)) {
          map.set(pre, map.get(pre) + 1)
      } else {
          map.set(pre, 1)
      }
  }
  return count
};

const nums = [2,1,3,2,1,1,1]
const k = 3
console.log(subarraySum(nums, k))