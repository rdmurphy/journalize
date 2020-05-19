import intcomma from '../src/intcomma';

describe('intcomma', () => {
  const testList = [
    100,
    1000,
    5000,
    10123,
    10311,
    1000000,
    1234567.25,
    '100',
    '1000',
    '5000',
    '10123',
    '10311',
    '1000000',
    '1234567.1234567',
    -100,
    -1000,
    -10123,
    -10311,
    -1000000,
    -1234567.25,
    '-100',
    '-1000',
    '-10123',
    '-10311',
    '-1000000',
    '-1234567.1234567',
  ];

  it('should successfully add commas to numbers', () => {
    const resultList = [
      '100',
      '1,000',
      '5,000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.25',
      '100',
      '1,000',
      '5,000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.1234567',
      '-100',
      '-1,000',
      '-10,123',
      '-10,311',
      '-1,000,000',
      '-1,234,567.25',
      '-100',
      '-1,000',
      '-10,123',
      '-10,311',
      '-1,000,000',
      '-1,234,567.1234567',
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

  it('should accept an alternative locale to be passed to Intl.NumberFormat (es-419)', () => {
    const resultList = [
      '100',
      '1000',
      '5000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.25',
      '100',
      '1000',
      '5000',
      '10,123',
      '10,311',
      '1,000,000',
      '1,234,567.1234567',
      '-100',
      '-1000',
      '-10,123',
      '-10,311',
      '-1,000,000',
      '-1,234,567.25',
      '-100',
      '-1000',
      '-10,123',
      '-10,311',
      '-1,000,000',
      '-1,234,567.1234567',
    ];

    testList.forEach((n, idx) => {
      expect(intcomma(n, 'es-419')).toBe(resultList[idx]);
    });
  });

  it('should accept an alternative locale to be passed to Intl.NumberFormat (fr-CA)', () => {
    const resultList = [
      '100',
      '1 000',
      '5 000',
      '10 123',
      '10 311',
      '1 000 000',
      '1 234 567,25',
      '100',
      '1 000',
      '5 000',
      '10 123',
      '10 311',
      '1 000 000',
      '1 234 567,1234567',
      '-100',
      '-1 000',
      '-10 123',
      '-10 311',
      '-1 000 000',
      '-1 234 567,25',
      '-100',
      '-1 000',
      '-10 123',
      '-10 311',
      '-1 000 000',
      '-1 234 567,1234567',
    ];

    testList.forEach((n, idx) => {
      expect(intcomma(n, 'fr-CA')).toBe(resultList[idx]);
    });
  });

  it('should accept an alternative locale to be passed to Intl.NumberFormat (fr-FR)', () => {
    const resultList = [
      '100',
      '1 000',
      '5 000',
      '10 123',
      '10 311',
      '1 000 000',
      '1 234 567,25',
      '100',
      '1 000',
      '5 000',
      '10 123',
      '10 311',
      '1 000 000',
      '1 234 567,1234567',
      '-100',
      '-1 000',
      '-10 123',
      '-10 311',
      '-1 000 000',
      '-1 234 567,25',
      '-100',
      '-1 000',
      '-10 123',
      '-10 311',
      '-1 000 000',
      '-1 234 567,1234567',
    ];

    testList.forEach((n, idx) => {
      expect(intcomma(n, 'fr-FR')).toBe(resultList[idx]);
    });
  });

  it('should accept an alternative locale to be passed to Intl.NumberFormat (vi)', () => {
    const resultList = [
      '100',
      '1.000',
      '5.000',
      '10.123',
      '10.311',
      '1.000.000',
      '1.234.567,25',
      '100',
      '1.000',
      '5.000',
      '10.123',
      '10.311',
      '1.000.000',
      '1.234.567,1234567',
      '-100',
      '-1.000',
      '-10.123',
      '-10.311',
      '-1.000.000',
      '-1.234.567,25',
      '-100',
      '-1.000',
      '-10.123',
      '-10.311',
      '-1.000.000',
      '-1.234.567,1234567',
    ];

    testList.forEach((n, idx) => {
      expect(intcomma(n, 'vi')).toBe(resultList[idx]);
    });
  });
});
