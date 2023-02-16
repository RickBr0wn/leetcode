import numberOfGoodPairsUsingLoops from './numberOfGoodPairsUsingLoops'

describe('numberOfGoodPairsUsingLoops (fn)', () => {
  it('should pass all basic tests', () => {
    expect(numberOfGoodPairsUsingLoops([1, 2, 3, 1, 1, 3])).toBe(4)
    expect(numberOfGoodPairsUsingLoops([1, 1, 1, 1])).toBe(6)
    expect(numberOfGoodPairsUsingLoops([1, 2, 3])).toBe(0)
  })
})
