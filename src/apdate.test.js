import apdate from './apdate';

const nativeDate = global.Date;
const mockDate = jest.fn(() => new nativeDate(2016, 10, 8, 10, 30));

describe('apdate', () => {
  it('should return an AP formatted date', () => {
    expect(apdate('2016-11-08')).toBe('Nov. 8, 2016');
    expect(apdate(new Date(2016, 10, 8))).toBe('Nov. 8, 2016');
  });
});

describe('apdate default', () => {
  beforeAll(() => {
    global.Date = mockDate;
  });

  afterAll(() => {
    global.Date = nativeDate;
  });

  it('should use current date if no parameter is passed', () => {
    expect(apdate()).toBe('Nov. 8, 2016');
  });
});
