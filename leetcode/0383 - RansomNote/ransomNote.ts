/**
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed by
 * using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 * Constraints:
 * 1 <= ransomNote.length, magazine.length <= 105
 * ransomNote and magazine consist of lowercase English letters.
 */
const ransomNote = (ransomNote: string, magazine: string): boolean => {
  const map = new Map<string, number | undefined>()
  // map = { a: 2, b: 1 } - loop through magazine (3rd test case)
  for (const letter of magazine) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1)
    } else {
      map.set(letter, 1)
    }
  }

  for (const letter of ransomNote) {
    let currentCount = 0
    if (map.has(letter)) currentCount = map.get(letter)
    if (currentCount === 0) return false
    map.set(letter, currentCount - 1)
  }

  return true
}

// Time Complexity: O(m)
// Space Complexity: O(k) - is the number of keys in the map
export default ransomNote
