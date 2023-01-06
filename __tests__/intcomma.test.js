import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import intcomma from '../lib/intcomma.js';

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

it.run();
