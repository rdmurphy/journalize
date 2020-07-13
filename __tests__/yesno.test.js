import { suite } from 'uvu';
import assert from 'uvu/assert';

import yesno from '../src/yesno';

const it = suite('yesno');

it('should return "yes" when value is true', () => {
  assert.is(yesno(true), 'yes');
});

it('should return "no" when value is false', () => {
  assert.is(yesno(false), 'no');
});

it('should return "maybe" when value is null or undefined', () => {
  assert.is(yesno(null), 'maybe');
  assert.is(yesno(undefined), 'maybe');
});

const CUSTOM_YES = 'certainly';
const CUSTOM_NO = 'get out of town';
const CUSTOM_MAYBE = 'probably';

it('should return custom "yes" argument with true value', () => {
  assert.is(yesno(true, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE), CUSTOM_YES);
});

it('should return custom "no" argument with false value', () => {
  assert.is(yesno(false, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE), CUSTOM_NO);
});

it('should return custom "maybe" arguement with null or undefined value', () => {
  assert.is(yesno(null, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE), CUSTOM_MAYBE);
  assert.is(
    yesno(undefined, CUSTOM_YES, CUSTOM_NO, CUSTOM_MAYBE),
    CUSTOM_MAYBE
  );
});

it('should return custom "no" argument with null or undefined value when no custom "maybe" is provided', () => {
  assert.is(yesno(null, CUSTOM_YES, CUSTOM_NO), CUSTOM_NO);
  assert.is(yesno(undefined, CUSTOM_YES, CUSTOM_NO), CUSTOM_NO);
});

it('should return the original value if only at custom "yes" argument is provided', () => {
  assert.is(yesno(true, CUSTOM_YES), true);
});

it.run();
