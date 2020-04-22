import ordinal from '../src/ordinal';

describe('ordinal', () => {
  it('should correctly convert ordinals', () => {
    const testList = [
      '1',
      '2',
      '3',
      '4',
      '9',
      '10',
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
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '101st',
      '102nd',
      '103rd',
      '111th',
    ];
    const spelledOutOrdinalResultList = [
      'first',
      'second',
      'third',
      'fourth',
      'ninth',
      '10th',
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

    testList.forEach((n, idx) => {
      expect(ordinal(n, true)).toBe(spelledOutOrdinalResultList[idx]);
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
