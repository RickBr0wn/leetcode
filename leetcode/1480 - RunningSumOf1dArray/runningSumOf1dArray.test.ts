import runningSumOf1dArray from './runningSumOf1dArray'

describe('runningSumOf1dArray (fn)', () => {
  it('should pass all basic tests', () => {
    expect(runningSumOf1dArray([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    expect(runningSumOf1dArray([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5])
    expect(runningSumOf1dArray([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17])
  })
})
