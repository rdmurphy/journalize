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

    var require$$1$1 = (isObject && typeof isObject === 'object' && 'default' in isObject ? isObject['default'] : isObject);

    var isFunction = __commonjs(function (module) {
    var isObject = require$$1$1;

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

    var require$$1$2 = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

    var toNumber = __commonjs(function (module) {
    var isFunction = require$$1$2,
        isObject = require$$1$1,
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

    var require$$2 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

    var _isKey = __commonjs(function (module) {
    var isArray = require$$2,
        isSymbol = require$$0$1;

    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/;

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      var type = typeof value;
      if (type == 'number' || type == 'symbol') {
        return true;
      }
      return !isArray(value) &&
        (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
          (object != null && value in Object(object)));
    }

    module.exports = isKey;
    });

    var require$$2$1 = (_isKey && typeof _isKey === 'object' && 'default' in _isKey ? _isKey['default'] : _isKey);

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

    var require$$0$8 = (_checkGlobal && typeof _checkGlobal === 'object' && 'default' in _checkGlobal ? _checkGlobal['default'] : _checkGlobal);

    var _root = __commonjs(function (module, exports, global) {
    var checkGlobal = require$$0$8;

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

    var require$$0$7 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

    var _Symbol = __commonjs(function (module) {
    var root = require$$0$7;

    /** Built-in value references. */
    var Symbol = root.Symbol;

    module.exports = Symbol;
    });

    var require$$4 = (_Symbol && typeof _Symbol === 'object' && 'default' in _Symbol ? _Symbol['default'] : _Symbol);

    var toString = __commonjs(function (module) {
    var Symbol = require$$4,
        isSymbol = require$$0$1;

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0;

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (value == null) {
        return '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    module.exports = toString;
    });

    var require$$0$6 = (toString && typeof toString === 'object' && 'default' in toString ? toString['default'] : toString);

    var _isKeyable = __commonjs(function (module) {
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return type == 'number' || type == 'boolean' ||
        (type == 'string' && value != '__proto__') || value == null;
    }

    module.exports = isKeyable;
    });

    var require$$0$10 = (_isKeyable && typeof _isKeyable === 'object' && 'default' in _isKeyable ? _isKeyable['default'] : _isKeyable);

    var _toSource = __commonjs(function (module) {
    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    module.exports = toSource;
    });

    var require$$0$13 = (_toSource && typeof _toSource === 'object' && 'default' in _toSource ? _toSource['default'] : _toSource);

    var _isHostObject = __commonjs(function (module) {
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }

    module.exports = isHostObject;
    });

    var require$$1$9 = (_isHostObject && typeof _isHostObject === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject);

    var isNative = __commonjs(function (module) {
    var isFunction = require$$1$2,
        isHostObject = require$$1$9,
        isObject = require$$1$1,
        toSource = require$$0$13;

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to resolve the decompiled source of functions. */
    var funcToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (!isObject(value)) {
        return false;
      }
      var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    module.exports = isNative;
    });

    var require$$0$12 = (isNative && typeof isNative === 'object' && 'default' in isNative ? isNative['default'] : isNative);

    var _getNative = __commonjs(function (module) {
    var isNative = require$$0$12;

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object[key];
      return isNative(value) ? value : undefined;
    }

    module.exports = getNative;
    });

    var require$$1$8 = (_getNative && typeof _getNative === 'object' && 'default' in _getNative ? _getNative['default'] : _getNative);

    var _nativeCreate = __commonjs(function (module) {
    var getNative = require$$1$8;

    /* Built-in method references that are verified to be native. */
    var nativeCreate = getNative(Object, 'create');

    module.exports = nativeCreate;
    });

    var require$$0$11 = (_nativeCreate && typeof _nativeCreate === 'object' && 'default' in _nativeCreate ? _nativeCreate['default'] : _nativeCreate);

    var _hashSet = __commonjs(function (module) {
    var nativeCreate = require$$0$11;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     */
    function hashSet(hash, key, value) {
      hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    }

    module.exports = hashSet;
    });

    var require$$1$7 = (_hashSet && typeof _hashSet === 'object' && 'default' in _hashSet ? _hashSet['default'] : _hashSet);

    var eq = __commonjs(function (module) {
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    module.exports = eq;
    });

    var require$$0$16 = (eq && typeof eq === 'object' && 'default' in eq ? eq['default'] : eq);

    var _assocIndexOf = __commonjs(function (module) {
    var eq = require$$0$16;

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    module.exports = assocIndexOf;
    });

    var require$$0$15 = (_assocIndexOf && typeof _assocIndexOf === 'object' && 'default' in _assocIndexOf ? _assocIndexOf['default'] : _assocIndexOf);

    var _assocSet = __commonjs(function (module) {
    var assocIndexOf = require$$0$15;

    /**
     * Sets the associative array `key` to `value`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     */
    function assocSet(array, key, value) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        array.push([key, value]);
      } else {
        array[index][1] = value;
      }
    }

    module.exports = assocSet;
    });

    var require$$0$14 = (_assocSet && typeof _assocSet === 'object' && 'default' in _assocSet ? _assocSet['default'] : _assocSet);

    var _Map = __commonjs(function (module) {
    var getNative = require$$1$8,
        root = require$$0$7;

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map');

    module.exports = Map;
    });

    var require$$4$1 = (_Map && typeof _Map === 'object' && 'default' in _Map ? _Map['default'] : _Map);

    var _mapSet = __commonjs(function (module) {
    var Map = require$$4$1,
        assocSet = require$$0$14,
        hashSet = require$$1$7,
        isKeyable = require$$0$10;

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapSet(key, value) {
      var data = this.__data__;
      if (isKeyable(key)) {
        hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
      } else if (Map) {
        data.map.set(key, value);
      } else {
        assocSet(data.map, key, value);
      }
      return this;
    }

    module.exports = mapSet;
    });

    var require$$0$9 = (_mapSet && typeof _mapSet === 'object' && 'default' in _mapSet ? _mapSet['default'] : _mapSet);

    var _hashHas = __commonjs(function (module) {
    var nativeCreate = require$$0$11;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @param {Object} hash The hash to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(hash, key) {
      return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
    }

    module.exports = hashHas;
    });

    var require$$0$17 = (_hashHas && typeof _hashHas === 'object' && 'default' in _hashHas ? _hashHas['default'] : _hashHas);

    var _assocHas = __commonjs(function (module) {
    var assocIndexOf = require$$0$15;

    /**
     * Checks if an associative array value for `key` exists.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function assocHas(array, key) {
      return assocIndexOf(array, key) > -1;
    }

    module.exports = assocHas;
    });

    var require$$0$18 = (_assocHas && typeof _assocHas === 'object' && 'default' in _assocHas ? _assocHas['default'] : _assocHas);

    var _mapHas = __commonjs(function (module) {
    var Map = require$$4$1,
        assocHas = require$$0$18,
        hashHas = require$$0$17,
        isKeyable = require$$0$10;

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapHas(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashHas(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.has(key) : assocHas(data.map, key);
    }

    module.exports = mapHas;
    });

    var require$$1$10 = (_mapHas && typeof _mapHas === 'object' && 'default' in _mapHas ? _mapHas['default'] : _mapHas);

    var _hashGet = __commonjs(function (module) {
    var nativeCreate = require$$0$11;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @param {Object} hash The hash to query.
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(hash, key) {
      if (nativeCreate) {
        var result = hash[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
    }

    module.exports = hashGet;
    });

    var require$$1$11 = (_hashGet && typeof _hashGet === 'object' && 'default' in _hashGet ? _hashGet['default'] : _hashGet);

    var _assocGet = __commonjs(function (module) {
    var assocIndexOf = require$$0$15;

    /**
     * Gets the associative array value for `key`.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function assocGet(array, key) {
      var index = assocIndexOf(array, key);
      return index < 0 ? undefined : array[index][1];
    }

    module.exports = assocGet;
    });

    var require$$0$19 = (_assocGet && typeof _assocGet === 'object' && 'default' in _assocGet ? _assocGet['default'] : _assocGet);

    var _mapGet = __commonjs(function (module) {
    var Map = require$$4$1,
        assocGet = require$$0$19,
        hashGet = require$$1$11,
        isKeyable = require$$0$10;

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapGet(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashGet(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.get(key) : assocGet(data.map, key);
    }

    module.exports = mapGet;
    });

    var require$$2$2 = (_mapGet && typeof _mapGet === 'object' && 'default' in _mapGet ? _mapGet['default'] : _mapGet);

    var _hashDelete = __commonjs(function (module) {
    var hashHas = require$$0$17;

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(hash, key) {
      return hashHas(hash, key) && delete hash[key];
    }

    module.exports = hashDelete;
    });

    var require$$1$12 = (_hashDelete && typeof _hashDelete === 'object' && 'default' in _hashDelete ? _hashDelete['default'] : _hashDelete);

    var _assocDelete = __commonjs(function (module) {
    var assocIndexOf = require$$0$15;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype;

    /** Built-in value references. */
    var splice = arrayProto.splice;

    /**
     * Removes `key` and its value from the associative array.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function assocDelete(array, key) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = array.length - 1;
      if (index == lastIndex) {
        array.pop();
      } else {
        splice.call(array, index, 1);
      }
      return true;
    }

    module.exports = assocDelete;
    });

    var require$$0$20 = (_assocDelete && typeof _assocDelete === 'object' && 'default' in _assocDelete ? _assocDelete['default'] : _assocDelete);

    var _mapDelete = __commonjs(function (module) {
    var Map = require$$4$1,
        assocDelete = require$$0$20,
        hashDelete = require$$1$12,
        isKeyable = require$$0$10;

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapDelete(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map['delete'](key) : assocDelete(data.map, key);
    }

    module.exports = mapDelete;
    });

    var require$$3 = (_mapDelete && typeof _mapDelete === 'object' && 'default' in _mapDelete ? _mapDelete['default'] : _mapDelete);

    var _Hash = __commonjs(function (module) {
    var nativeCreate = require$$0$11;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @returns {Object} Returns the new hash object.
     */
    function Hash() {}

    // Avoid inheriting from `Object.prototype` when possible.
    Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

    module.exports = Hash;
    });

    var require$$1$13 = (_Hash && typeof _Hash === 'object' && 'default' in _Hash ? _Hash['default'] : _Hash);

    var _mapClear = __commonjs(function (module) {
    var Hash = require$$1$13,
        Map = require$$4$1;

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapClear() {
      this.__data__ = {
        'hash': new Hash,
        'map': Map ? new Map : [],
        'string': new Hash
      };
    }

    module.exports = mapClear;
    });

    var require$$4$2 = (_mapClear && typeof _mapClear === 'object' && 'default' in _mapClear ? _mapClear['default'] : _mapClear);

    var _MapCache = __commonjs(function (module) {
    var mapClear = require$$4$2,
        mapDelete = require$$3,
        mapGet = require$$2$2,
        mapHas = require$$1$10,
        mapSet = require$$0$9;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function MapCache(values) {
      var index = -1,
          length = values ? values.length : 0;

      this.clear();
      while (++index < length) {
        var entry = values[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapClear;
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;

    module.exports = MapCache;
    });

    var require$$1$6 = (_MapCache && typeof _MapCache === 'object' && 'default' in _MapCache ? _MapCache['default'] : _MapCache);

    var memoize = __commonjs(function (module) {
    var MapCache = require$$1$6;

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Assign cache to `_.memoize`.
    memoize.Cache = MapCache;

    module.exports = memoize;
    });

    var require$$1$5 = (memoize && typeof memoize === 'object' && 'default' in memoize ? memoize['default'] : memoize);

    var _stringToPath = __commonjs(function (module) {
    var memoize = require$$1$5,
        toString = require$$0$6;

    /** Used to match property names within property paths. */
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoize(function(string) {
      var result = [];
      toString(string).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    module.exports = stringToPath;
    });

    var require$$0$5 = (_stringToPath && typeof _stringToPath === 'object' && 'default' in _stringToPath ? _stringToPath['default'] : _stringToPath);

    var _castPath = __commonjs(function (module) {
    var isArray = require$$2,
        stringToPath = require$$0$5;

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }

    module.exports = castPath;
    });

    var require$$6 = (_castPath && typeof _castPath === 'object' && 'default' in _castPath ? _castPath['default'] : _castPath);

    var _baseGet = __commonjs(function (module) {
    var castPath = require$$6,
        isKey = require$$2$1;

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }

    module.exports = baseGet;
    });

    var require$$0$4 = (_baseGet && typeof _baseGet === 'object' && 'default' in _baseGet ? _baseGet['default'] : _baseGet);

    var _basePropertyDeep = __commonjs(function (module) {
    var baseGet = require$$0$4;

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    module.exports = basePropertyDeep;
    });

    var require$$1$4 = (_basePropertyDeep && typeof _basePropertyDeep === 'object' && 'default' in _basePropertyDeep ? _basePropertyDeep['default'] : _basePropertyDeep);

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

    var require$$0$21 = (_baseProperty && typeof _baseProperty === 'object' && 'default' in _baseProperty ? _baseProperty['default'] : _baseProperty);

    var property = __commonjs(function (module) {
    var baseProperty = require$$0$21,
        basePropertyDeep = require$$1$4,
        isKey = require$$2$1;

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }

    module.exports = property;
    });

    var require$$0$3 = (property && typeof property === 'object' && 'default' in property ? property['default'] : property);

    var identity = __commonjs(function (module) {
    /**
     * This method returns the first argument given to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    module.exports = identity;
    });

    var require$$2$3 = (identity && typeof identity === 'object' && 'default' in identity ? identity['default'] : identity);

    var _matchesStrictComparable = __commonjs(function (module) {
    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    module.exports = matchesStrictComparable;
    });

    var require$$0$22 = (_matchesStrictComparable && typeof _matchesStrictComparable === 'object' && 'default' in _matchesStrictComparable ? _matchesStrictComparable['default'] : _matchesStrictComparable);

    var _isStrictComparable = __commonjs(function (module) {
    var isObject = require$$1$1;

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    module.exports = isStrictComparable;
    });

    var require$$1$14 = (_isStrictComparable && typeof _isStrictComparable === 'object' && 'default' in _isStrictComparable ? _isStrictComparable['default'] : _isStrictComparable);

    var isString = __commonjs(function (module) {
    var isArray = require$$2,
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

    var require$$2$4 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

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

    var require$$1$15 = (isLength && typeof isLength === 'object' && 'default' in isLength ? isLength['default'] : isLength);

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

    var require$$1$16 = (_isIndex && typeof _isIndex === 'object' && 'default' in _isIndex ? _isIndex['default'] : _isIndex);

    var _getLength = __commonjs(function (module) {
    var baseProperty = require$$0$21;

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

    var require$$2$5 = (_getLength && typeof _getLength === 'object' && 'default' in _getLength ? _getLength['default'] : _getLength);

    var isArrayLike = __commonjs(function (module) {
    var getLength = require$$2$5,
        isFunction = require$$1$2,
        isLength = require$$1$15;

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

    var require$$3$4 = (isArrayLike && typeof isArrayLike === 'object' && 'default' in isArrayLike ? isArrayLike['default'] : isArrayLike);

    var isArrayLikeObject = __commonjs(function (module) {
    var isArrayLike = require$$3$4,
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

    var require$$0$24 = (isArrayLikeObject && typeof isArrayLikeObject === 'object' && 'default' in isArrayLikeObject ? isArrayLikeObject['default'] : isArrayLikeObject);

    var isArguments = __commonjs(function (module) {
    var isArrayLikeObject = require$$0$24;

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

    var require$$3$3 = (isArguments && typeof isArguments === 'object' && 'default' in isArguments ? isArguments['default'] : isArguments);

    var _hasPath = __commonjs(function (module) {
    var castPath = require$$6,
        isArguments = require$$3$3,
        isArray = require$$2,
        isIndex = require$$1$16,
        isKey = require$$2$1,
        isLength = require$$1$15,
        isString = require$$2$4;

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = isKey(path, object) ? [path] : castPath(path);

      var result,
          index = -1,
          length = path.length;

      while (++index < length) {
        var key = path[index];
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result) {
        return result;
      }
      var length = object ? object.length : 0;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isString(object) || isArguments(object));
    }

    module.exports = hasPath;
    });

    var require$$0$23 = (_hasPath && typeof _hasPath === 'object' && 'default' in _hasPath ? _hasPath['default'] : _hasPath);

    var _baseHasIn = __commonjs(function (module) {
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return key in Object(object);
    }

    module.exports = baseHasIn;
    });

    var require$$1$17 = (_baseHasIn && typeof _baseHasIn === 'object' && 'default' in _baseHasIn ? _baseHasIn['default'] : _baseHasIn);

    var hasIn = __commonjs(function (module) {
    var baseHasIn = require$$1$17,
        hasPath = require$$0$23;

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    module.exports = hasIn;
    });

    var require$$3$2 = (hasIn && typeof hasIn === 'object' && 'default' in hasIn ? hasIn['default'] : hasIn);

    var get = __commonjs(function (module) {
    var baseGet = require$$0$4;

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    module.exports = get;
    });

    var require$$4$3 = (get && typeof get === 'object' && 'default' in get ? get['default'] : get);

    var isTypedArray = __commonjs(function (module) {
    var isLength = require$$1$15,
        isObjectLike = require$$0$2;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
    typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
    typedArrayTags[setTag] = typedArrayTags[stringTag] =
    typedArrayTags[weakMapTag] = false;

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    function isTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }

    module.exports = isTypedArray;
    });

    var require$$0$26 = (isTypedArray && typeof isTypedArray === 'object' && 'default' in isTypedArray ? isTypedArray['default'] : isTypedArray);

    var _WeakMap = __commonjs(function (module) {
    var getNative = require$$1$8,
        root = require$$0$7;

    /* Built-in method references that are verified to be native. */
    var WeakMap = getNative(root, 'WeakMap');

    module.exports = WeakMap;
    });

    var require$$1$18 = (_WeakMap && typeof _WeakMap === 'object' && 'default' in _WeakMap ? _WeakMap['default'] : _WeakMap);

    var _Set = __commonjs(function (module) {
    var getNative = require$$1$8,
        root = require$$0$7;

    /* Built-in method references that are verified to be native. */
    var Set = getNative(root, 'Set');

    module.exports = Set;
    });

    var require$$2$7 = (_Set && typeof _Set === 'object' && 'default' in _Set ? _Set['default'] : _Set);

    var _Promise = __commonjs(function (module) {
    var getNative = require$$1$8,
        root = require$$0$7;

    /* Built-in method references that are verified to be native. */
    var Promise = getNative(root, 'Promise');

    module.exports = Promise;
    });

    var require$$3$6 = (_Promise && typeof _Promise === 'object' && 'default' in _Promise ? _Promise['default'] : _Promise);

    var _DataView = __commonjs(function (module) {
    var getNative = require$$1$8,
        root = require$$0$7;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(root, 'DataView');

    module.exports = DataView;
    });

    var require$$5 = (_DataView && typeof _DataView === 'object' && 'default' in _DataView ? _DataView['default'] : _DataView);

    var _getTag = __commonjs(function (module) {
    var DataView = require$$5,
        Map = require$$4$1,
        Promise = require$$3$6,
        Set = require$$2$7,
        WeakMap = require$$1$18,
        toSource = require$$0$13;

    /** `Object#toString` result references. */
    var mapTag = '[object Map]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        setTag = '[object Set]',
        weakMapTag = '[object WeakMap]';

    var dataViewTag = '[object DataView]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function getTag(value) {
      return objectToString.call(value);
    }

    // Fallback for data views, maps, sets, and weak maps in IE 11,
    // for data views in Edge, and promises in Node.js.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    module.exports = getTag;
    });

    var require$$3$5 = (_getTag && typeof _getTag === 'object' && 'default' in _getTag ? _getTag['default'] : _getTag);

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

    var require$$0$28 = (_isPrototype && typeof _isPrototype === 'object' && 'default' in _isPrototype ? _isPrototype['default'] : _isPrototype);

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

    var require$$4$5 = (_baseTimes && typeof _baseTimes === 'object' && 'default' in _baseTimes ? _baseTimes['default'] : _baseTimes);

    var _indexKeys = __commonjs(function (module) {
    var baseTimes = require$$4$5,
        isArguments = require$$3$3,
        isArray = require$$2,
        isLength = require$$1$15,
        isString = require$$2$4;

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

    var require$$3$7 = (_indexKeys && typeof _indexKeys === 'object' && 'default' in _indexKeys ? _indexKeys['default'] : _indexKeys);

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

    var require$$4$6 = (_baseKeys && typeof _baseKeys === 'object' && 'default' in _baseKeys ? _baseKeys['default'] : _baseKeys);

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

    var require$$0$29 = (_getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype);

    var _baseHas = __commonjs(function (module) {
    var getPrototype = require$$0$29;

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

    var require$$5$1 = (_baseHas && typeof _baseHas === 'object' && 'default' in _baseHas ? _baseHas['default'] : _baseHas);

    var keys = __commonjs(function (module) {
    var baseHas = require$$5$1,
        baseKeys = require$$4$6,
        indexKeys = require$$3$7,
        isArrayLike = require$$3$4,
        isIndex = require$$1$16,
        isPrototype = require$$0$28;

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

    var require$$0$27 = (keys && typeof keys === 'object' && 'default' in keys ? keys['default'] : keys);

    var _equalObjects = __commonjs(function (module) {
    var baseHas = require$$5$1,
        keys = require$$0$27;

    /** Used to compose bitmasks for comparison styles. */
    var PARTIAL_COMPARE_FLAG = 2;

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : baseHas(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      return result;
    }

    module.exports = equalObjects;
    });

    var require$$4$4 = (_equalObjects && typeof _equalObjects === 'object' && 'default' in _equalObjects ? _equalObjects['default'] : _equalObjects);

    var _setToArray = __commonjs(function (module) {
    /**
     * Converts `set` to an array.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the converted array.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }

    module.exports = setToArray;
    });

    var require$$0$30 = (_setToArray && typeof _setToArray === 'object' && 'default' in _setToArray ? _setToArray['default'] : _setToArray);

    var _mapToArray = __commonjs(function (module) {
    /**
     * Converts `map` to an array.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the converted array.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);

      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    module.exports = mapToArray;
    });

    var require$$1$19 = (_mapToArray && typeof _mapToArray === 'object' && 'default' in _mapToArray ? _mapToArray['default'] : _mapToArray);

    var _arraySome = __commonjs(function (module) {
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    module.exports = arraySome;
    });

    var require$$0$31 = (_arraySome && typeof _arraySome === 'object' && 'default' in _arraySome ? _arraySome['default'] : _arraySome);

    var _equalArrays = __commonjs(function (module) {
    var arraySome = require$$0$31;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var index = -1,
          isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked) {
        return stacked == other;
      }
      var result = true;
      stack.set(array, other);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isUnordered) {
          if (!arraySome(other, function(othValue) {
                return arrValue === othValue ||
                  equalFunc(arrValue, othValue, customizer, bitmask, stack);
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, customizer, bitmask, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      return result;
    }

    module.exports = equalArrays;
    });

    var require$$2$8 = (_equalArrays && typeof _equalArrays === 'object' && 'default' in _equalArrays ? _equalArrays['default'] : _equalArrays);

    var _Uint8Array = __commonjs(function (module) {
    var root = require$$0$7;

    /** Built-in value references. */
    var Uint8Array = root.Uint8Array;

    module.exports = Uint8Array;
    });

    var require$$3$8 = (_Uint8Array && typeof _Uint8Array === 'object' && 'default' in _Uint8Array ? _Uint8Array['default'] : _Uint8Array);

    var _equalByTag = __commonjs(function (module) {
    var Symbol = require$$4,
        Uint8Array = require$$3$8,
        equalArrays = require$$2$8,
        mapToArray = require$$1$19,
        setToArray = require$$0$30;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /** `Object#toString` result references. */
    var boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]';

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and
          // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
          // not equal.
          return +object == +other;

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return (object != +object) ? other != +other : object == +other;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= UNORDERED_COMPARE_FLAG;
          stack.set(object, other);

          // Recursively compare objects (susceptible to call stack limits).
          return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    module.exports = equalByTag;
    });

    var require$$5$2 = (_equalByTag && typeof _equalByTag === 'object' && 'default' in _equalByTag ? _equalByTag['default'] : _equalByTag);

    var _stackSet = __commonjs(function (module) {
    var MapCache = require$$1$6,
        assocSet = require$$0$14;

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__,
          array = data.array;

      if (array) {
        if (array.length < (LARGE_ARRAY_SIZE - 1)) {
          assocSet(array, key, value);
        } else {
          data.array = null;
          data.map = new MapCache(array);
        }
      }
      var map = data.map;
      if (map) {
        map.set(key, value);
      }
      return this;
    }

    module.exports = stackSet;
    });

    var require$$0$32 = (_stackSet && typeof _stackSet === 'object' && 'default' in _stackSet ? _stackSet['default'] : _stackSet);

    var _stackHas = __commonjs(function (module) {
    var assocHas = require$$0$18;

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocHas(array, key) : data.map.has(key);
    }

    module.exports = stackHas;
    });

    var require$$1$21 = (_stackHas && typeof _stackHas === 'object' && 'default' in _stackHas ? _stackHas['default'] : _stackHas);

    var _stackGet = __commonjs(function (module) {
    var assocGet = require$$0$19;

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocGet(array, key) : data.map.get(key);
    }

    module.exports = stackGet;
    });

    var require$$2$9 = (_stackGet && typeof _stackGet === 'object' && 'default' in _stackGet ? _stackGet['default'] : _stackGet);

    var _stackDelete = __commonjs(function (module) {
    var assocDelete = require$$0$20;

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          array = data.array;

      return array ? assocDelete(array, key) : data.map['delete'](key);
    }

    module.exports = stackDelete;
    });

    var require$$3$9 = (_stackDelete && typeof _stackDelete === 'object' && 'default' in _stackDelete ? _stackDelete['default'] : _stackDelete);

    var _stackClear = __commonjs(function (module) {
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = { 'array': [], 'map': null };
    }

    module.exports = stackClear;
    });

    var require$$4$7 = (_stackClear && typeof _stackClear === 'object' && 'default' in _stackClear ? _stackClear['default'] : _stackClear);

    var _Stack = __commonjs(function (module) {
    var stackClear = require$$4$7,
        stackDelete = require$$3$9,
        stackGet = require$$2$9,
        stackHas = require$$1$21,
        stackSet = require$$0$32;

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function Stack(values) {
      var index = -1,
          length = values ? values.length : 0;

      this.clear();
      while (++index < length) {
        var entry = values[index];
        this.set(entry[0], entry[1]);
      }
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    module.exports = Stack;
    });

    var require$$1$20 = (_Stack && typeof _Stack === 'object' && 'default' in _Stack ? _Stack['default'] : _Stack);

    var _baseIsEqualDeep = __commonjs(function (module) {
    var Stack = require$$1$20,
        equalArrays = require$$2$8,
        equalByTag = require$$5$2,
        equalObjects = require$$4$4,
        getTag = require$$3$5,
        isArray = require$$2,
        isHostObject = require$$1$9,
        isTypedArray = require$$0$26;

    /** Used to compose bitmasks for comparison styles. */
    var PARTIAL_COMPARE_FLAG = 2;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        objectTag = '[object Object]';

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = getTag(object);
        objTag = objTag == argsTag ? objectTag : objTag;
      }
      if (!othIsArr) {
        othTag = getTag(other);
        othTag = othTag == argsTag ? objectTag : othTag;
      }
      var objIsObj = objTag == objectTag && !isHostObject(object),
          othIsObj = othTag == objectTag && !isHostObject(other),
          isSameTag = objTag == othTag;

      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
          : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
      }
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
    }

    module.exports = baseIsEqualDeep;
    });

    var require$$2$6 = (_baseIsEqualDeep && typeof _baseIsEqualDeep === 'object' && 'default' in _baseIsEqualDeep ? _baseIsEqualDeep['default'] : _baseIsEqualDeep);

    var _baseIsEqual = __commonjs(function (module) {
    var baseIsEqualDeep = require$$2$6,
        isObject = require$$1$1,
        isObjectLike = require$$0$2;

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {boolean} [bitmask] The bitmask of comparison flags.
     *  The bitmask may be composed of the following flags:
     *     1 - Unordered comparison
     *     2 - Partial comparison
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }

    module.exports = baseIsEqual;
    });

    var require$$0$25 = (_baseIsEqual && typeof _baseIsEqual === 'object' && 'default' in _baseIsEqual ? _baseIsEqual['default'] : _baseIsEqual);

    var _baseMatchesProperty = __commonjs(function (module) {
    var baseIsEqual = require$$0$25,
        get = require$$4$3,
        hasIn = require$$3$2,
        isKey = require$$2$1,
        isStrictComparable = require$$1$14,
        matchesStrictComparable = require$$0$22;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(path, srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }

    module.exports = baseMatchesProperty;
    });

    var require$$3$1 = (_baseMatchesProperty && typeof _baseMatchesProperty === 'object' && 'default' in _baseMatchesProperty ? _baseMatchesProperty['default'] : _baseMatchesProperty);

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

    var require$$0$34 = (_arrayMap && typeof _arrayMap === 'object' && 'default' in _arrayMap ? _arrayMap['default'] : _arrayMap);

    var _baseToPairs = __commonjs(function (module) {
    var arrayMap = require$$0$34;

    /**
     * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
     * of key-value pairs for `object` corresponding to the property names of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the new array of key-value pairs.
     */
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }

    module.exports = baseToPairs;
    });

    var require$$1$23 = (_baseToPairs && typeof _baseToPairs === 'object' && 'default' in _baseToPairs ? _baseToPairs['default'] : _baseToPairs);

    var toPairs = __commonjs(function (module) {
    var baseToPairs = require$$1$23,
        keys = require$$0$27;

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the new array of key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    function toPairs(object) {
      return baseToPairs(object, keys(object));
    }

    module.exports = toPairs;
    });

    var require$$0$33 = (toPairs && typeof toPairs === 'object' && 'default' in toPairs ? toPairs['default'] : toPairs);

    var _getMatchData = __commonjs(function (module) {
    var isStrictComparable = require$$1$14,
        toPairs = require$$0$33;

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = toPairs(object),
          length = result.length;

      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }

    module.exports = getMatchData;
    });

    var require$$1$22 = (_getMatchData && typeof _getMatchData === 'object' && 'default' in _getMatchData ? _getMatchData['default'] : _getMatchData);

    var _baseIsMatch = __commonjs(function (module) {
    var Stack = require$$1$20,
        baseIsEqual = require$$0$25;

    /** Used to compose bitmasks for comparison styles. */
    var UNORDERED_COMPARE_FLAG = 1,
        PARTIAL_COMPARE_FLAG = 2;

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    module.exports = baseIsMatch;
    });

    var require$$2$10 = (_baseIsMatch && typeof _baseIsMatch === 'object' && 'default' in _baseIsMatch ? _baseIsMatch['default'] : _baseIsMatch);

    var _baseMatches = __commonjs(function (module) {
    var baseIsMatch = require$$2$10,
        getMatchData = require$$1$22,
        matchesStrictComparable = require$$0$22;

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    module.exports = baseMatches;
    });

    var require$$4$8 = (_baseMatches && typeof _baseMatches === 'object' && 'default' in _baseMatches ? _baseMatches['default'] : _baseMatches);

    var _baseIteratee = __commonjs(function (module) {
    var baseMatches = require$$4$8,
        baseMatchesProperty = require$$3$1,
        identity = require$$2$3,
        isArray = require$$2,
        property = require$$0$3;

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    module.exports = baseIteratee;
    });

    var require$$1$3 = (_baseIteratee && typeof _baseIteratee === 'object' && 'default' in _baseIteratee ? _baseIteratee['default'] : _baseIteratee);

    var _baseFindIndex = __commonjs(function (module) {
    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }

    module.exports = baseFindIndex;
    });

    var require$$2$11 = (_baseFindIndex && typeof _baseFindIndex === 'object' && 'default' in _baseFindIndex ? _baseFindIndex['default'] : _baseFindIndex);

    var _baseFind = __commonjs(function (module) {
    /**
     * The base implementation of methods like `_.find` and `_.findKey`, without
     * support for iteratee shorthands, which iterates over `collection` using
     * `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @param {boolean} [retKey] Specify returning the key of the found element
     *  instead of the element itself.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFind(collection, predicate, eachFunc, retKey) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = retKey ? key : value;
          return false;
        }
      });
      return result;
    }

    module.exports = baseFind;
    });

    var require$$3$10 = (_baseFind && typeof _baseFind === 'object' && 'default' in _baseFind ? _baseFind['default'] : _baseFind);

    var _createBaseEach = __commonjs(function (module) {
    var isArrayLike = require$$3$4;

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    module.exports = createBaseEach;
    });

    var require$$0$35 = (_createBaseEach && typeof _createBaseEach === 'object' && 'default' in _createBaseEach ? _createBaseEach['default'] : _createBaseEach);

    var _createBaseFor = __commonjs(function (module) {
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    module.exports = createBaseFor;
    });

    var require$$0$36 = (_createBaseFor && typeof _createBaseFor === 'object' && 'default' in _createBaseFor ? _createBaseFor['default'] : _createBaseFor);

    var _baseFor = __commonjs(function (module) {
    var createBaseFor = require$$0$36;

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    module.exports = baseFor;
    });

    var require$$1$25 = (_baseFor && typeof _baseFor === 'object' && 'default' in _baseFor ? _baseFor['default'] : _baseFor);

    var _baseForOwn = __commonjs(function (module) {
    var baseFor = require$$1$25,
        keys = require$$0$27;

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    module.exports = baseForOwn;
    });

    var require$$1$24 = (_baseForOwn && typeof _baseForOwn === 'object' && 'default' in _baseForOwn ? _baseForOwn['default'] : _baseForOwn);

    var _baseEach = __commonjs(function (module) {
    var baseForOwn = require$$1$24,
        createBaseEach = require$$0$35;

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    module.exports = baseEach;
    });

    var require$$4$9 = (_baseEach && typeof _baseEach === 'object' && 'default' in _baseEach ? _baseEach['default'] : _baseEach);

    var find = __commonjs(function (module) {
    var baseEach = require$$4$9,
        baseFind = require$$3$10,
        baseFindIndex = require$$2$11,
        baseIteratee = require$$1$3,
        isArray = require$$2;

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to search.
     * @param {Array|Function|Object|string} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    function find(collection, predicate) {
      predicate = baseIteratee(predicate, 3);
      if (isArray(collection)) {
        var index = baseFindIndex(collection, predicate);
        return index > -1 ? collection[index] : undefined;
      }
      return baseFind(collection, predicate, baseEach);
    }

    module.exports = find;
    });

    var find$1 = (find && typeof find === 'object' && 'default' in find ? find['default'] : find);

    /**
     * A list of state names and their AP abbreviations.
     *
     * Source: https://github.com/wireservice/lookup/blob/master/states/ap.csv
     *
     * @private
     * @type {Array}
     */
    var AP_STATES = [
      {
        'state': 'Alabama',
        'ap': 'Ala.'
      },
      {
        'state': 'Alaska',
        'ap': 'Alaska'
      },
      {
        'state': 'Arizona',
        'ap': 'Ariz.'
      },
      {
        'state': 'Arkansas',
        'ap': 'Ark.'
      },
      {
        'state': 'California',
        'ap': 'Calif.'
      },
      {
        'state': 'Colorado',
        'ap': 'Colo.'
      },
      {
        'state': 'Connecticut',
        'ap': 'Conn.'
      },
      {
        'state': 'Delaware',
        'ap': 'Del.'
      },
      {
        'state': 'District of Columbia',
        'ap': 'D.C.'
      },
      {
        'state': 'Florida',
        'ap': 'Fla.'
      },
      {
        'state': 'Georgia',
        'ap': 'Ga.'
      },
      {
        'state': 'Hawaii',
        'ap': 'Hawaii'
      },
      {
        'state': 'Idaho',
        'ap': 'Idaho'
      },
      {
        'state': 'Illinois',
        'ap': 'Ill.'
      },
      {
        'state': 'Indiana',
        'ap': 'Ind.'
      },
      {
        'state': 'Iowa',
        'ap': 'Iowa'
      },
      {
        'state': 'Kansas',
        'ap': 'Kan.'
      },
      {
        'state': 'Kentucky',
        'ap': 'Ky.'
      },
      {
        'state': 'Louisiana',
        'ap': 'La.'
      },
      {
        'state': 'Maine',
        'ap': 'Maine'
      },
      {
        'state': 'Maryland',
        'ap': 'Md.'
      },
      {
        'state': 'Massachusetts',
        'ap': 'Mass.'
      },
      {
        'state': 'Michigan',
        'ap': 'Mich.'
      },
      {
        'state': 'Minnesota',
        'ap': 'Minn.'
      },
      {
        'state': 'Mississippi',
        'ap': 'Miss.'
      },
      {
        'state': 'Missouri',
        'ap': 'Mo.'
      },
      {
        'state': 'Montana',
        'ap': 'Mont.'
      },
      {
        'state': 'Nebraska',
        'ap': 'Neb.'
      },
      {
        'state': 'Nevada',
        'ap': 'Nev.'
      },
      {
        'state': 'New Hampshire',
        'ap': 'N.H.'
      },
      {
        'state': 'New Jersey',
        'ap': 'N.J.'
      },
      {
        'state': 'New Mexico',
        'ap': 'N.M.'
      },
      {
        'state': 'New York',
        'ap': 'N.Y.'
      },
      {
        'state': 'North Carolina',
        'ap': 'N.C.'
      },
      {
        'state': 'North Dakota',
        'ap': 'N.D.'
      },
      {
        'state': 'Ohio',
        'ap': 'Ohio'
      },
      {
        'state': 'Oklahoma',
        'ap': 'Okla.'
      },
      {
        'state': 'Oregon',
        'ap': 'Ore.'
      },
      {
        'state': 'Pennsylvania',
        'ap': 'Pa.'
      },
      {
        'state': 'Rhode Island',
        'ap': 'R.I.'
      },
      {
        'state': 'South Carolina',
        'ap': 'S.C.'
      },
      {
        'state': 'South Dakota',
        'ap': 'S.D.'
      },
      {
        'state': 'Tennessee',
        'ap': 'Tenn.'
      },
      {
        'state': 'Texas',
        'ap': 'Texas'
      },
      {
        'state': 'Utah',
        'ap': 'Utah'
      },
      {
        'state': 'Vermont',
        'ap': 'Vt.'
      },
      {
        'state': 'Virginia',
        'ap': 'Va.'
      },
      {
        'state': 'Washington',
        'ap': 'Wash.'
      },
      {
        'state': 'West Virginia',
        'ap': 'W.Va.'
      },
      {
        'state': 'Wisconsin',
        'ap': 'Wis.'
      },
      {
        'state': 'Wyoming',
        'ap': 'Wyo.'
      }
    ];

    /**
     * Converts state names into AP abbreviations, and back. If the supplied
     * string has no match, the original value is returned. If the value is not a
     * string, the original will also be returned.
     *
     * If `reverse` is true, `apstate` will convert a abbreviation back to a full
     * string.
     *
     * @param  {String} val
     * @param  {Boolean} [reverse=false]
     * @return {String}
     * @example
     *
     * var journalize = require('journalize');
     *
     * journalize.apstate('Arizona');
     * // returns 'Ariz.'
     *
     * journalize.apstate('District of Columbia');
     * // returns 'D.C.'
     *
     * journalize.apstate('Texas');
     * // returns 'Texas'
     *
     * journalize.apstate('Ontario');
     * // returns 'Ontario'
     *
     * journalize.apstate('D.C.', true);
     * // returns 'District of Columbia'
     */
    function apstate (val, reverse) {
      reverse = reverse || false;

      // if `val` is undefined or null, return an empty string
      if (isNil$1(val)) return '';

      // if `val` is not a string, abort and return `val`
      if (!require$$2$4(val)) return val;

      // if `reverse` is true, convert the AP abbreviation to full length
      var key, value;
      if (reverse) {
        key = 'ap';
        value = 'state';
      } else {
        key = 'state';
        value = 'ap';
      }

      // look for a match in AP_STATES
      var match = find$1(AP_STATES, [key, val]);

      // if no match is found, return the original `val`
      if (!match) return val;

      return match[value];
    }

    var _isFinite = __commonjs(function (module) {
    var root = require$$0$7;

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

    var _baseValues = __commonjs(function (module) {
    var arrayMap = require$$0$34;

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

    var require$$1$26 = (_baseValues && typeof _baseValues === 'object' && 'default' in _baseValues ? _baseValues['default'] : _baseValues);

    var values = __commonjs(function (module) {
    var baseValues = require$$1$26,
        keys = require$$0$27;

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

    var require$$0$37 = (values && typeof values === 'object' && 'default' in values ? values['default'] : values);

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

    var require$$0$38 = (_indexOfNaN && typeof _indexOfNaN === 'object' && 'default' in _indexOfNaN ? _indexOfNaN['default'] : _indexOfNaN);

    var _baseIndexOf = __commonjs(function (module) {
    var indexOfNaN = require$$0$38;

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

    var require$$4$10 = (_baseIndexOf && typeof _baseIndexOf === 'object' && 'default' in _baseIndexOf ? _baseIndexOf['default'] : _baseIndexOf);

    var includes = __commonjs(function (module) {
    var baseIndexOf = require$$4$10,
        isArrayLike = require$$3$4,
        isString = require$$2$4,
        toInteger = require$$1,
        values = require$$0$37;

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
    exports.apstate = apstate;
    exports.intcomma = intcomma;
    exports.intword = intword;
    exports.ordinal = ordinal;

}));