import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import widont, { nbsp } from '../lib/widont.js';

const it = suite('widont');

it('should replace the last space with a non-breaking space character', () => {
  assert.is(widont('this is a string'), `this is a${nbsp}string`);
});

it('should be able to accept a custom escape character', () => {
  assert.is(widont('this is a string', 'CUSTOM'), 'this is aCUSTOMstring');
});

it('should leave the string alone if there are no spaces', () => {
  assert.is(widont('hello'), 'hello');
  assert.is(widont(''), '');
});

it('should do nothing when passed undefined or null', () => {
  assert.is(widont(undefined), '');
  assert.is(widont(null), '');
});

it.run();
