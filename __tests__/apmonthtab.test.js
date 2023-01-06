import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { install } from '@sinonjs/fake-timers';

import apmonthtab, { AP_MONTHS_TAB } from 'journalize/apmonthtab';

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
		assert.is(apmonthtab(val), AP_MONTHS_TAB[idx]);
	});
});

it('should use current month if no parameter is passed', () => {
	assert.is(apmonthtab(), 'Nov');
});

it.run();
