import ordinal from './ordinal';

describe('ordinal', () => {
  it('should correctly convert ordinals', () => {
    const testList = [
      '1',
      '2',
      '3',
      '4',
      '11',
      '12',
      '13',
      '101',
      '102',
      '103',
      '111',
    ];
    const resultList = [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '11th',
      '12th',
      '13th',
      '101st',
      '102nd',
      '103rd',
      '111th',
    ];

    testList.forEach((n, idx) => {
      expect(ordinal(n)).toBe(resultList[idx]);
    });
  });

  it('should return empty string when input is `undefined`', () => {
    expect(ordinal(undefined)).toBe('');
  });

  it('should return empty string when input is `null`', () => {
    expect(ordinal(null)).toBe('');
  });

  it('should return original input when input is not a number', () => {
    expect(ordinal('corgi')).toBe('corgi');
  });

  it('should return original input when input is not an integer', () => {
    expect(ordinal('1.234')).toBe('1.234');
  });
});
