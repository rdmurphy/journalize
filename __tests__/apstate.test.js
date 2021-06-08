import apstate from '../src/apstate';

describe('apstate', () => {
  it('should convert state to ap style', () => {
    expect(apstate('New York', 'state', 'ap')).toBe('N.Y.');
  });

  it('should convert state to abbrev', () => {
    expect(apstate('Wisconsin', 'state', 'abbrev')).toBe('WI');
  });

  it('should convert abbrev to ap style`', () => {
    expect(apstate('CA', 'abbrev', 'ap')).toBe('Calif.');
  });

  it('should convert abbrev to state`', () => {
    expect(apstate('SD', 'abbrev', 'state')).toBe('South Dakota');
  });

  it('should convert ap style to abbrev', () => {
    expect(apstate('Ariz.', 'ap', 'abbrev')).toBe('AZ');
  });

  it('should convert ap style to state', () => {
    expect(apstate('N.H.', 'ap', 'state')).toBe('New Hampshire');
  });

  it('should throw error for invalid argument', () => {
    expect(() => {
      apstate('N.H.', 'blah', 'state');
    }).toThrow(Error);
    expect(() => {
      apstate('N.H.', 'state', 'blah');
    }).toThrow(Error);
  });

  it('should throw error for invalid state or mismatched state', () => {
    expect(() => {
      apstate('i am not a state', 'blah', 'state');
    }).toThrow(Error);
    expect(() => {
      apstate('N.H.', 'state', 'state');
    }).toThrow(Error);
    expect(() => {
      apstate('New Hampshire', 'abbrev', 'state');
    }).toThrow(Error);
  });
});
