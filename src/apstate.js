import find from 'lodash/find';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';

import AP_STATES from './data/states';

/**
 * Converts state names into AP abbreviations, and back. If the supplied
 * string has no match, the original value is returned. If the value is not a
 * string, the original will also be returned.
 *
 * If `reverse` is true, `apstate` will convert a abbreviation back to a full
 * string.
 *
 * @param  {String} val
 * @param  {Boolean} [reverse=false]
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.apstate('Arizona');
 * // returns 'Ariz.'
 *
 * journalize.apstate('District of Columbia');
 * // returns 'D.C.'
 *
 * journalize.apstate('Texas');
 * // returns 'Texas'
 *
 * journalize.apstate('Ontario');
 * // returns 'Ontario'
 *
 * journalize.apstate('D.C.', true);
 * // returns 'District of Columbia'
 */
export default function apstate (val, reverse) {
  reverse = reverse || false;

  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // if `val` is not a string, abort and return `val`
  if (!isString(val)) return val;

  // if `reverse` is true, convert the AP abbreviation to full length
  var key, value;
  if (reverse) {
    key = 'ap';
    value = 'state';
  } else {
    key = 'state';
    value = 'ap';
  }

  // look for a match in AP_STATES
  var match = find(AP_STATES, [key, val]);

  // if no match is found, return the original `val`
  if (!match) return val;

  return match[value];
}
