/**
 * Returns an AP-formatted date string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param date - The supplied Date
 * @returns The converted date as a string
 */
export function apdate(date?: Date): string;

/**
 * Returns a tabular AP-formatted date string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param date - The supplied Date
 * @returns The converted date as a string
 */
export function apdatetab(date?: Date): string;

/**
 * Returns an AP-formatted month string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param date - The supplied Date
 * @returns The converted date as a string
 */
export function apmonth(date?: Date): string;

/**
 * Returns a tabular AP-formatted month string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param date - The supplied Date
 * @returns The converted date as a string
 */
export function apmonthtab(date?: Date): string;

/**
 * Converts an integer to string representation per AP style rules. If an
 * integer is not one that would be converted, it is returned in its original
 * form.
 *
 * If a non-integer is given, it will be returned in its original form as
 * well.
 *
 * @param val - The supplied value
 * @returns The converted value
 */
export function apnumber(val: number | string): string;

/**
 * Returns an AP-formatted time string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param date The supplied Date
 * @returns The converted date as a string
 */
export function aptime(date?: Date): string;

/**
 * Capitalizes the first character of a value and returns it.
 *
 * @param val The supplied value
 * @returns The converted value
 */
export function capfirst(val: any): string;

/**
 * Alters a string or number to include commas. If `val` is undefined or null,
 * an empty string is returned.
 *
 * @param val The supplied value
 * @returns The converted value
 */
export function intcomma(val: number | string): string;

/**
 * Converts a large integer into a string representation. Only makes sense for
 * numbers at least 1 million or more.
 *
 * @param val The supplied value
 * @returns The converted value
 */
export function intword(val: number | string): string;

/**
 * Converts an integer into its ordinal form. If `spellOutOrdinals` is `true`,
 * 1 through 9 will be spelled out per AP style. Handles the special cases of
 * 11, 12 and 13, too. If a non-integer is submitted it will be returned in
 * its original form.
 *
 * @param val The supplied value
 * @param spellOutOrdinals If true, 1 through 9 will be spelled out
 * @returns The converted value
 */
export function ordinal(
  val: number | string,
  spellOutOrdinals?: boolean
): string;

/**
 * Determines the ordinal suffix for a given integer. Handles the special
 * cases of 11, 12 and 13. If a non-integer is submitted an empty string will
 * be returned.
 *
 * @param val The supplied value
 * @returns The converted value
 */
export function ordinalsuffix(val: number | string): string;

/**
 * Returns a plural suffix if the value is not 1. By default, `pluralize`
 * uses "s" as the suffix. If a `String` is provided, `pluralize` will attempt
 * to convert it into a `Number`. If an `Array` is provided instead of a
 * number, the length of the `Array` is used to determine the suffix. An
 * alternative plural suffix can be provided as the second parameter, and if
 * necessary, an alternative singular suffix can be provided as the third.
 *
 * @param value The supplied value
 * @param pluralSuffix An optional custom plural suffix
 * @param singularSuffix An optional custom singular suffix
 * @returns The converted value
 */
export function pluralize(
  value: number | string | any[],
  pluralSuffix?: string,
  singularSuffix?: string
): string;

/**
 * Prevents "widows" - a word by itself on a line - from appearing in strings
 * by replacing the space between the last two words with a non-breaking space
 * character.
 *
 * @param val The supplied value
 * @param replaceChar An optional alternative replacement character, defaults to `\xA0`
 * @returns The converted value
 */
export function widont(val: string, replaceChar?: string): string;

/**
 * Given a mapping of arguments for `true`, `false`, and (optionally)
 * `null`/`undefined`, return a string according to the value. If `maybe` is not
 * provided, a `null` or `undefined` value will return the `no` argument.
 *
 * @param val The supplied value
 * @param yes An optional alternative "yes" value, defaults to `yes`
 * @param no An optional alternative "no" value, defaults to `no`
 * @param maybe An optional alternative "maybe" value, defaults to `maybe`
 * @returns The converted value
 */
export function yesno(
  val: boolean | null | undefined,
  yes?: string,
  no?: string,
  maybe?: string
): string | boolean | null | undefined;
