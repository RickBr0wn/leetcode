import richestCustomerWealth from './richestCustomerWealth'

describe('richestCustomerWealth (fn)', () => {
  it('should pass all basic tests', () => {
    expect(
      richestCustomerWealth([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toBe(6)
    expect(
      richestCustomerWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toBe(10)
  })
})
