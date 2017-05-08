import apdate from './apdate';

describe('apdate', () => {
  it('should return an AP formatted date', () => {
    expect(apdate('2016-11-08')).toBe('Nov. 8, 2016');
    expect(apdate(new Date(2016, 10, 8))).toBe('Nov. 8, 2016');
  });
});
