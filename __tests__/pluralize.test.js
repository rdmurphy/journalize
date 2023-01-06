import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import pluralize from '../lib/pluralize.js';

const it = suite('pluralize');

it('should correctly return the default pluralSuffix', () => {
	assert.is(pluralize(0), 's');
	assert.is(pluralize(1), '');
	assert.is(pluralize(2), 's');
	assert.is(pluralize(3), 's');
});

it('should correctly return the default pluralSuffix when value is a string', () => {
	assert.is(pluralize('0'), 's');
	assert.is(pluralize('1'), '');
	assert.is(pluralize('2'), 's');
	assert.is(pluralize('3'), 's');
});

it('should correctly return the default pluralSuffix when value is an array', () => {
	assert.is(pluralize([]), 's');
	assert.is(pluralize([1]), '');
	assert.is(pluralize([3]), '');
	assert.is(pluralize([1, 2]), 's');
	assert.is(pluralize([1, 2, 3]), 's');
	assert.is(pluralize([3, 2, 1]), 's');
});

it('should accept an alternative pluralSuffix', () => {
	assert.is(pluralize(0, 'es'), 'es');
	assert.is(pluralize(1, 'es'), '');
	assert.is(pluralize(2, 'es'), 'es');
	assert.is(pluralize(3, 'es'), 'es');
});

it('should accept an alternative pluralSuffix and singularSuffix', () => {
	assert.is(pluralize(0, 'ies', 'y'), 'ies');
	assert.is(pluralize(1, 'ies', 'y'), 'y');
	assert.is(pluralize(2, 'ies', 'y'), 'ies');
	assert.is(pluralize(3, 'ies', 'y'), 'ies');
});

it.run();
