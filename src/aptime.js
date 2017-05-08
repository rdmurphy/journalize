import parse from 'date-fns/parse';

/**
 * Returns an AP-formatted time string that corresponds with the supplied
 * Date, timestamp or datetime string. Relies on date-fns/parse to smooth over
 * ISO 8601 parsing inconsistencies. If an `input` is not passed, it will use
 * the result of `new Date();`.
 *
 * @param  {Date|Number|String} [input] JavaScript Date object, numerical
 * timestamp or ISO 8601 string, defaults to current date if not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Bright and early
 * journalize.aptime(new Date(2016, 10, 8, 6, 30));
 * // returns '6:30 a.m.'
 *
 * // It can handle `p.m.` too
 * journalize.aptime(new Date(2016, 10, 8, 16, 30));
 * // returns '4:30 p.m.'
 *
 * // Much better to write and pass around in ISO 8601
 * journalize.aptime('2016-11-08T16:30');
 * // returns '4:30 p.m.'
 *
 * // Minutes are left off if zero
 * journalize.aptime('2016-11-08T16:00');
 * // returns '4 p.m.'
 *
 * // Also understands midnight...
 * journalize.aptime('2016-11-08T00:00');
 * // returns 'midnight'
 *
 * // ...and noon
 * journalize.aptime('2016-11-08T12:00');
 * // returns 'noon'
 *
 * // Uses the current time if no parameter is passed
 * journalize.aptime();
 * // returns '6:45 p.m.' (pretend it is actually 6:45 p.m. right now)
 *
 */
export default function aptime(input) {
  var date = parse(input || new Date());

  var hours = date.getHours();
  var minutes = date.getMinutes();

  var minutesAreZero = minutes === 0;

  if (minutesAreZero) {
    if (hours === 0) return 'midnight';
    if (hours === 12) return 'noon';
  }

  var period, hour;

  if (hours < 12) {
    period = 'a.m.';
    hour = hours;
  } else {
    period = 'p.m.';
    hour = hours - 12;
  }

  if (minutesAreZero) {
    return hour + ' ' + period;
  }

  var minute = minutes < 10 ? '0' + minutes : minutes;
  return hour + ':' + minute + ' ' + period;
}
