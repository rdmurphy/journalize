import parse from 'date-fns/parse';

/**
 * Map of AP month abbreviations. Note that they are zero-indexed due to
 * JavaScript's life choices. Exported for testing purposes.
 *
 * @private
 * @type {object}
 */
export var AP_MONTHS = {
  0: 'Jan.',
  1: 'Feb.',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug.',
  8: 'Sept.',
  9: 'Oct.',
  10: 'Nov.',
  11: 'Dec.'
};

/**
 * Returns an AP-formatted month string that corresponds with the supplied
 * Date, timestamp or date string. Relies on date-fns/parse to smooth over
 * browser ISO 8601 parsing inconsistencies.
 *
 * @param  {Date|Number|String} input JavaScript Date object, numerical
 * timestamp or ISO 8601 string
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apmonth(new Date(2016, 10, 8));
 * // returns 'Nov.'
 *
 * // The string parser, however, isn't as silly
 * journalize.apmonth('2016-11-08');
 * // returns 'Nov.'
 *
 * // Accounts for the non-abbreviated months, too
 * journalize.apmonth('2016-06-04');
 * // returns 'July'
 */
export default function apmonth(input) {
  var date = parse(input);
  return AP_MONTHS[date.getMonth()];
}
