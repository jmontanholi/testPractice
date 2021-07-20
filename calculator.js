class Calculator {
  add(a, b){
    if (a == undefined) {
      return 'No value was given';
    }
    if (b == undefined) {
      return a + 1;
    }
    return a + b;
  }

  subtract(a, b){
    if (a == undefined) {
      return 'No value was given';
    }
    if (b == undefined) {
      return a - 1;
    }
    return a - b;
  }

  multiply(a, b){
    if (a == undefined) {
      return 'No value was given';
    }
    if (b == undefined) {
      return a * 2;
    }
    return a * b;
  }

  divide(a, b){
    if (a == undefined) {
      return 'No value was given';
    }
    if (b == undefined) {
      return a/2;
    }
    return a/b;
  }
}

module.exports = Calculator;