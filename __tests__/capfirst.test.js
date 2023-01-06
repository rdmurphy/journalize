import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import capfirst from '../lib/capfirst.js';

const it = suite('capfirst');

it('should capitalize the first letter of the input if it is a string', () => {
	assert.is(capfirst('hello world'), 'Hello world');
	assert.is(capfirst(5), '5');
	assert.is(capfirst([1, 2, 3]), '1,2,3');
	assert.is(capfirst(''), '');
	assert.is(capfirst(undefined), '');
	assert.is(capfirst(null), '');
});

it.run();
