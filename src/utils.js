export function isNil(val) {
  return val == null;
}

export function isString(val) {
  return typeof val === 'string';
}

export function _isFinite(value) {
  return typeof value === 'number' && isFinite(value);
}

export function isInteger(value) {
  return _isFinite(value) && Math.floor(value) === value;
}

export function find(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
