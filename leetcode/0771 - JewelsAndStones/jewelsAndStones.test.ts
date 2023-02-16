import numJewelsInStones from './jewelsAndStones'

describe('numJewelsInStones (fn)', () => {
  it('should pass all basic tests', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3)
    expect(numJewelsInStones('z', 'ZZ')).toBe(0)
  })
})
