import widont, { nbsp } from './widont';

describe('widont', () => {
  it('should replace the last space with a non-breaking space character', () => {
    expect(widont('this is a string')).toBe(`this is a${nbsp}string`);
  });

  it('should be able to accept a custom escape character', () => {
    expect(widont('this is a string', 'CUSTOM')).toBe('this is aCUSTOMstring');
  });

  it('should leave the string alone if there are no spaces', () => {
    expect(widont('hello')).toBe('hello');
    expect(widont('')).toBe('');
  });

  it('should do nothing when passed undefined or null', () => {
    expect(widont(undefined)).toBe('');
    expect(widont(null)).toBe('');
  });
});
