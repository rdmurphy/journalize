import { isNil } from './utils';

/**
 * The non-breaking space character added to the string passed to widont.
 * Exported for testing purposes.
 *
 * @private
 * @type {string}
 */
export const nbsp = '\xA0';

/**
 * The regular expression to find the final space in a string for widont.
 *
 * @private
 * @type {RegExp}
 */
const widontRegex = new RegExp(/\s+([^\s]*)\s*$/);

/**
 * Prevents "widows" - a word by itself on a line - from appearing in strings
 * by replacing the space between the last two words with a non-breaking space
 * character.
 *
 * @param {string} val
 * @param {string} [replaceChar='\xA0'] The character to replace the space with
 * @returns {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.widont('this is a string');
 * // returns 'this is a&nbsp;string'
 *
 * journalize.widont('this is a string', 'HELLO');
 * // returns 'this is aHELLOstring'
 *
 */
export default function widont(val, replaceChar = nbsp) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // coerce value to a String
  const str = String(val);

  return str.replace(widontRegex, `${replaceChar}$1`);
}
