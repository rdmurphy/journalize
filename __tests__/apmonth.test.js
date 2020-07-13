import { suite } from 'uvu';
import assert from 'uvu/assert';
import { install } from '@sinonjs/fake-timers';

import apmonth, { AP_MONTHS } from '../src/apmonth';

const it = suite('apmonth');

let clock;

it.before(() => {
  clock = install({ now: new Date(2016, 10, 8, 10, 30) });
});

it.after(() => {
  clock.uninstall();
});

const inputs = [
  new Date(2017, 0, 1),
  new Date(2017, 1, 1),
  new Date(2017, 2, 1),
  new Date(2017, 3, 1),
  new Date(2017, 4, 1),
  new Date(2017, 5, 1),
  new Date(2017, 6, 1),
  new Date(2017, 7, 1),
  new Date(2017, 8, 1),
  new Date(2017, 9, 1),
  new Date(2017, 10, 1),
  new Date(2017, 11, 1),
];

it('should return the correct month string', () => {
  inputs.forEach((val, idx) => {
    assert.is(apmonth(val), AP_MONTHS[idx]);
  });
});

it('should use current month if no parameter is passed', () => {
  assert.is(apmonth(), 'Nov.');
});

it.run();
