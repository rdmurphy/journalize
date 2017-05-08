import parse from 'date-fns/parse';
import apmonth from './apmonth';

/**
 * Returns an AP-formatted date string that corresponds with the supplied
 * Date, timestamp or date string. Relies on date-fns/parse to smooth over
 * browser ISO 8601 parsing inconsistencies. If an `input` is not passed, it
 * will use the result of `new Date();`.
 *
 * @param  {Date|Number|String} [input] JavaScript Date object, numerical
 * timestamp or ISO 8601 string, defaults to current date if not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apdate(new Date(2016, 10, 8));
 * // returns 'Nov. 8, 2016'
 *
 * // The string parser, however, isn't as silly
 * journalize.apdate('2016-11-08');
 * // returns 'Nov. 8, 2016'
 *
 * // Accounts for the non-abbreviated months, too
 * journalize.apdate('2016-06-04');
 * // returns 'July 4, 2016'
 *
 * // Uses the current date if no parameter is passed
 * journalize.apdate();
 * // returns 'July 4, 2016' (pretend it is actually July 4, 2016)
 */
export default function apdate(input) {
  var date = parse(input || new Date());

  var month = apmonth(date);
  var dayOfMonth = date.getDate();
  var year = date.getFullYear();

  return month + ' ' + dayOfMonth + ', ' + year;
}
