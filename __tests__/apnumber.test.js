import { suite } from 'uvu';
import assert from 'uvu/assert';

import apnumber from '../src/apnumber';

const it = suite('apnumber');

it('should correctly convert numbers', () => {
	const testList = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) =>
		n.toString(),
	);

	const resultList = [
		'-1',
		'0',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'10',
	];

	testList.forEach((n, idx) => {
		assert.is(apnumber(n), resultList[idx]);
	});
});

it('should return empty string when input is `undefined`', () => {
	assert.is(apnumber(undefined), '');
});

it('should return empty string when input is `null`', () => {
	assert.is(apnumber(null), '');
});

it('should return original input when input is not a number', () => {
	assert.is(apnumber('corgi'), 'corgi');
});

it('should return original input when input is not an integer', () => {
	assert.is(apnumber('1.234'), '1.234');
});

it.run();
