/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// for first test case only
const guess = (num: number) => {
  switch (num) {
    case 7:
    case 8:
    case 9:
    case 10:
      return -1
    case 6:
      return 0
    default:
      return 1
  }
}

const guessNumberHigherOrLower = (num: number, start = 1, end = num): number => {
  if (guess(start) === 0) {
    return start
  }

  const middle = start + Math.floor((end - start) / 2)

  if (guess(middle) === 0) {
    return middle
  } else if (guess(middle) === -1) {
    return guessNumberHigherOrLower(num, start, middle)
  } else if (guess(middle) === 1) {
    return guessNumberHigherOrLower(num, middle + 1, end)
  }
}

export default guessNumberHigherOrLower
