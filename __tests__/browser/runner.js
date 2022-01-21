// native
import { join } from 'node:path';

// packages
import { serve } from 'esbuild';
import kleur from 'kleur';
import { chromium, firefox, webkit } from 'playwright';
import { parse } from 'uvu/parse';

const browserName = process.env.BROWSER || 'chromium';

const FILE = kleur.bold().underline().white;

function strip(str) {
	return str.replace(/\x1b\[\d{1,2}m/g, '');
}

function toCount(title, line) {
	return Number(strip(line).split(title)[1]);
}

function milli(arr) {
	return (arr[0] * 1e3 + arr[1] / 1e6).toFixed(2) + 'ms';
}
function hrtime(now = process.hrtime()) {
	return () => milli(process.hrtime(now));
}

function listen(/** @type {import('playwright').Page} */ page, url) {
	return new Promise(async (resolve, reject) => {
		let total = 0;
		let pass = 0;
		let skips = 0;

		page.on('crash', reject);
		page.on('pageerror', reject);
		page.on('console', (msg) => {
			const txt = msg.text();
			if (txt.includes('  Total: ')) {
				total += toCount('Total:', txt);
			} else if (txt.includes('  Passed: ')) {
				pass += toCount('Passed:', txt);
			} else if (txt.includes('  Skipped: ')) {
				skips += toCount('Skipped:', txt);
			} else if (txt.includes('  Duration: ')) {
				resolve({ total, pass, skips });
			} else {
				process.stdout.write(txt);
			}
		});

		await page.addScriptTag({
			type: 'module',
			url,
		});
	});
}

async function run() {
	const { suites } = await parse('./__tests__/', undefined, {
		ignore: 'browser',
	});

	const { stop } = await serve(
		{ port: 5000, servedir: './__tests__/browser/' },
		{
			bundle: true,
			entryPoints: suites.map((suite) => suite.file),
			external: ['util'],
			format: 'esm',
			outdir: './__tests__/browser/js',
			platform: 'browser',
			sourcemap: 'inline',
		},
	);

	const browser = await { chromium, webkit, firefox }[browserName].launch();

	let code = 0;
	let allTests = 0;
	let allSkips = 0;
	let allPasses = 0;
	const timer = hrtime();

	for (const suite of suites) {
		if (allTests > 0) console.log('');
		console.log(FILE(suite.name));

		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto('http://localhost:5000');

		const { pass, skips, total } = await listen(page, join('js', suite.name));
		let hadErrors = skips + pass < total;

		allTests += total;
		allSkips += skips;
		allPasses += pass;

		if (hadErrors) code = 1;
	}

	console.log('');
	console.log('  Total:     ' + allTests);
	console.log(kleur.green('  Passed:    ' + allPasses));
	console.log('  Skipped:   ' + allSkips);
	console.log('  Duration:  ' + timer() + '\n');

	await browser.close();
	stop();

	process.exit(code);
}

run().catch(console.error);
