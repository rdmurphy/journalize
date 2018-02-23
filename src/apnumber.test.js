import apnumber from './apnumber';

describe('apnumber', () => {
  it('should correctly convert numbers', () => {
    const testList = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n =>
      n.toString()
    );

    const resultList = [
      '-1',
      '0',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      '10',
    ];

    testList.forEach((n, idx) => {
      expect(apnumber(n)).toBe(resultList[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    expect(apnumber(undefined)).toBe('');
  });

  it('should return empty string when input is `null`', () => {
    expect(apnumber(null)).toBe('');
  });

  it('should return original input when input is not a number', () => {
    expect(apnumber('corgi')).toBe('corgi');
  });

  it('should return original input when input is not an integer', () => {
    expect(apnumber('1.234')).toBe('1.234');
  });
});
