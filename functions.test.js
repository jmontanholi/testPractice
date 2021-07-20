const stringLength = require("./stringLength");
const reverseString = require("./reverseString");
const Calculator = require("./calculator");
const capitalize = require("./capitalize");

describe('My stringLength function', () => {
  it('returns the right length of the string', () => {
    expect(stringLength('fives')).toBe(5);
  });
  
  it('returns an error if the string is too short', () => {
    expect(stringLength('')).toBe('The string is too short');
  });
  
  it('returns an error if the string is too long', () => {
    expect(stringLength('This is a big string')).toBe('The string is too long');
  });
  
  it('returns an error if there is no string', () => {
    expect(stringLength()).toBe('You must pass a string');
  });
});

describe('My reverseString function', () => {
  it('Returns the input string reversed', () => {
    expect(reverseString('abc')).toBe('cba');
  });
  
  it('returns an error if there is no string', () => {
    expect(reverseString()).toBe('You must pass a string');
  });  
});

const newCalculator = new Calculator();

describe('My calculator add method', () => {
  it('Returns both input numbers summed', () => {
    expect(newCalculator.add(2,5)).toBe(7);
  });

  it('Returns both input numbers summed', () => {
    expect(newCalculator.add(2,-2)).toBe(0);
  });

  it('Returns input plus one if no second input is given', () => {
    expect(newCalculator.add(2)).toBe(3);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.add()).toBe('No value was given');
  })
});

describe('My calculator subtract method', () => {
  it('Returns the first input minus the second one', () => {
    expect(newCalculator.subtract(3, 1)).toBe(2);
  });

  it('Returns the first input minus the second one', () => {
    expect(newCalculator.subtract(1, 3)).toBe(-2);
  });

  it('Returns input minus one if no second input is given', () => {
    expect(newCalculator.subtract(2)).toBe(1);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.subtract()).toBe('No value was given');
  })
});

describe('My calculator multiply method', () => {
  it('Returns both inputs multiplied', () => {
    expect(newCalculator.multiply(2,5)).toBe(10);
  });

  it('Returns both inputs multiplied', () => {
    expect(newCalculator.multiply(2,-5)).toBe(-10);
  });

  it('Returns input times two if no second input is given', () => {
    expect(newCalculator.multiply(2)).toBe(4);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.multiply()).toBe('No value was given');
  })
});

describe('My calculator divide method', () => {
  it('Returns the first input divided by the second one', () => {
    expect(newCalculator.divide(25, 5)).toBe(5);
  });

  it('Returns the first input divided by the second one', () => {
    expect(newCalculator.divide(25, -5)).toBe(-5);
  });

  it('Returns input times two if no second input is given', () => {
    expect(newCalculator.divide(2)).toBe(1);
  });

  it('Returns a falsy message if no value is given', () => {
    expect(newCalculator.divide()).toBe('No value was given');
  })
});

describe('My capitalize function', () => {
  it('Returns a string with the first letter capitalized', () => {
    expect(capitalize('not capitalized')).toBe('Not capitalized');
  });
});