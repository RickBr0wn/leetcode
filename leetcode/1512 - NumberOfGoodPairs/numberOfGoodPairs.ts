/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
const numIdenticalPairs = (nums: number[]): number => {
  const map = new Map<number, number>()
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1)
  }
  console.log(map)
  let res = 0
  for (const [key] of map) {
    res += (map.get(key) * (map.get(key) - 1)) / 2
  }
  return res
}

export default numIdenticalPairs
