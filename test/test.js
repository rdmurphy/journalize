var assert = require('assert');
var range = require('lodash/range');

var journalize = require('../src');

describe('apnumber', () => {
  it('should correctly convert numbers', () => {
    var test_list = range(-1, 11).map((n) => n.toString());

    var result_list = ['-1', '0', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '10'];

    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.apnumber(n), result_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.apnumber(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.apnumber(null), '');
  });

  it('should return original input when input is not a number', () => {
    assert.deepEqual(journalize.apnumber('corgi'), 'corgi');
  });

  it('should return original input when input is not an integer', () => {
    assert.deepEqual(journalize.apnumber('1.234'), '1.234');
  });
});

describe('ordinal', () => {
  it('should correctly convert ordinals', () => {
    var test_list = ['1', '2', '3', '4', '11', '12', '13', '101', '102', '103', '111'];
    var result_list = ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '101st', '102nd', '103rd', '111th'];

    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.ordinal(n), result_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.ordinal(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.ordinal(null), '');
  });

  it('should return original input when input is not a number', () => {
    assert.deepEqual(journalize.ordinal('corgi'), 'corgi');
  });

  it('should return original input when input is not an integer', () => {
    assert.deepEqual(journalize.ordinal('1.234'), '1.234');
  });
});

describe('intword', () => {
  it('should correctly convert integers to words', () => {
    var test_list = ['100', '1000000', '1200000', '1290000', '1000000000', '2000000000', '6000000000000', '1300000000000000', '3500000000000000000000', '8100000000000000000000000000000000'];
    var result_list = ['100', '1 million', '1.2 million', '1.3 million', '1 billion', '2 billion', '6 trillion', '1.3 quadrillion', '3.5 sextillion', '8.1 decillion'];

    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.intword(n), result_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.intword(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.intword(null), '');
  });

  it('should return original input when input is not a number', () => {
    assert.deepEqual(journalize.intword('corgi'), 'corgi');
  });

  it('should return original input when input is not an integer', () => {
    assert.deepEqual(journalize.intword('1.234'), '1.234');
  });
});
