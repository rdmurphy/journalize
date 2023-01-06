import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import { _isFinite, isInteger, isNil } from '../lib/utils.js';

const utilsSuite = suite('utils');

utilsSuite('returns true on null', () => {
	assert.is(isNil(null), true);
});

utilsSuite('returns true on undefined', () => {
	assert.is(isNil(undefined), true);
	assert.is(isNil(void 0), true);
});

utilsSuite('returns false on other falsey values', () => {
	assert.is(isNil(false), false);
	assert.is(isNil(0), false);
	assert.is(isNil(''), false);
	assert.is(isNil(NaN), false);
});

utilsSuite('returns false on not null/undefined', () => {
	assert.is(isNil(5), false);
	assert.is(isNil(5.5), false);
	assert.is(isNil(Infinity), false);
	assert.is(isNil(-Infinity), false);
	assert.is(isNil('hello'), false);
	assert.is(isNil([]), false);
	assert.is(isNil({}), false);
});

utilsSuite.run();

const isFiniteSuite = suite('isFinite');

isFiniteSuite('returns true on number', () => {
	assert.is(_isFinite(5), true);
	assert.is(_isFinite(5.5), true);
});

isFiniteSuite('returns true on negative number', () => {
	assert.is(_isFinite(-5), true);
	assert.is(_isFinite(-5.5), true);
});

isFiniteSuite('returns false on string', () => {
	assert.is(_isFinite('5'), false);
});

isFiniteSuite('returns false on undefined', () => {
	assert.is(_isFinite(undefined), false);
});

isFiniteSuite('returns false on null', () => {
	assert.is(_isFinite(null), false);
});

isFiniteSuite('returns false on special numbers', () => {
	assert.is(_isFinite(Infinity), false);
	assert.is(_isFinite(-Infinity), false);
	assert.is(_isFinite(NaN), false);
});

isFiniteSuite.run();

const isIntegerSuite = suite('isInteger');

isIntegerSuite('returns true on integer', () => {
	assert.is(isInteger(5), true);
});

isIntegerSuite('returns true on negative integer', () => {
	assert.is(isInteger(-5), true);
});

isIntegerSuite('returns false on not integer', () => {
	assert.is(isInteger('5'), false);
	assert.is(isInteger(5.5), false);
	assert.is(isInteger(undefined), false);
	assert.is(isInteger(null), false);
});

isIntegerSuite('returns false on special numbers', () => {
	assert.is(isInteger(Infinity), false);
	assert.is(isInteger(-Infinity), false);
	assert.is(isInteger(NaN), false);
});

isIntegerSuite.run();
