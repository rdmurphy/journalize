import { isInteger, isNil } from './utils';

/**
 * A list of suffixes for conversions.
 * @private
 * @type {string[]}
 */
const SUFFIXES = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

/**
 * List of spelled out ordinals per AP style.
 * @private
 * @type {string[]}
 */
const AP_ORDINALS = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
];

/**
 * A list of funky English ordinals.
 * @private
 * @type {number[]}
 */
const ENGLISH_ORDINAL_EXCEPTIONS = [11, 12, 13];

/**
 * Converts an integer into its ordinal form. If `spellOutOrdinals` is `true`,
 * 1 through 9 will be spelled out per AP style. Handles the special cases of
 * 11, 12 and 13, too. If a non-integer is submitted it will be returned in
 * its original form.
 *
 * @param  {number|string} val
 * @param {boolean} [spellOutOrdinals]
 * @return {string}
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
 *
 * journalize.ordinal(7, true);
 * // returns 'seventh'
 */
export default function ordinal(val, spellOutOrdinals = false) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  const convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val.toString();

  // if `spellOutOrdinals` is true, return the spelled out versions of 1-9
  if (spellOutOrdinals && convertedVal < 10) {
    return AP_ORDINALS[convertedVal - 1];
  }

  // if `convertedVal` is 11, 12 or 13, English gets weird
  if (ENGLISH_ORDINAL_EXCEPTIONS.indexOf(convertedVal % 100) > -1) {
    return convertedVal + SUFFIXES[0];
  }

  return convertedVal + SUFFIXES[convertedVal % 10];
}
