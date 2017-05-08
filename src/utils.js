/**
 * Returns true if `value` is null or undefined;
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
export function isNil(value) {
  return value == null;
}

/**
 * Returns true if `value` is a valid string.
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * Returns true if `value` is a finite number.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
export function _isFinite(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Returns true if `value` is an integer.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
export function isInteger(value) {
  return _isFinite(value) && Math.floor(value) === value;
}

/**
 * A for-loop version of Array.prototype.find so IE and friends can play.
 *
 * @private
 * @param  {Array} arr
 * @param  {Function} predicate
 * @return {*|undefined}
 * @throws {TypeError} Argument predicate must be a function
 */
export function find(arr, predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
}
