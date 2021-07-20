const reverseString = (string) => {
    if (string !== undefined) {
      return string.split('').reverse().join('');
    }
    return 'You must pass a string'
}

module.exports = reverseString;