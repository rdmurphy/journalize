/**
 * Returns an AP-formatted time string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param  {Date} [date] JavaScript Date object, defaults to current date if
 *                       not passed
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
 * // Uses the current time if no parameter is passed
 * journalize.aptime();
 * // returns '6:45 p.m.' (pretend it is actually 6:45 p.m. right now)
 */
export default function aptime(date = new Date()) {
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
