import { suite } from 'uvu';
import assert from 'uvu/assert';
import { install } from '@sinonjs/fake-timers';

import aptime from '../src/aptime';

const it = suite('aptime');

let clock;

it.before(() => {
	clock = install({ now: new Date(2016, 10, 8, 10, 30) });
});

it.after(() => {
	clock.uninstall();
});

it('should return an AP-formatted time string', () => {
	assert.is(aptime(new Date(2016, 10, 8, 10, 30)), '10:30 a.m.');
	assert.is(aptime(new Date(2016, 10, 8, 16, 30)), '4:30 p.m.');
});

it('should return a time string without minutes if minutes are zero', () => {
	assert.is(aptime(new Date(2016, 10, 8, 10)), '10 a.m.');
});

it('should return the string `midnight`', () => {
	assert.is(aptime(new Date(2016, 10, 8)), 'midnight');
});

it('should return the string `noon`', () => {
	assert.is(aptime(new Date(2016, 10, 8, 12)), 'noon');
});

it('should left-pad the minutes when less than ten', () => {
	assert.is(aptime(new Date(2016, 10, 8, 10, 5)), '10:05 a.m.');
});

it('should return the correct time at 12 a.m.', () => {
	assert.is(aptime(new Date(2016, 10, 8, 0, 35)), '12:35 a.m.');
});

it('should return the correct time at 12 p.m.', () => {
	assert.is(aptime(new Date(2016, 8, 15, 12, 39)), '12:39 p.m.');
});

it('should use current time if no parameter is passed', () => {
	assert.is(aptime(), '10:30 a.m.');
});

it.run();
