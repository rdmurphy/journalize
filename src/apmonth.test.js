import apmonth, { AP_MONTHS } from './apmonth';

describe('apmonth', () => {
  const inputs = [
    new Date(2017, 0, 1),
    new Date(2017, 1, 1),
    new Date(2017, 2, 1),
    new Date(2017, 3, 1),
    new Date(2017, 4, 1),
    new Date(2017, 5, 1),
    new Date(2017, 6, 1),
    new Date(2017, 7, 1),
    new Date(2017, 8, 1),
    new Date(2017, 9, 1),
    new Date(2017, 10, 1),
    new Date(2017, 11, 1)
  ];

  it('should return the correct month string', () => {
    inputs.forEach((val, idx) => {
      expect(apmonth(val)).toBe(AP_MONTHS[idx]);
    });
  });
});
