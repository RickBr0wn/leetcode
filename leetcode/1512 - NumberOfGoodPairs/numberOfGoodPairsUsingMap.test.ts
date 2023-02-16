import numberOfGoodPairsUsingMap from './numberOfGoodPairsUsingMap'

describe('numberOfGoodPairsUsingMap (fn)', () => {
  it('should pass all basic tests', () => {
    expect(numberOfGoodPairsUsingMap([1, 2, 3, 1, 1, 3])).toBe(4)
    expect(numberOfGoodPairsUsingMap([1, 1, 1, 1])).toBe(6)
    expect(numberOfGoodPairsUsingMap([1, 2, 3])).toBe(0)
  })
})
