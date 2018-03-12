import aptime from './aptime';

const nativeDate = global.Date;
const mockDate = jest.fn(() => new nativeDate(2016, 10, 8, 10, 30));

describe('aptime', () => {
  it('should return an AP-formatted time string', () => {
    expect(aptime(new Date(2016, 10, 8, 10, 30))).toBe('10:30 a.m.');
    expect(aptime(new Date(2016, 10, 8, 16, 30))).toBe('4:30 p.m.');
  });

  it('should return a time string without minutes if minutes are zero', () => {
    expect(aptime(new Date(2016, 10, 8, 10))).toBe('10 a.m.');
  });

  it('should return the string `midnight`', () => {
    expect(aptime(new Date(2016, 10, 8))).toBe('midnight');
  });

  it('should return the string `noon`', () => {
    expect(aptime(new Date(2016, 10, 8, 12))).toBe('noon');
  });

  it('should left-pad the minutes when less than ten', () => {
    expect(aptime(new Date(2016, 10, 8, 10, 5))).toBe('10:05 a.m.');
  });

  it('should return the correct time at 12 a.m.', () => {
    expect(aptime(new Date(2016, 10, 8, 0, 35))).toBe('12:35 a.m.');
  });
});

describe('aptime default', () => {
  beforeAll(() => {
    global.Date = mockDate;
  });

  afterAll(() => {
    global.Date = nativeDate;
  });

  it('should use current time if no parameter is passed', () => {
    expect(aptime()).toBe('10:30 a.m.');
  });
});
