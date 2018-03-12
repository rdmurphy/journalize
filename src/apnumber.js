import { isInteger, isNil } from './utils';

/**
 * List of spelled out numbers per AP style.
 * @private
 * @type {Array}
 */
const AP_NUMBERS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

/**
 * Converts an integer to string representation per AP style rules. If an
 * integer is not one that would be converted, it is returned in its original
 * form.
 *
 * If a non-integer is given, it will be returned in its original form as
 * well.
 *
 * @param  {Number} val
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.apnumber(8);
 * // returns 'eight'
 *
 * journalize.apnumber(42);
 * // returns 42
 *
 */
export default function apnumber(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  const convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val;

  // if `convertedVal` is not between 0 and 10, return `val`
  if (convertedVal <= 0 || convertedVal >= 10) return val;

  return AP_NUMBERS[convertedVal - 1];
}
