import yesno from '../src/yesno';

describe('yesno', () => {
  it('should return "yes" when value is true', () => {
    expect(yesno(true)).toBe('yes');
  });

  it('should return "no" when value is false', () => {
    expect(yesno(false)).toBe('no');
  });

  it('should return "maybe" when value is null or undefined', () => {
    expect(yesno(null)).toBe('maybe');
    expect(yesno(undefined)).toBe('maybe');
  });

  const CUSTOM_YES = 'certainly';
  const CUSTOM_NO = 'get out of town';
  const CUSTOM_MAYBE = 'probably';

  it('should return custom "yes" argument with true value', () => {
    expect(yesno(true, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE)).toBe(CUSTOM_YES);
  });

  it('should return custom "no" argument with false value', () => {
    expect(yesno(false, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE)).toBe(CUSTOM_NO);
  });

  it('should return custom "maybe" arguement with null or undefined value', () => {
    expect(yesno(null, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE)).toBe(CUSTOM_MAYBE);
    expect(yesno(undefined, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE)).toBe(
      CUSTOM_MAYBE
    );
  });

  it('should return custom "no" argument with null or undefined value when no custom "maybe" is provided', () => {
    expect(yesno(null, CUSTOM_YES, CUSTOM_NO)).toBe(CUSTOM_NO);
    expect(yesno(undefined, CUSTOM_YES, CUSTOM_NO)).toBe(CUSTOM_NO);
  });

  it('should return the original value if only at custom "yes" argument is provided', () => {
    expect(yesno(true, CUSTOM_YES)).toBe(true);
  });
});
