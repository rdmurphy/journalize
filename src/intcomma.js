import isFinite from 'lodash/isFinite'
import isNil from 'lodash/isNil'

/**
 * Converts a number to include commas, if necessary.
 *
 * Source: http://stackoverflow.com/a/2901298
 *
 * @private
 * @param  {Number|String} n
 * @return {String}
 */
function numberWithCommas (n) {
  var parts = n.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * Alters a string or number to include commas. If `val` is undefined or null,
 * an empty string is returned.
 *
 * @param  {Number|String} val
 * @return {String}
 * @example
 *
 * var journalize = require('journalize')
 *
 * journalize.intcomma(10311)
 * // returns '10,311'
 *
 * journalize.intcomma('1234567.1234567')
 * // returns '1,234,567.1234567'
 */
export default function intcomma (val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return ''

  var convertedVal = +val

  // if `convertedVal` is not a number, don't waste time converting it
  if (!isFinite(convertedVal)) return val

  return numberWithCommas(convertedVal)
}
