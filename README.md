# journalize

A collection of functions useful for making prose reader friendly. Inspired by (and initially based on) Django's [`django.contrib.humanize`](https://docs.djangoproject.com/en/dev/ref/contrib/humanize/).

[![build status](https://img.shields.io/travis/rdmurphy/journalize/master.svg?style=flat-square)](https://travis-ci.org/rdmurphy/journalize)
[![Coveralls branch](https://img.shields.io/coveralls/rdmurphy/journalize/master.svg?style=flat-square)](https://coveralls.io/github/rdmurphy/journalize)
[![npm version](https://img.shields.io/npm/v/journalize.svg?style=flat-square)](https://www.npmjs.com/package/journalize)
[![npm](https://img.shields.io/npm/dm/journalize.svg?style=flat-square)](https://www.npmjs.com/package/journalize)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why did you create this?](#why-did-you-do-this)
- [Installation](#installation)
- [API Docs](#api-docs)
  - [apnumber](#apnumber)
  - [apstate](#apstate)
  - [intcomma](#intcomma)
  - [intword](#intword)
  - [ordinal](#ordinal)
- [Shout-outs](#shout-outs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why did you create this?

I've always really appreciated the built-in functionality provided by Django's `humanize`, and I wanted to port it over to JavaScript/Node.js. Originally this was to be a collection of custom [Nunjucks](http://mozilla.github.io/nunjucks/) filters, but I think this could be just as useful as a generic library, instead of trapping it all in the Nunjucks ecosystem.

..and because I wanted to. ¯\\\_(ツ)\_/¯

## Installation

If you plan to actively use this in a project (you intend to `require()` it), then install with `--save`.

```sh
npm install --save journalize
```

If you're using it client side, like with a static site generator, it may make more sense to use `--save-dev`.

```sh
npm install --save-dev journalize
```

`journalize` tries to support the many ways to load packages in the Node.js ecosystem.

If you use a module bundler like [Browserify](http://browserify.org) or [Webpack](http://webpack.github.io), a version of `journalize` is built to be compatible. The `main` key in `package.json` points to this file. If you're one of the cool kids and want to use ES6 modules with something like [Rollup](http://rollupjs.org), `jsnext:main` in `package.json` points at a ES6 module version.

And finally, if you're old school and just wanna grab-and-go - check out the `dist` folder. There you'll find the latest compiled development and production versions. This version has a [`umd`](https://github.com/umdjs/umd) wrapper. It's compatible with both [require.js](http://requirejs.org) and [CommonJS](http://www.commonjs.org). Finally, if neither are available, it'll add a `journalize` object to the browser's global scope.

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

### apstate

Converts state names into AP abbreviations, and back. If the supplied
string has no match, the original value is returned. If the value is not a
string, the original will also be returned.

If `reverse` is true, `apstate` will convert a abbreviation back to a full
string.

**Parameters**

-   `val` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `reverse` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)=**  (optional, default `false`)

**Examples**

```javascript
var journalize = require('journalize');

journalize.apstate('Arizona');
// returns 'Ariz.'

journalize.apstate('District of Columbia');
// returns 'D.C.'

journalize.apstate('Texas');
// returns 'Texas'

journalize.apstate('Ontario');
// returns 'Ontario'

journalize.apstate('D.C.', true);
// returns 'District of Columbia'
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

## Shout-outs

- Thanks to maintainers of [Redux](https://github.com/reactjs/redux/) for setting a great example of how to setup and maintain a JavaScript project that needs to balance the needs/many options in the Node.js/browser ecosystems.
- Thanks to [Mike Bostock](https://twitter.com/mbostock) and his work on the in-progress [v4 of d3.js](https://github.com/mbostock/d3/tree/4) &mdash; it's a good example of how to modularize a project with Rollup.
- Thanks to [Rollup](https://github.com/rollup/rollup) for being awesome. It's a great fit for creating a modular library.
