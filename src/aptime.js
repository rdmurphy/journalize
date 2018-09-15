/**
 * Returns an AP-formatted time string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param  {Date} [date] JavaScript Date object, defaults to current date if
 *                       not passed
 * @return {string}
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
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const minutesAreZero = minutes === 0;

  if (minutesAreZero) {
    if (hours === 0) return 'midnight';
    if (hours === 12) return 'noon';
  }

  let period, hour;

  if (hours < 12) {
    period = 'a.m.';
    // account for how Date() returns 12 a.m. as 0
    if (hours > 0) {
      hour = hours;
    } else {
      hour = 12;
    }
  } else {
    period = 'p.m.';

    if (hours === 12) {
      hour = hours;
    } else {
      hour = hours - 12;
    }
  }

  if (minutesAreZero) {
    return hour + ' ' + period;
  }

  const minute = minutes < 10 ? '0' + minutes : minutes;
  return hour + ':' + minute + ' ' + period;
}
