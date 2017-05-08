import intcomma from './intcomma';

describe('intcomma', () => {
  it('should successfully add commas to numbers', () => {
    const testList = [
      100,
      1000,
      10123,
      10311,
      1000000,
      1234567.25,
      '100',
      '1000',
      '10123',
      '10311',
      '1000000',
      '1234567.1234567'
    ];
    const resultList = [
      '100',
      '1,000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.25',
      '100',
      '1,000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.1234567'
    ];

    testList.forEach((n, idx) => {
      expect(intcomma(n)).toBe(resultList[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    expect(intcomma(undefined)).toBe('');
  });

  it('should return empty string when input is `null`', () => {
    expect(intcomma(null)).toBe('');
  });

  it('should return original input when input is not a number', () => {
    expect(intcomma('corgi')).toBe('corgi');
  });
});
