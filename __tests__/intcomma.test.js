import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import settings from '../src/settings.js';
import intcomma from '../src/intcomma.js';

const it = suite('intcomma');

it('should successfully add commas to numbers', () => {
	const testList = [
		100,
		1000,
		10123,
		10311,
		1000000,
		1234567.25,
		'100',
		'1000',
		'10123',
		'10311',
		'1000000',
		'1234567.1234567',
		-100,
		-1000,
		-10123,
		-10311,
		-1000000,
		-1234567.25,
		'-100',
		'-1000',
		'-10123',
		'-10311',
		'-1000000',
		'-1234567.1234567',
	];
	const resultList = [
		'100',
		'1,000',
		'10,123',
		'10,311',
		'1,000,000',
		'1,234,567.25',
		'100',
		'1,000',
		'10,123',
		'10,311',
		'1,000,000',
		'1,234,567.1234567',
		'-100',
		'-1,000',
		'-10,123',
		'-10,311',
		'-1,000,000',
		'-1,234,567.25',
		'-100',
		'-1,000',
		'-10,123',
		'-10,311',
		'-1,000,000',
		'-1,234,567.1234567',
	];

	testList.forEach((n, idx) => {
		assert.is(intcomma(n), resultList[idx]);
	});
});

it('should return empty string when input is `undefined`', () => {
	assert.is(intcomma(undefined), '');
});

it('should return empty string when input is `null`', () => {
	assert.is(intcomma(null), '');
});

it('should return original input when input is not a number', () => {
	assert.is(intcomma('corgi'), 'corgi');
});

it('should be possible to change the locale', () => {
	settings.defaultLocale = 'es-AR';

	const testList = [
		100,
		1000,
		10123,
		10311,
		1000000,
		1234567.25,
		'100',
		'1000',
		'10123',
		'10311',
		'1000000',
		'1234567.1234567',
		-100,
		-1000,
		-10123,
		-10311,
		-1000000,
		-1234567.25,
		'-100',
		'-1000',
		'-10123',
		'-10311',
		'-1000000',
		'-1234567.1234567',
	];
	const resultList = [
		'100',
		'1.000',
		'10.123',
		'10.311',
		'1.000.000',
		'1.234.567,25',
		'100',
		'1.000',
		'10.123',
		'10.311',
		'1.000.000',
		'1.234.567,1234567',
		'-100',
		'-1.000',
		'-10.123',
		'-10.311',
		'-1.000.000',
		'-1.234.567,25',
		'-100',
		'-1.000',
		'-10.123',
		'-10.311',
		'-1.000.000',
		'-1.234.567,1234567',
	];

	testList.forEach((n, idx) => {
		assert.is(intcomma(n), resultList[idx]);
	});

	settings.defaultLocale = 'en-US';
});

it('should be possible to change locale per call to intcomma', () => {
	assert.is(intcomma(1234567.25), '1,234,567.25');
	assert.is(intcomma(1234567.25, 'es-AR'), '1.234.567,25');
	assert.is(intcomma(1234567.25, 'en-GB'), '1,234,567.25');
	assert.is(intcomma(1234567.25, 'fr-FR'), '1 234 567,25');
});

it.run();
