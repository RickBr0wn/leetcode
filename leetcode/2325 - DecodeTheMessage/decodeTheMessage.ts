// key: 'the quick brown fox jumps over the lazy dog'
// message: 'vkbs bs t suepuv'
// output: 'this is a secret'
const decodeTheMessage = (key: string, message: string): string => {
  const map = {}
  let charCode = 'a'.charCodeAt(0)

  for (let i = 0; i < key.length; i++) {
    const char = key[i]

    if (map[char] === undefined && char != ' ') {
      map[char] = String.fromCharCode(charCode)
      charCode += 1
    }
  }

  let output = ''

  for (let i = 0; i < message.length; i++) {
    const char = message[i]
    output += char === ' ' ? char : map[char]
  }

  return output
}

export default decodeTheMessage
