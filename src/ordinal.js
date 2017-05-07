import { isInteger, isNil } from './utils'

/**
 * A list of suffixes for conversions.
 * @private
 * @type {Array}
 */
var SUFFIXES = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']

/**
 * A list of funky English ordinals.
 * @private
 * @type {Array}
 */
var ENGLISH_ORDINAL_EXCEPTIONS = [11, 12, 13]

/**
 * Converts an integer into its ordinal form. Handles the special cases of 11,
 * 12 and 13, too. If a non-integer is submitted, it will be returned in its
 * original form.
 *
 * @param  {Number} val
 * @return {String}
 * @example
 *
 * var journalize = require('journalize')
 *
 * journalize.ordinal(5)
 * // returns '5th'
 *
 * journalize.ordinal(13)
 * // returns '13th'
 *
 * journalize.ordinal(103)
 * // returns '103rd'
 */
export default function ordinal (val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return ''

  var convertedVal = +val

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val

  // if `convertedVal` is 11, 12 or 13, English gets weird
  if (ENGLISH_ORDINAL_EXCEPTIONS.indexOf(convertedVal % 100) > -1) return convertedVal + SUFFIXES[0]

  return convertedVal + SUFFIXES[convertedVal % 10]
}
