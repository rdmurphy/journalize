import lookup from './lookup';

import AP_STATES from './data/states';

/**
 * Converts state names into AP abbreviations, and back. If the supplied
 * string has no match, or if there is a match and the lookup is empty, the
 * original value is returned. If the value is not a string, the original will
 * also be returned.
 *
 * If `reverse` is true, `apstate` will convert a abbreviation back to a full
 * string.
 *
 * @param  {String} val
 * @param  {Boolean} [reverse=false]
 * @return {String}
 * @example
 *
 * var journalize = require('journalize')
 *
 * journalize.apstate('Arizona')
 * // returns 'Ariz.'
 *
 * journalize.apstate('District of Columbia')
 * // returns 'D.C.'
 *
 * journalize.apstate('Texas')
 * // returns 'Texas'
 *
 * journalize.apstate('Ontario')
 * // returns 'Ontario'
 *
 * journalize.apstate('D.C.', true)
 * // returns 'District of Columbia'
 */
export default function apstate(val, reverse) {
  return lookup(val, reverse, AP_STATES, 'state', 'ap');
}
