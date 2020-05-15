import { isInteger, isNil } from './utils';

/**
 * Array of suffixes to be used by intword.
 * @private
 * @type {string[]}
 */
const SUFFIXES = [
  'million',
  'billion',
  'trillion',
  'quadrillion',
  'quintillion',
  'sextillion',
  'septillion',
  'octillion',
  'nonillion',
  'decillion',
];

/**
 * Returns the number of digits found in a number. Accounts for exponents, too.
 *
 * @private
 * @param  {number} n
 * @return {number}
 */
function getLengthOfNumber(n) {
  return Math.ceil(Math.log(n + 1) / Math.LN10);
}

/**
 * Converts a large integer into a string representation. Only makes sense for
 * numbers at least 1 million or more.
 *
 * @param  {number|string} val
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.intword(1000000);
 * // returns '1 million'
 *
 * journalize.intword(6500000000000);
 * // returns '6.5 trillion'
 */
export default function intword(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  const convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val.toString();

  // get the absolute value to de-sign it
  const absConvertedVal = Math.abs(convertedVal);

  // if `convertedVal` is less than 1 million, no conversion is needed
  if (absConvertedVal < 1000000) return val.toString();

  // get the number of digits in the number, and substract remainder to get
  // exponent value
  const numDigits = getLengthOfNumber(absConvertedVal) - 1;
  const exponent = numDigits - (numDigits % 3);

  // calculate the rounded version of `convertedVal`
  let newVal = convertedVal / Math.pow(10, exponent);
  newVal = Math.round(newVal * 10) / 10;

  return newVal + ' ' + SUFFIXES[Math.floor(exponent / 3) - 2];
}
