import howManyNumbersAreSmallerThanTheCurrentNumberUsingMap from './howManyNumbersAreSmallerThanTheCurrentNumberUsingMap'

describe('howManyNumbersAreSmallerThanTheCurrentNumberUsingMap (fn)', () => {
  it('should pass all basic tests', () => {
    expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingMap([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3])
    // expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingMap([6, 5, 4, 8])).toEqual([2, 1, 0, 3])
    // expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingMap([7, 7, 7, 7])).toEqual([0, 0, 0, 0])
  })
})
