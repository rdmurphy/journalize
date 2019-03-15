import { isNil } from './utils';

/**
 * Given a mapping of arguments for `true`, `false`, and (optionally)
 * `null`/`undefined`, return a string according to the value. If `maybe` is not
 * provided, a `null` or `undefined` value will return the `no` argument.
 *
 * @param {boolean|Null|undefined} val
 * @param {string} [yes='yes']
 * @param {string} [no='no']
 * @param {string} [maybe='maybe']
 * @returns {string|boolean|Null|undefined}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.yesno(true);
 * // returns 'yes'
 * journalize.yesno(false);
 * // returns 'no'
 * journalize.yesno(null);
 * // returns 'maybe'
 *
 * journalize.yesno(true, 'yay', 'nay', 'shruggie');
 * // returns 'yay'
 * journalize.yesno(false, 'yay', 'nay', 'shruggie');
 * // returns 'nay'
 * journalize.yesno(null, 'yay', 'nay', 'shruggie');
 * // returns 'shruggie'
 */
export default function yesno(val, yes = 'yes', no = 'no', maybe = 'maybe') {
  const numberOfArguments = arguments.length;

  // if the user only passes the value and a `yes` argument that's too
  // ambiguous, so we give up
  if (numberOfArguments === 2) return val;
  // if the user passes the value, a `yes` and a `no` argument, don't assume
  // the default `maybe` is what they want and use `no` instead
  if (numberOfArguments === 3) maybe = no;

  // if null or undefined, use `maybe`
  if (isNil(val)) return maybe;

  // if true, use `yes`
  if (val) {
    return yes;
  }

  // otherwise, must be `no`
  return no;
}
