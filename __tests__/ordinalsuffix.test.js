import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import ordinalsuffix from 'journalize/ordinalsuffix';

const it = suite('ordinalsuffix');

it('should correctly determine suffixes', () => {
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
		'st',
		'nd',
		'rd',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'st',
		'nd',
		'rd',
		'th',
	];

	testList.forEach((n, idx) => {
		assert.is(ordinalsuffix(n), resultList[idx]);
	});
});

it('should return empty string when input is `undefined`', () => {
	assert.is(ordinalsuffix(undefined), '');
});

it('should return empty string when input is `null`', () => {
	assert.is(ordinalsuffix(null), '');
});

it('should return an empty string when not a number', () => {
	assert.is(ordinalsuffix('corgi'), '');
});

it('should return an empty string when not an integer', () => {
	assert.is(ordinalsuffix('1.234'), '');
});

it.run();
