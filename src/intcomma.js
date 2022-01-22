import { getIntlNumberFormat } from './locale.js';
import settings from './settings.js';
import { _isFinite, isNil } from './utils.js';

/**
 * Converts a number to include integer separators.
 *
 * @private
 * @param {number|string} n
 * @param {string} locale
 * @return {string}
 */
function numberWithCommas(n, locale) {
	const formatter = getIntlNumberFormat(locale || settings.defaultLocale);
	return formatter.format(n);
}

/**
 * Alters a string or number to include commas. If `val` is undefined or null,
 * an empty string is returned.
 *
 * @param {number|string} val
 * @param {string} [locale]
 * @return {string}
 * @example
 *
 * import { intcomma, settings } from 'journalize';
 *
 * intcomma(10311);
 * // returns '10,311'
 *
 * intcomma('1234567.1234567');
 * // returns '1,234,567.1234567'
 *
 * intcomma(10311, 'es-AR');
 * // returns '10.311'
 *
 * settings.defaultLocale = 'es-AR';
 * intcomma(10311);
 * // returns '10.311'
 */
export default function intcomma(val, locale) {
	// if `val` is undefined or null, return an empty string
	if (isNil(val)) return '';

	const convertedVal = +val;

	// if `convertedVal` is not a number, don't waste time converting it
	if (!_isFinite(convertedVal)) return val.toString();

	return numberWithCommas(convertedVal, locale);
}
