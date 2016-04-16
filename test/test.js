const assert = require('assert');
const range = require('lodash/range');

const journalize = require('../src');

describe('apnumber', () => {
  it('should correctly convert numbers', () => {
    const test_list = range(-1, 11).map((n) => n.toString());

    const result_list = ['-1', '0', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '10'];

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
    const test_list = ['1', '2', '3', '4', '11', '12', '13', '101', '102', '103', '111'];
    const result_list = ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '101st', '102nd', '103rd', '111th'];

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
    const test_list = ['100', '1000000', '1200000', '1290000', '12000000', '1000000000', '2000000000', '6000000000000', '603000000000000', '1300000000000000', '3500000000000000000000', '8100000000000000000000000000000000'];
    const result_list = ['100', '1 million', '1.2 million', '1.3 million', '12 million', '1 billion', '2 billion', '6 trillion', '603 trillion', '1.3 quadrillion', '3.5 sextillion', '8.1 decillion'];

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

describe('intcomma', () => {
  it('should successfully add commas to numbers', () => {
    const test_list = [100, 1000, 10123, 10311, 1000000, 1234567.25, '100', '1000', '10123', '10311', '1000000', '1234567.1234567'];
    const result_list = ['100', '1,000', '10,123', '10,311', '1,000,000', '1,234,567.25', '100', '1,000', '10,123', '10,311', '1,000,000', '1,234,567.1234567'];

    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.intcomma(n), result_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.intcomma(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.intcomma(null), '');
  });

  it('should return original input when input is not a number', () => {
    assert.deepEqual(journalize.intcomma('corgi'), 'corgi');
  });
});

describe('apstate', () => {
  const test_list = ['Arizona', 'Texas', 'District of Columbia', 'Wyoming', 'Ontario', 'Puerto Rico'];
  const result_list = ['Ariz.', 'Texas', 'D.C.', 'Wyo.', 'Ontario', 'Puerto Rico'];

  it('should convert state names into AP abbreviations', () => {
    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.apstate(n), result_list[idx]);
    });
  });

  it('should convert AP abbreviations into state names', () => {
    result_list.forEach((n, idx) => {
      assert.deepEqual(journalize.apstate(n, true), test_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.apstate(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.apstate(null), '');
  });

  it('should return original input when input is not a string', () => {
    assert.deepEqual(journalize.apstate(42), 42);
  });
});

describe('postal', () => {
  const test_list = ['Arizona', 'Texas', 'District of Columbia', 'Wyoming', 'Ontario', 'Puerto Rico'];
  const result_list = ['AZ', 'TX', 'DC', 'WY', 'Ontario', 'PR'];

  it('should convert state names into USPS postal codes', () => {
    test_list.forEach((n, idx) => {
      assert.deepEqual(journalize.postal(n), result_list[idx]);
    });
  });

  it('should convert USPS postal codes into state names', () => {
    result_list.forEach((n, idx) => {
      assert.deepEqual(journalize.postal(n, true), test_list[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    assert.deepEqual(journalize.postal(undefined), '');
  });

  it('should return empty string when input is `null`', () => {
    assert.deepEqual(journalize.postal(null), '');
  });

  it('should return original input when input is not a string', () => {
    assert.deepEqual(journalize.postal(42), 42);
  });
});
