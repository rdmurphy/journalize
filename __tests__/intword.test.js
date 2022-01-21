import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import intword from '../src/intword.js';

const it = suite('intword');

it('should correctly convert integers to words', () => {
	const testList = [
		'100',
		'1000000',
		'1200000',
		'1290000',
		'12000000',
		'1000000000',
		'2000000000',
		'6000000000000',
		'603000000000000',
		'1300000000000000',
		'3500000000000000000000',
		'8100000000000000000000000000000000',
		'-100',
		'-1000000',
		'-1200000',
		'-1290000',
		'-12000000',
		'-1000000000',
		'-2000000000',
		'-6000000000000',
		'-603000000000000',
		'-1300000000000000',
		'-3500000000000000000000',
		'-8100000000000000000000000000000000',
	];
	const resultList = [
		'100',
		'1 million',
		'1.2 million',
		'1.3 million',
		'12 million',
		'1 billion',
		'2 billion',
		'6 trillion',
		'603 trillion',
		'1.3 quadrillion',
		'3.5 sextillion',
		'8.1 decillion',
		'-100',
		'-1 million',
		'-1.2 million',
		'-1.3 million',
		'-12 million',
		'-1 billion',
		'-2 billion',
		'-6 trillion',
		'-603 trillion',
		'-1.3 quadrillion',
		'-3.5 sextillion',
		'-8.1 decillion',
	];

	testList.forEach((n, idx) => {
		assert.is(intword(n), resultList[idx]);
	});
});

it('should return empty string when input is `undefined`', () => {
	assert.is(intword(undefined), '');
});

it('should return empty string when input is `null`', () => {
	assert.is(intword(null), '');
});

it('should return original input when input is not a number', () => {
	assert.is(intword('corgi'), 'corgi');
});

it('should return original input when input is not an integer', () => {
	assert.is(intword('1.234'), '1.234');
});

it.run();
