import isInteger from 'lodash/isInteger'
import isNil from 'lodash/isNil'

/**
 * Array of suffixes to be used by intword.
 * @private
 * @type {Array}
 */
var SUFFIXES = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion']

/**
 * Returns the number of digits found in a number. Accounts for exponents, too.
 *
 * @private
 * @param  {Number} n
 * @return {Number}
 */
function getLengthOfNumber (n) {
  return Math.ceil(Math.log(n + 1) / Math.LN10)
}

/**
 * Converts a large integer into a string representation. Only makes sense for
 * numbers at least 1 million or more.
 *
 * @param  {Number} val
 * @return {String}
 * @example
 *
 * var journalize = require('journalize')
 *
 * journalize.intword(1000000)
 * // returns '1 million'
 *
 * journalize.intword(6500000000000)
 * // returns '6.5 trillion'
 */
export default function intword (val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return ''

  var convertedVal = +val

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val

  // if `convertedVal` is less than 1 million, no conversion is needed
  if (convertedVal < 1000000) return convertedVal

  // get the number of digits in the number, and substract remainder to get
  // exponent value
  var numDigits = getLengthOfNumber(convertedVal) - 1
  var exponent = numDigits - (numDigits % 3)

  // calculate the rounded version of `convertedVal`
  var newVal = convertedVal / Math.pow(10, exponent)
  newVal = Math.round(newVal * 10) / 10

  return newVal + ' ' + SUFFIXES[Math.floor(exponent / 3) - 2]
}
