import ransomNote from './ransomNote'

describe('ransomNote (fn)', () => {
  it('should pass all basic tests', () => {
    expect(ransomNote('a', 'b')).toBe(false)
    expect(ransomNote('aa', 'ab')).toBe(false)
    expect(ransomNote('aa', 'aab')).toBe(true)
  })
})
