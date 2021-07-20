const stringLength = (string) => {
  if (string !== undefined) {
    if (string.length < 1) {
      return 'The string is too short'
    } else if (string.length > 10) {
      return 'The string is too long'
    } 
    return string.length;
  }
  return 'You must pass a string'
}

module.exports = stringLength;
