import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import ordinal from '../src/ordinal.js';

const it = suite('ordinal');

it('should correctly convert ordinals', () => {
	const testList = [
		'1',
		'2',
		'3',
		'4',
		'9',
		'10',
		'11',
		'12',
		'13',
		'101',
		'102',
		'103',
		'111',
	];
	const resultList = [
		'1st',
		'2nd',
		'3rd',
		'4th',
		'9th',
		'10th',
		'11th',
		'12th',
		'13th',
		'101st',
		'102nd',
		'103rd',
		'111th',
	];
	const spelledOutOrdinalResultList = [
		'first',
		'second',
		'third',
		'fourth',
		'ninth',
		'10th',
		'11th',
		'12th',
		'13th',
		'101st',
		'102nd',
		'103rd',
		'111th',
	];

	testList.forEach((n, idx) => {
		assert.is(ordinal(n), resultList[idx]);
	});

	testList.forEach((n, idx) => {
		assert.is(ordinal(n, true), spelledOutOrdinalResultList[idx]);
	});
});

it('should return empty string when input is `undefined`', () => {
	assert.is(ordinal(undefined), '');
});

it('should return empty string when input is `null`', () => {
	assert.is(ordinal(null), '');
});

it('should return original input when input is not a number', () => {
	assert.is(ordinal('corgi'), 'corgi');
});

it('should return original input when input is not an integer', () => {
	assert.is(ordinal('1.234'), '1.234');
});

it.run();
