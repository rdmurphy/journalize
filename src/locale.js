/** @type {Map<string, NumberFormat} */
const intlNumberFormatCache = new Map();

/**
 * @param {string} locale The locale to use for formatting.
 */
export function getIntlNumberFormat(locale) {
	let formatter = intlNumberFormatCache.get(locale);

	if (!formatter) {
		formatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 20 });
		intlNumberFormatCache.set(locale, formatter);
	}

	return formatter;
}
