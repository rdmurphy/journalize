import { _isFinite, isNil } from './utils';

/**
 * A mapping of pre-built Intl.NumberFormat instances.
 * @type {Map<string, Intl.NumberFormat>}
 * @private
 */
const preparedFormatters = new Map();

function getFormatter(locale) {
  if (!preparedFormatters.has(locale)) {
    preparedFormatters.set(
      locale,
      new Intl.NumberFormat(locale, {
        style: 'decimal',
        maximumSignificantDigits: 21,
      })
    );
  }

  return preparedFormatters.get(locale);
}

/**
 * Alters a string or number to include commas. If `val` is undefined or null,
 * an empty string is returned.
 *
 * @param  {number|string} val
 * @param  {string} [locale]
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.intcomma(10311);
 * // returns '10,311'
 *
 * journalize.intcomma('1234567.1234567');
 * // returns '1,234,567.1234567'
 */
export default function intcomma(val, locale = 'en-US') {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // Attempt to force value to be a number
  const convertedVal = +val;

  // if `convertedVal` is not a number, don't waste time converting it
  if (!_isFinite(convertedVal)) return val.toString();

  // get or create our NumberFormat instance
  const formatter = getFormatter(locale);

  // re-format the value
  return formatter.format(convertedVal);
}
