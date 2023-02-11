import guessNumberHigherOrLower from './guessNumberHigherOrLower'

describe('guessNumberHigherOrLower (fn)', () => {
  it('should pass all basic tests', () => {
    expect(guessNumberHigherOrLower(10)).toBe(6)
    // expect(guessNumberHigherOrLower(1)).toBe(1)
    // expect(guessNumberHigherOrLower(2)).toBe(1)
    // expect(guessNumberHigherOrLower(2)).toBe(2)
  })
})
