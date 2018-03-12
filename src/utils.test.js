import { _isFinite, isInteger, isNil } from './utils';

describe('isNil', () => {
  it('returns true on null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('returns true on undefined', () => {
    expect(isNil(undefined)).toBe(true);
    expect(isNil(void 0)).toBe(true);
  });

  it('returns false on other falsey values', () => {
    expect(isNil(false)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil(NaN)).toBe(false);
  });

  it('returns false on not null/undefined', () => {
    expect(isNil(5)).toBe(false);
    expect(isNil(5.5)).toBe(false);
    expect(isNil(Infinity)).toBe(false);
    expect(isNil(-Infinity)).toBe(false);
    expect(isNil('hello')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });
});

describe('isFinite', () => {
  it('returns true on number', () => {
    expect(_isFinite(5)).toBe(true);
    expect(_isFinite(5.5)).toBe(true);
  });

  it('returns true on negative number', () => {
    expect(_isFinite(-5)).toBe(true);
    expect(_isFinite(-5.5)).toBe(true);
  });

  it('returns false on string', () => {
    expect(_isFinite('5')).toBe(false);
  });

  it('returns false on undefined', () => {
    expect(_isFinite(undefined)).toBe(false);
  });

  it('returns false on null', () => {
    expect(_isFinite(null)).toBe(false);
  });

  it('returns false on special numbers', () => {
    expect(_isFinite(Infinity)).toBe(false);
    expect(_isFinite(-Infinity)).toBe(false);
    expect(_isFinite(NaN)).toBe(false);
  });
});

describe('isInteger', () => {
  it('returns true on integer', () => {
    expect(isInteger(5)).toBe(true);
  });

  it('returns true on negative integer', () => {
    expect(isInteger(-5)).toBe(true);
  });

  it('returns false on not integer', () => {
    expect(isInteger('5')).toBe(false);
    expect(isInteger(5.5)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(null)).toBe(false);
  });

  it('returns false on special numbers', () => {
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });
});
