(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.journalize = global.journalize || {})));
}(this, function (exports) { 'use strict';

  var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

  var isObjectLike = __commonjs(function (module) {
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  module.exports = isObjectLike;
  });

  var require$$0$2 = (isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike);

  var isSymbol = __commonjs(function (module) {
  var isObjectLike = require$$0$2;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  module.exports = isSymbol;
  });

  var require$$0$1 = (isSymbol && typeof isSymbol === 'object' && 'default' in isSymbol ? isSymbol['default'] : isSymbol);

  var isObject = __commonjs(function (module) {
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  module.exports = isObject;
  });

  var require$$0$3 = (isObject && typeof isObject === 'object' && 'default' in isObject ? isObject['default'] : isObject);

  var isFunction = __commonjs(function (module) {
  var isObject = require$$0$3;

  /** `Object#toString` result references. */
  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8 which returns 'object' for typed array and weak map constructors,
    // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  module.exports = isFunction;
  });

  var require$$1$1 = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

  var toNumber = __commonjs(function (module) {
  var isFunction = require$$1$1,
      isObject = require$$0$3,
      isSymbol = require$$0$1;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3);
   * // => 3
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3');
   * // => 3
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = isFunction(value.valueOf) ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  module.exports = toNumber;
  });

  var require$$0 = (toNumber && typeof toNumber === 'object' && 'default' in toNumber ? toNumber['default'] : toNumber);

  var toInteger = __commonjs(function (module) {
  var toNumber = require$$0;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This function is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3');
   * // => 3
   */
  function toInteger(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    var remainder = value % 1;
    return value === value ? (remainder ? value - remainder : value) : 0;
  }

  module.exports = toInteger;
  });

  var require$$1 = (toInteger && typeof toInteger === 'object' && 'default' in toInteger ? toInteger['default'] : toInteger);

  var isInteger = __commonjs(function (module) {
  var toInteger = require$$1;

  /**
   * Checks if `value` is an integer.
   *
   * **Note:** This method is based on
   * [`Number.isInteger`](https://mdn.io/Number/isInteger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
   * @example
   *
   * _.isInteger(3);
   * // => true
   *
   * _.isInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isInteger(Infinity);
   * // => false
   *
   * _.isInteger('3');
   * // => false
   */
  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }

  module.exports = isInteger;
  });

  var isInteger$1 = (isInteger && typeof isInteger === 'object' && 'default' in isInteger ? isInteger['default'] : isInteger);

  var isNil = __commonjs(function (module) {
  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  module.exports = isNil;
  });

  var isNil$1 = (isNil && typeof isNil === 'object' && 'default' in isNil ? isNil['default'] : isNil);

  /**
   * List of spelled out numbers per AP style.
   * @private
   * @type {Array}
   */
  var AP_NUMBERS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  /**
   * Converts an integer to string representation per AP style rules. If an
   * integer is not one that would be converted, it is returned in its original
   * form.
   *
   * If a non-integer is given, it will be returned in its original form, as
   * well.
   *
   * @param  {Number} val
   * @return {String}
   * @example
   *
   * var journalize = require('journalize');
   *
   * journalize.apnumber(8);
   * // returns 'eight'
   *
   * journalize.apnumber(42);
   * // returns 42
   *
   */
  function apnumber (val) {
    // if `val` is undefined or null, return an empty string
    if (isNil$1(val)) return '';

    var convertedVal = +val;

    // if `convertedVal` is not an integer, return `val`
    if (!isInteger$1(convertedVal)) return val;

    // if `convertedVal` is not between 0 and 10, return `val`
    if (convertedVal <= 0 || convertedVal >= 10) return val;

    return AP_NUMBERS[convertedVal - 1];
  }

  var _checkGlobal = __commonjs(function (module) {
  /**
   * Checks if `value` is a global object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {null|Object} Returns `value` if it's a global object, else `null`.
   */
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }

  module.exports = checkGlobal;
  });

  var require$$0$5 = (_checkGlobal && typeof _checkGlobal === 'object' && 'default' in _checkGlobal ? _checkGlobal['default'] : _checkGlobal);

  var _root = __commonjs(function (module, exports, global) {
  var checkGlobal = require$$0$5;

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Detect free variable `exports`. */
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
    ? exports
    : undefined;

  /** Detect free variable `module`. */
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
    ? module
    : undefined;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

  /** Detect free variable `self`. */
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);

  /** Detect free variable `window`. */
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);

  /** Detect `this` as the global object. */
  var thisGlobal = checkGlobal(objectTypes[typeof __commonjs_global] && __commonjs_global);

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal ||
    ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
      freeSelf || thisGlobal || Function('return this')();

  module.exports = root;
  });

  var require$$0$4 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

  var _isFinite = __commonjs(function (module) {
  var root = require$$0$4;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsFinite = root.isFinite;

  /**
   * Checks if `value` is a finite primitive number.
   *
   * **Note:** This method is based on
   * [`Number.isFinite`](https://mdn.io/Number/isFinite).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a finite number,
   *  else `false`.
   * @example
   *
   * _.isFinite(3);
   * // => true
   *
   * _.isFinite(Number.MAX_VALUE);
   * // => true
   *
   * _.isFinite(3.14);
   * // => true
   *
   * _.isFinite(Infinity);
   * // => false
   */
  function isFinite(value) {
    return typeof value == 'number' && nativeIsFinite(value);
  }

  module.exports = isFinite;
  });

  var isFinite = (_isFinite && typeof _isFinite === 'object' && 'default' in _isFinite ? _isFinite['default'] : _isFinite);

  /**
   * Converts a number to include commas, if necessary.
   *
   * Source: http://stackoverflow.com/a/2901298
   *
   * @private
   * @param  {Number|String} n
   * @return {String}
   */
  function numberWithCommas (n) {
    var parts = n.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  /**
   * Alters a string or number to include commas. If `val` is undefined or null,
   * an empty string is returned.
   *
   * @param  {Number|String} val
   * @return {String}
   * @example
   *
   * var journalize = require('journalize');
   *
   * journalize.intcomma(10311);
   * // returns '10,311'
   *
   * journalize.intcomma('1234567.1234567');
   * // returns '1,234,567.1234567'
   */
  function intcomma (val) {
    // if `val` is undefined or null, return an empty string
    if (isNil$1(val)) return '';

    var convertedVal = +val;

    // if `convertedVal` is not a number, don't waste time converting it
    if (!isFinite(convertedVal)) return val;

    return numberWithCommas(convertedVal);
  }

  var SUFFIXES = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];

  /**
   * Returns the number of digits found in a number. Accounts for exponents, too.
   *
   * @private
   * @param  {Number} n
   * @return {Number}
   */
  function getLengthOfNumber (n) {
    return Math.ceil(Math.log(n + 1) / Math.LN10);
  }

  /**
   * Converts a large integer into a string representation. Only makes sense for
   * numbers at least 1 million or more.
   *
   * @param  {Number} val
   * @return {String}
   * @example
   *
   * var journalize = require('journalize');
   *
   * journalize.intword(1000000);
   * // returns '1 million'
   *
   * journalize.intword(6500000000000);
   * // returns '6.5 trillion'
   */
  function intword (val) {
    // if `val` is undefined or null, return an empty string
    if (isNil$1(val)) return '';

    var convertedVal = +val;

    // if `convertedVal` is not an integer, return `val`
    if (!isInteger$1(convertedVal)) return val;

    // if `convertedVal` is less than 1 million, no conversion is needed
    if (convertedVal < 1000000) return convertedVal;

    // get the number of digits in the number, and substract remainder to get
    // exponent value
    var numDigits = getLengthOfNumber(convertedVal) - 1;
    var exponent = numDigits - (numDigits % 3);

    // calculate the rounded version of `convertedVal`
    var new_val = convertedVal / Math.pow(10, exponent);
    new_val = Math.round(new_val * 10) / 10;

    return new_val + ' ' + SUFFIXES[Math.floor(exponent / 3) - 2];
  }

  var _isPrototype = __commonjs(function (module) {
  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  module.exports = isPrototype;
  });

  var require$$0$8 = (_isPrototype && typeof _isPrototype === 'object' && 'default' in _isPrototype ? _isPrototype['default'] : _isPrototype);

  var _isIndex = __commonjs(function (module) {
  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }

  module.exports = isIndex;
  });

  var require$$1$2 = (_isIndex && typeof _isIndex === 'object' && 'default' in _isIndex ? _isIndex['default'] : _isIndex);

  var isLength = __commonjs(function (module) {
  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This function is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length,
   *  else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  module.exports = isLength;
  });

  var require$$1$4 = (isLength && typeof isLength === 'object' && 'default' in isLength ? isLength['default'] : isLength);

  var _baseProperty = __commonjs(function (module) {
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  module.exports = baseProperty;
  });

  var require$$0$9 = (_baseProperty && typeof _baseProperty === 'object' && 'default' in _baseProperty ? _baseProperty['default'] : _baseProperty);

  var _getLength = __commonjs(function (module) {
  var baseProperty = require$$0$9;

  /**
   * Gets the "length" property value of `object`.
   *
   * **Note:** This function is used to avoid a
   * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
   * Safari on at least iOS 8.1-8.3 ARM64.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {*} Returns the "length" value.
   */
  var getLength = baseProperty('length');

  module.exports = getLength;
  });

  var require$$2 = (_getLength && typeof _getLength === 'object' && 'default' in _getLength ? _getLength['default'] : _getLength);

  var isArrayLike = __commonjs(function (module) {
  var getLength = require$$2,
      isFunction = require$$1$1,
      isLength = require$$1$4;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(getLength(value)) && !isFunction(value);
  }

  module.exports = isArrayLike;
  });

  var require$$1$3 = (isArrayLike && typeof isArrayLike === 'object' && 'default' in isArrayLike ? isArrayLike['default'] : isArrayLike);

  var isArray = __commonjs(function (module) {
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @type {Function}
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  module.exports = isArray;
  });

  var require$$1$5 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

  var isString = __commonjs(function (module) {
  var isArray = require$$1$5,
      isObjectLike = require$$0$2;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
  }

  module.exports = isString;
  });

  var require$$0$10 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

  var isArrayLikeObject = __commonjs(function (module) {
  var isArrayLike = require$$1$3,
      isObjectLike = require$$0$2;

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  module.exports = isArrayLikeObject;
  });

  var require$$0$11 = (isArrayLikeObject && typeof isArrayLikeObject === 'object' && 'default' in isArrayLikeObject ? isArrayLikeObject['default'] : isArrayLikeObject);

  var isArguments = __commonjs(function (module) {
  var isArrayLikeObject = require$$0$11;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  module.exports = isArguments;
  });

  var require$$3$1 = (isArguments && typeof isArguments === 'object' && 'default' in isArguments ? isArguments['default'] : isArguments);

  var _baseTimes = __commonjs(function (module) {
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  module.exports = baseTimes;
  });

  var require$$4 = (_baseTimes && typeof _baseTimes === 'object' && 'default' in _baseTimes ? _baseTimes['default'] : _baseTimes);

  var _indexKeys = __commonjs(function (module) {
  var baseTimes = require$$4,
      isArguments = require$$3$1,
      isArray = require$$1$5,
      isLength = require$$1$4,
      isString = require$$0$10;

  /**
   * Creates an array of index keys for `object` values of arrays,
   * `arguments` objects, and strings, otherwise `null` is returned.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array|null} Returns index keys, else `null`.
   */
  function indexKeys(object) {
    var length = object ? object.length : undefined;
    if (isLength(length) &&
        (isArray(object) || isString(object) || isArguments(object))) {
      return baseTimes(length, String);
    }
    return null;
  }

  module.exports = indexKeys;
  });

  var require$$3 = (_indexKeys && typeof _indexKeys === 'object' && 'default' in _indexKeys ? _indexKeys['default'] : _indexKeys);

  var _baseKeys = __commonjs(function (module) {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = Object.keys;

  /**
   * The base implementation of `_.keys` which doesn't skip the constructor
   * property of prototypes or treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    return nativeKeys(Object(object));
  }

  module.exports = baseKeys;
  });

  var require$$4$1 = (_baseKeys && typeof _baseKeys === 'object' && 'default' in _baseKeys ? _baseKeys['default'] : _baseKeys);

  var _getPrototype = __commonjs(function (module) {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetPrototype = Object.getPrototypeOf;

  /**
   * Gets the `[[Prototype]]` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {null|Object} Returns the `[[Prototype]]`.
   */
  function getPrototype(value) {
    return nativeGetPrototype(Object(value));
  }

  module.exports = getPrototype;
  });

  var require$$0$12 = (_getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype);

  var _baseHas = __commonjs(function (module) {
  var getPrototype = require$$0$12;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
    // that are composed entirely of index properties, return `false` for
    // `hasOwnProperty` checks of them.
    return hasOwnProperty.call(object, key) ||
      (typeof object == 'object' && key in object && getPrototype(object) === null);
  }

  module.exports = baseHas;
  });

  var require$$5 = (_baseHas && typeof _baseHas === 'object' && 'default' in _baseHas ? _baseHas['default'] : _baseHas);

  var keys = __commonjs(function (module) {
  var baseHas = require$$5,
      baseKeys = require$$4$1,
      indexKeys = require$$3,
      isArrayLike = require$$1$3,
      isIndex = require$$1$2,
      isPrototype = require$$0$8;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    var isProto = isPrototype(object);
    if (!(isProto || isArrayLike(object))) {
      return baseKeys(object);
    }
    var indexes = indexKeys(object),
        skipIndexes = !!indexes,
        result = indexes || [],
        length = result.length;

    for (var key in object) {
      if (baseHas(object, key) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
          !(isProto && key == 'constructor')) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = keys;
  });

  var require$$0$7 = (keys && typeof keys === 'object' && 'default' in keys ? keys['default'] : keys);

  var _arrayMap = __commonjs(function (module) {
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  module.exports = arrayMap;
  });

  var require$$0$13 = (_arrayMap && typeof _arrayMap === 'object' && 'default' in _arrayMap ? _arrayMap['default'] : _arrayMap);

  var _baseValues = __commonjs(function (module) {
  var arrayMap = require$$0$13;

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  module.exports = baseValues;
  });

  var require$$1$6 = (_baseValues && typeof _baseValues === 'object' && 'default' in _baseValues ? _baseValues['default'] : _baseValues);

  var values = __commonjs(function (module) {
  var baseValues = require$$1$6,
      keys = require$$0$7;

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }

  module.exports = values;
  });

  var require$$0$6 = (values && typeof values === 'object' && 'default' in values ? values['default'] : values);

  var _indexOfNaN = __commonjs(function (module) {
  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  module.exports = indexOfNaN;
  });

  var require$$0$14 = (_indexOfNaN && typeof _indexOfNaN === 'object' && 'default' in _indexOfNaN ? _indexOfNaN['default'] : _indexOfNaN);

  var _baseIndexOf = __commonjs(function (module) {
  var indexOfNaN = require$$0$14;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  module.exports = baseIndexOf;
  });

  var require$$4$2 = (_baseIndexOf && typeof _baseIndexOf === 'object' && 'default' in _baseIndexOf ? _baseIndexOf['default'] : _baseIndexOf);

  var includes = __commonjs(function (module) {
  var baseIndexOf = require$$4$2,
      isArrayLike = require$$1$3,
      isString = require$$0$10,
      toInteger = require$$1,
      values = require$$0$6;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.includes('pebbles', 'eb');
   * // => true
   */
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection)
      ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
      : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
  }

  module.exports = includes;
  });

  var includes$1 = (includes && typeof includes === 'object' && 'default' in includes ? includes['default'] : includes);

  /**
   * A list of suffixes for conversions.
   * @private
   * @type {Array}
   */
  var SUFFIXES$1 = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  /**
   * Converts an integer into its ordinal form. Handles the special cases of 11,
   * 12 and 13, too. If a non-integer is submitted, it will be returned in its
   * original form.
   *
   * @param  {Number} val
   * @return {String}
   * @example
   *
   * var journalize = require('journalize');
   *
   * journalize.ordinal(5);
   * // returns '5th'
   *
   * journalize.ordinal(13);
   * // returns '13th'
   *
   * journalize.ordinal(103);
   * // returns '103rd'
   */
  function ordinal (val) {
    // if `val` is undefined or null, return an empty string
    if (isNil$1(val)) return '';

    var convertedVal = +val;

    // if `convertedVal` is not an integer, return `val`
    if (!isInteger$1(convertedVal)) return val;

    // if `convertedVal` is 11, 12 or 13, English gets weird
    if (includes$1([11, 12, 13], convertedVal % 100)) return convertedVal + SUFFIXES$1[0];

    return convertedVal + SUFFIXES$1[convertedVal % 10];
  }

  exports.apnumber = apnumber;
  exports.intcomma = intcomma;
  exports.intword = intword;
  exports.ordinal = ordinal;

}));