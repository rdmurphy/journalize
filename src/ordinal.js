import isInteger from 'lodash/isInteger';
import isNil from 'lodash/isNil';
import includes from 'lodash/includes';

/**
 * A list of suffixes for conversions.
 * @private
 * @type {Array}
 */
var SUFFIXES = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

/**
 * Converts an integer into its ordinal form. Handles the special cases of 11,
 * 12 and 13, too. If a non-integer is submitted, it will be returned in its
 * original form.
 *
 * @param  {Number} val
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.ordinal(5);
 * // returns '5th'
 *
 * journalize.ordinal(13);
 * // returns '13th'
 *
 * journalize.ordinal(103);
 * // returns '103rd'
 */
export default function ordinal (val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  var convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val;

  // if `convertedVal` is 11, 12 or 13, English gets weird
  if (includes([11, 12, 13], convertedVal % 100)) return convertedVal + SUFFIXES[0];

  return convertedVal + SUFFIXES[convertedVal % 10];
}
