import { suite } from 'uvu';
import assert from 'uvu/assert';
import { install } from '@sinonjs/fake-timers';

import apdate from '../src/apdate';

const it = suite('apdate');

let clock;

it.before(() => {
  clock = install({ now: new Date(2016, 10, 8, 10, 30) });
});

it.after(() => {
  clock.uninstall();
});

it('should return an AP formatted date', () => {
  assert.is(apdate(new Date(2018, 10, 8)), 'Nov. 8, 2018');
});

it('should use current date if no parameter is passed', () => {
  assert.is(apdate(), 'Nov. 8, 2016');
});

it.run();
