import { isNil } from './utils';

/**
 * Capitalizes the first character of a value and returns it.
 *
 * @param {any} val
 * @returns {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.capfirst('hello world');
 * // returns 'Hello world'
 */
export default function capfirst(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // coerce value to a String
  const str = String(val);

  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
