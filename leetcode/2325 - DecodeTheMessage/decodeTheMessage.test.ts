import decodeTheMessage from './decodeTheMessage'

describe('decodeTheMessage (fn)', () => {
  it('should pass all basic tests', () => {
    expect(decodeTheMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')).toBe('this is a secret')
    expect(decodeTheMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')).toBe(
      'the five boxing wizards jump quickly'
    )
  })
})
