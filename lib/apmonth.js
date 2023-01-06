/**
 * Map of AP month abbreviations. Note that they are zero-indexed due to
 * JavaScript's life choices. Exported for testing purposes.
 *
 * @private
 * @type {object}
 */
export const AP_MONTHS = {
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
  11: 'Dec.',
};

/**
 * Returns an AP-formatted month string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param  {Date} [date] JavaScript Date object, defaults to current date if
 *                       not passed
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apmonth(new Date(2016, 10, 8));
 * // returns 'Nov.'
 *
 * // Uses the current date if no parameter is passed
 * journalize.apmonth();
 * // returns 'July' (pretend it is actually July)
 */
export default function apmonth(date = new Date()) {
  return AP_MONTHS[date.getMonth()];
}
