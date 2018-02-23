import postal from './postal';

describe('postal', () => {
  const testList = [
    'Arizona',
    'Texas',
    'District of Columbia',
    'Wyoming',
    'Ontario',
    'Puerto Rico',
  ];
  const resultList = ['AZ', 'TX', 'DC', 'WY', 'Ontario', 'PR'];

  it('should convert state names into USPS postal codes', () => {
    testList.forEach((n, idx) => {
      expect(postal(n)).toBe(resultList[idx]);
    });
  });

  it('should convert USPS postal codes into state names', () => {
    resultList.forEach((n, idx) => {
      expect(postal(n, true)).toBe(testList[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    expect(postal(undefined)).toBe('');
  });

  it('should return empty string when input is `null`', () => {
    expect(postal(null)).toBe('');
  });

  it('should return original input when input is not a string', () => {
    expect(postal(42)).toBe(42);
  });
});
