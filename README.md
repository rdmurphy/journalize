# journalize

A collection of functions useful for making prose reader friendly. Inspired (and initially based on) by Django's [`django.contrib.humanize`](https://docs.djangoproject.com/en/dev/ref/contrib/humanize/).

[![build status](https://img.shields.io/travis/rdmurphy/journalize/master.svg?style=flat-square)](https://travis-ci.org/rdmurphy/journalize)
[![Coveralls branch](https://img.shields.io/coveralls/rdmurphy/journalize/master.svg?style=flat-square)](https://coveralls.io/github/rdmurphy/journalize)
[![npm version](https://img.shields.io/npm/v/journalize.svg?style=flat-square)](https://www.npmjs.com/package/journalize)

## Why did you do this?

I've always appreciated the built-in functionality provided by Django's `humanize`, and I really wanted to port it over to JavaScript/Node.js. I also intend to use this to power a set of [Nunjucks](http://mozilla.github.io/nunjucks/) filters, and figured it'd be just as useful as a generic library instead of trapping it all in the Nunjucks ecosystem.

..and because I wanted to. ¯\_(ツ)_/¯

## Installation

If you plan to actively use this in a project (as in, you intend to `require()` it), then install it with `--save`.

```sh
npm install --save journalize
```

If you're using it in a static site generator, it probably makes more sense to `--save-dev` it.

```sh
npm install --save-dev journalize
```

`journalize` aims to support the many options out there in the wild west of Node.js. If you use a module bundler like [Browserify](http://browserify.org) or [Webpack](http://webpack.github.io), a version of `journalize` is compiled to play along.

If you're one of the cool kids and want to exclusively use ES6 modules with something like [Rollup](http://rollupjs.org), there's a version targeted via `jsnext:main` in the `package.json` it'll pick up.

And finally, if you're old school and just wanna grab a version and go - check out the `dist` folder. There you'll find a compiled development and production version!

## API Docs

### apnumber

Converts an integer to string representation per AP style rules. If an
integer is not one that would be converted, it is returned in its original
form.

If a non-integer is given, it will be returned in its original form, as
well.

**Parameters**

-   `val` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
var journalize = require('journalize');

journalize.apnumber(8);
// returns 'eight'

journalize.apnumber(42);
// returns 42
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### intcomma

Alters a string or number to include commas. If `val` is undefined or null,
an empty string is returned.

**Parameters**

-   `val` **([Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)\|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))**

**Examples**

```javascript
var journalize = require('journalize');

journalize.intcomma(10311);
// returns '10,311'

journalize.intcomma('1234567.1234567');
// returns '1,234,567.1234567'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### intword

Converts a large integer into a string representation. Only makes sense for
numbers at least 1 million or more.

**Parameters**

-   `val` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
var journalize = require('journalize');

journalize.intword(1000000);
// returns '1 million'

journalize.intword(6500000000000);
// returns '6.5 trillion'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

### ordinal

Converts an integer into its ordinal form. Handles the special cases of 11,
12 and 13, too. If a non-integer is submitted, it will be returned in its
original form.

**Parameters**

-   `val` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
var journalize = require('journalize');

journalize.ordinal(5);
// returns '5th'

journalize.ordinal(13);
// returns '13th'

journalize.ordinal(103);
// returns '103rd'
```

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
