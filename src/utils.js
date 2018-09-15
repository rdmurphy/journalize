/**
 * Returns true if `value` is null or undefined;
 *
 * @private
 * @param  {*}  value
 * @return {boolean}
 */
export function isNil(value) {
  return value == null;
}

/**
 * Returns true if `value` is a finite number.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
 *
 * @private
 * @param  {*}  value
 * @return {boolean}
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
 * @return {boolean}
 */
export function isInteger(value) {
  return _isFinite(value) && Math.floor(value) === value;
}
