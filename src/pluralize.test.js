import pluralize from './pluralize';

describe('pluralize', () => {
  it('should correctly return the default pluralSuffix', () => {
    expect(pluralize(0)).toBe('s');
    expect(pluralize(1)).toBe('');
    expect(pluralize(2)).toBe('s');
    expect(pluralize(3)).toBe('s');
  });

  it('should correctly return the default pluralSuffix when value is a string', () => {
    expect(pluralize('0')).toBe('s');
    expect(pluralize('1')).toBe('');
    expect(pluralize('2')).toBe('s');
    expect(pluralize('3')).toBe('s');
  });

  it('should correctly return the default pluralSuffix when value is an array', () => {
    expect(pluralize([])).toBe('s');
    expect(pluralize([1])).toBe('');
    expect(pluralize([3])).toBe('');
    expect(pluralize([1, 2])).toBe('s');
    expect(pluralize([1, 2, 3])).toBe('s');
    expect(pluralize([3, 2, 1])).toBe('s');
  });

  it('should accept an alternative pluralSuffix', () => {
    expect(pluralize(0, 'es')).toBe('es');
    expect(pluralize(1, 'es')).toBe('');
    expect(pluralize(2, 'es')).toBe('es');
    expect(pluralize(3, 'es')).toBe('es');
  });

  it('should accept an alternative pluralSuffix and singularSuffix', () => {
    expect(pluralize(0, 'ies', 'y')).toBe('ies');
    expect(pluralize(1, 'ies', 'y')).toBe('y');
    expect(pluralize(2, 'ies', 'y')).toBe('ies');
    expect(pluralize(3, 'ies', 'y')).toBe('ies');
  });
});
