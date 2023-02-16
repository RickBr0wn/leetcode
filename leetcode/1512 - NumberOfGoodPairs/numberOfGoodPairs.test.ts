import numIdenticalPairs from './numberOfGoodPairs'

describe('numIdenticalPairs (fn)', () => {
  it('should pass all basic tests', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4)
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6)
    expect(numIdenticalPairs([1, 2, 3])).toBe(0)
  })
})
