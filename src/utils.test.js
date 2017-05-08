import { find, _isFinite, isInteger, isNil, isString } from './utils';

describe('isNil', () => {
  it('returns true on null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('returns true on undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('returns false on not null/undefined', () => {
    expect(isNil(5)).toBe(false);
  });
});

describe('isString', () => {
  it('returns true on string', () => {
    expect(isString('hello')).toBe(true);
  });

  it('returns false on not string', () => {
    expect(isString(5)).toBe(false);
  });
});

describe('isFinite', () => {
  it('returns true on number', () => {
    expect(_isFinite(5)).toBe(true);
  });

  it('returns false on string', () => {
    expect(_isFinite('5')).toBe(false);
  });
});

describe('isInteger', () => {
  it('returns true on integer', () => {
    expect(isInteger(5)).toBe(true);
  });

  it('returns false on not integer', () => {
    expect(isInteger('5')).toBe(false);
    expect(isInteger(5.5)).toBe(false);
  });
});

describe('find', () => {
  const arr = [1, 2, 3];

  it('returns matching element', () => {
    const result = find(arr, el => {
      return el === 2;
    });

    expect(result).toBe(2);
  });

  it('returns undefined with no matching element', () => {
    const result = find(arr, el => {
      return el === 4;
    });

    expect(result).toBeUndefined();
  });
});
