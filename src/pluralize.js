/**
 * Returns a plural suffix if the value is not 1. By default, `pluralize`
 * uses "s" as the suffix. If a `String` is provided, `pluralize` will attempt
 * to convert it into a `Number`. If an `Array` is provided instead of a
 * number, the length of the `Array` is used to determine the suffix. An
 * alternative plural suffix can be provided as the second parameter, and if
 * necessary, an alternative singular suffix can be provided as the third.
 *
 * @param {number|string|array} value
 * @param {string} [pluralSuffix='s']
 * @param {string} [singularSuffix='']
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // typical usage
 * 'vote' + journalize.pluralize(0); // votes
 * 'vote' + journalize.pluralize(1); // vote
 * 'vote' + journalize.pluralize(2); // votes
 *
 * // the plural suffix may be changed
 * 'class' + journalize.pluralize(0, 'es'); // classes
 * 'class' + journalize.pluralize(1, 'es'); // class
 * 'class' + journalize.pluralize(2, 'es'); // classes
 *
 * // some words also need a custom singular suffix
 * 'cand' + journalize.pluralize(0, 'ies', 'y'); // candies
 * 'cand' + journalize.pluralize(1, 'ies', 'y'); // candy
 * 'cand' + journalize.pluralize(2, 'ies', 'y'); // candies
 */
export default function pluralize(
  value,
  pluralSuffix = 's',
  singularSuffix = ''
) {
  // if this is an array, base the return value on the length
  if (Array.isArray(value)) {
    if (value.length !== 1) {
      return pluralSuffix;
    } else {
      return singularSuffix;
    }
  }

  // otherwise we have a string or number - convert it and test if its 1
  if (Number(value) !== 1) {
    return pluralSuffix;
  }

  return singularSuffix;
}
