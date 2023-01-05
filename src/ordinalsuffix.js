import { isInteger, isNil } from './utils.js';

/**
 * A list of suffixes for conversions.
 * @private
 * @type {string[]}
 */
const SUFFIXES = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

/**
 * A list of funky English ordinals.
 * @private
 * @type {number[]}
 */
const ENGLISH_ORDINAL_EXCEPTIONS = [11, 12, 13];

/**
 * Determines the ordinal suffix for a given integer. Handles the special
 * cases of 11, 12 and 13. If a non-integer is submitted an empty string will
 * be returned.
 *
 * @param  {number|string} val
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.ordinalsuffix(5);
 * // returns 'th'
 *
 * journalize.ordinalsuffix(13);
 * // returns 'th'
 *
 * journalize.ordinalsuffix(103);
 * // returns 'rd'
 *
 * journalize.ordinalsuffix(7);
 * // returns 'th'
 *
 * journalize.ordinalsuffix('foo');
 * // returns ''
 */
export default function ordinalsuffix(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // ensure `val` is a number
  const convertedVal = +val;

  // if `convertedVal` is not an integer, return an empty string
  if (!isInteger(convertedVal)) return '';

  // if `convertedVal` is 11, 12 or 13, English gets weird
  if (ENGLISH_ORDINAL_EXCEPTIONS.indexOf(convertedVal % 100) > -1) {
    return SUFFIXES[0];
  }

  // return the appropriate suffix
  return SUFFIXES[convertedVal % 10];
}
