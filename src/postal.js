import lookup from './lookup';

import AP_STATES from './data/states';

/**
 * Converts state and U.S. territory names into USPS postal codes, and back. If
 * the supplied string has no match, or if there is a match and the lookup is
 * empty, the original value is returned. If the value is not a string, the
 * original will also be returned.
 *
 * If `reverse` is true, `postal` will convert a postal code back to a full
 * string.
 *
 * @param  {String} val
 * @param  {Boolean} [reverse=false]
 * @return {String}
 * @example
 *
 * var journalize = require('journalize')
 *
 * journalize.postal('Arizona')
 * // returns 'AZ'
 *
 * journalize.postal('District of Columbia')
 * // returns 'DC'
 *
 * journalize.postal('Texas')
 * // returns 'TX'
 *
 * journalize.postal('Ontario')
 * // returns 'Ontario'
 *
 * journalize.postal('DC', true)
 * // returns 'District of Columbia'
 */
export default function postal(val, reverse) {
  return lookup(val, reverse, AP_STATES, 'state', 'usps');
}
