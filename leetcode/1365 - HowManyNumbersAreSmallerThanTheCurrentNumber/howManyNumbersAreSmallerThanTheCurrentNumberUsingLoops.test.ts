import howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops from './howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops'

describe('howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops (fn)', () => {
  it('should pass all basic tests', () => {
    expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3])
    expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops([6, 5, 4, 8])).toEqual([2, 1, 0, 3])
    expect(howManyNumbersAreSmallerThanTheCurrentNumberUsingLoops([7, 7, 7, 7])).toEqual([0, 0, 0, 0])
  })
})
