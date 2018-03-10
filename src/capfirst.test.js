import capfirst from './capfirst';

describe('capfirst', () => {
  it('should capitalize the first letter of the input if it is a string', () => {
    expect(capfirst('hello world')).toBe('Hello world');
    expect(capfirst(5)).toBe('5');
    expect(capfirst([1, 2, 3])).toBe('1,2,3');
    expect(capfirst('')).toBe('');
    expect(capfirst(undefined)).toBe('');
    expect(capfirst(null)).toBe('');
  });
});
