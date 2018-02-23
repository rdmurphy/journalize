import apstate from './apstate';

describe('apstate', () => {
  const testList = [
    'Arizona',
    'Texas',
    'District of Columbia',
    'Wyoming',
    'Ontario',
    'Puerto Rico',
  ];
  const resultList = [
    'Ariz.',
    'Texas',
    'D.C.',
    'Wyo.',
    'Ontario',
    'Puerto Rico',
  ];

  it('should convert state names into AP abbreviations', () => {
    testList.forEach((n, idx) => {
      expect(apstate(n)).toBe(resultList[idx]);
    });
  });

  it('should convert AP abbreviations into state names', () => {
    resultList.forEach((n, idx) => {
      expect(apstate(n, true)).toBe(testList[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    expect(apstate(undefined)).toBe('');
  });

  it('should return empty string when input is `null`', () => {
    expect(apstate(null)).toBe('');
  });

  it('should return original input when input is not a string', () => {
    expect(apstate(42)).toBe(42);
  });
});
