(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : factory(global.journalize = global.journalize || {});
})(this, function(exports) {
    "use strict";
    var __commonjs_global = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this;
    function __commonjs(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports, __commonjs_global), module.exports;
    }
    var isObjectLike = __commonjs(function(module) {
        function isObjectLike(value) {
            return !!value && typeof value == "object";
        }
        module.exports = isObjectLike;
    });
    var require$$2 = isObjectLike && typeof isObjectLike === "object" && "default" in isObjectLike ? isObjectLike["default"] : isObjectLike;
    var isSymbol = __commonjs(function(module) {
        var isObjectLike = require$$2;
        var symbolTag = "[object Symbol]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        module.exports = isSymbol;
    });
    var require$$0$1 = isSymbol && typeof isSymbol === "object" && "default" in isSymbol ? isSymbol["default"] : isSymbol;
    var isObject = __commonjs(function(module) {
        function isObject(value) {
            var type = typeof value;
            return !!value && (type == "object" || type == "function");
        }
        module.exports = isObject;
    });
    var require$$1$1 = isObject && typeof isObject === "object" && "default" in isObject ? isObject["default"] : isObject;
    var isFunction = __commonjs(function(module) {
        var isObject = require$$1$1;
        var funcTag = "[object Function]", genTag = "[object GeneratorFunction]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        function isFunction(value) {
            var tag = isObject(value) ? objectToString.call(value) : "";
            return tag == funcTag || tag == genTag;
        }
        module.exports = isFunction;
    });
    var require$$3 = isFunction && typeof isFunction === "object" && "default" in isFunction ? isFunction["default"] : isFunction;
    var toNumber = __commonjs(function(module) {
        var isFunction = require$$3, isObject = require$$1$1, isSymbol = require$$0$1;
        var NAN = 0 / 0;
        var reTrim = /^\s+|\s+$/g;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value) {
            if (typeof value == "number") {
                return value;
            }
            if (isSymbol(value)) {
                return NAN;
            }
            if (isObject(value)) {
                var other = isFunction(value.valueOf) ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
                return value === 0 ? value : +value;
            }
            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = toNumber;
    });
    var require$$0 = toNumber && typeof toNumber === "object" && "default" in toNumber ? toNumber["default"] : toNumber;
    var toInteger = __commonjs(function(module) {
        var toNumber = require$$0;
        var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e308;
        function toInteger(value) {
            if (!value) {
                return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = value < 0 ? -1 : 1;
                return sign * MAX_INTEGER;
            }
            var remainder = value % 1;
            return value === value ? remainder ? value - remainder : value : 0;
        }
        module.exports = toInteger;
    });
    var require$$1 = toInteger && typeof toInteger === "object" && "default" in toInteger ? toInteger["default"] : toInteger;
    var isInteger = __commonjs(function(module) {
        var toInteger = require$$1;
        function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
        }
        module.exports = isInteger;
    });
    var isInteger$1 = isInteger && typeof isInteger === "object" && "default" in isInteger ? isInteger["default"] : isInteger;
    var isNil = __commonjs(function(module) {
        function isNil(value) {
            return value == null;
        }
        module.exports = isNil;
    });
    var isNil$1 = isNil && typeof isNil === "object" && "default" in isNil ? isNil["default"] : isNil;
    var AP_NUMBERS = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    function apnumber(val) {
        if (isNil$1(val)) return "";
        var convertedVal = +val;
        if (!isInteger$1(convertedVal)) return val;
        if (convertedVal <= 0 || convertedVal >= 10) return val;
        return AP_NUMBERS[convertedVal - 1];
    }
    var isArray = __commonjs(function(module) {
        var isArray = Array.isArray;
        module.exports = isArray;
    });
    var require$$6 = isArray && typeof isArray === "object" && "default" in isArray ? isArray["default"] : isArray;
    var _isKey = __commonjs(function(module) {
        var isArray = require$$6, isSymbol = require$$0$1;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
        function isKey(value, object) {
            var type = typeof value;
            if (type == "number" || type == "symbol") {
                return true;
            }
            return !isArray(value) && (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object));
        }
        module.exports = isKey;
    });
    var require$$2$1 = _isKey && typeof _isKey === "object" && "default" in _isKey ? _isKey["default"] : _isKey;
    var _checkGlobal = __commonjs(function(module) {
        function checkGlobal(value) {
            return value && value.Object === Object ? value : null;
        }
        module.exports = checkGlobal;
    });
    var require$$0$7 = _checkGlobal && typeof _checkGlobal === "object" && "default" in _checkGlobal ? _checkGlobal["default"] : _checkGlobal;
    var _root = __commonjs(function(module, exports, global) {
        var checkGlobal = require$$0$7;
        var objectTypes = {
            "function": true,
            object: true
        };
        var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType ? exports : undefined;
        var freeModule = objectTypes[typeof module] && module && !module.nodeType ? module : undefined;
        var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == "object" && global);
        var freeSelf = checkGlobal(objectTypes[typeof self] && self);
        var freeWindow = checkGlobal(objectTypes[typeof window] && window);
        var thisGlobal = checkGlobal(objectTypes[typeof __commonjs_global] && __commonjs_global);
        var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function("return this")();
        module.exports = root;
    });
    var require$$0$6 = _root && typeof _root === "object" && "default" in _root ? _root["default"] : _root;
    var _Symbol = __commonjs(function(module) {
        var root = require$$0$6;
        var Symbol = root.Symbol;
        module.exports = Symbol;
    });
    var require$$4 = _Symbol && typeof _Symbol === "object" && "default" in _Symbol ? _Symbol["default"] : _Symbol;
    var toString = __commonjs(function(module) {
        var Symbol = require$$4, isSymbol = require$$0$1;
        var INFINITY = 1 / 0;
        var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        function toString(value) {
            if (typeof value == "string") {
                return value;
            }
            if (value == null) {
                return "";
            }
            if (isSymbol(value)) {
                return symbolToString ? symbolToString.call(value) : "";
            }
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        module.exports = toString;
    });
    var require$$0$5 = toString && typeof toString === "object" && "default" in toString ? toString["default"] : toString;
    var _isKeyable = __commonjs(function(module) {
        function isKeyable(value) {
            var type = typeof value;
            return type == "number" || type == "boolean" || type == "string" && value != "__proto__" || value == null;
        }
        module.exports = isKeyable;
    });
    var require$$0$9 = _isKeyable && typeof _isKeyable === "object" && "default" in _isKeyable ? _isKeyable["default"] : _isKeyable;
    var _toSource = __commonjs(function(module) {
        var funcToString = Function.prototype.toString;
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + "";
                } catch (e) {}
            }
            return "";
        }
        module.exports = toSource;
    });
    var require$$0$12 = _toSource && typeof _toSource === "object" && "default" in _toSource ? _toSource["default"] : _toSource;
    var _isHostObject = __commonjs(function(module) {
        function isHostObject(value) {
            var result = false;
            if (value != null && typeof value.toString != "function") {
                try {
                    result = !!(value + "");
                } catch (e) {}
            }
            return result;
        }
        module.exports = isHostObject;
    });
    var require$$1$8 = _isHostObject && typeof _isHostObject === "object" && "default" in _isHostObject ? _isHostObject["default"] : _isHostObject;
    var isNative = __commonjs(function(module) {
        var isFunction = require$$3, isHostObject = require$$1$8, isObject = require$$1$1, toSource = require$$0$12;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var objectProto = Object.prototype;
        var funcToString = Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function isNative(value) {
            if (!isObject(value)) {
                return false;
            }
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        module.exports = isNative;
    });
    var require$$0$11 = isNative && typeof isNative === "object" && "default" in isNative ? isNative["default"] : isNative;
    var _getNative = __commonjs(function(module) {
        var isNative = require$$0$11;
        function getNative(object, key) {
            var value = object[key];
            return isNative(value) ? value : undefined;
        }
        module.exports = getNative;
    });
    var require$$1$7 = _getNative && typeof _getNative === "object" && "default" in _getNative ? _getNative["default"] : _getNative;
    var _nativeCreate = __commonjs(function(module) {
        var getNative = require$$1$7;
        var nativeCreate = getNative(Object, "create");
        module.exports = nativeCreate;
    });
    var require$$0$10 = _nativeCreate && typeof _nativeCreate === "object" && "default" in _nativeCreate ? _nativeCreate["default"] : _nativeCreate;
    var _hashSet = __commonjs(function(module) {
        var nativeCreate = require$$0$10;
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function hashSet(hash, key, value) {
            hash[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
        }
        module.exports = hashSet;
    });
    var require$$1$6 = _hashSet && typeof _hashSet === "object" && "default" in _hashSet ? _hashSet["default"] : _hashSet;
    var eq = __commonjs(function(module) {
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    });
    var require$$0$15 = eq && typeof eq === "object" && "default" in eq ? eq["default"] : eq;
    var _assocIndexOf = __commonjs(function(module) {
        var eq = require$$0$15;
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
    var require$$0$14 = _assocIndexOf && typeof _assocIndexOf === "object" && "default" in _assocIndexOf ? _assocIndexOf["default"] : _assocIndexOf;
    var _assocSet = __commonjs(function(module) {
        var assocIndexOf = require$$0$14;
        function assocSet(array, key, value) {
            var index = assocIndexOf(array, key);
            if (index < 0) {
                array.push([ key, value ]);
            } else {
                array[index][1] = value;
            }
        }
        module.exports = assocSet;
    });
    var require$$0$13 = _assocSet && typeof _assocSet === "object" && "default" in _assocSet ? _assocSet["default"] : _assocSet;
    var _Map = __commonjs(function(module) {
        var getNative = require$$1$7, root = require$$0$6;
        var Map = getNative(root, "Map");
        module.exports = Map;
    });
    var require$$4$1 = _Map && typeof _Map === "object" && "default" in _Map ? _Map["default"] : _Map;
    var _mapSet = __commonjs(function(module) {
        var Map = require$$4$1, assocSet = require$$0$13, hashSet = require$$1$6, isKeyable = require$$0$9;
        function mapSet(key, value) {
            var data = this.__data__;
            if (isKeyable(key)) {
                hashSet(typeof key == "string" ? data.string : data.hash, key, value);
            } else if (Map) {
                data.map.set(key, value);
            } else {
                assocSet(data.map, key, value);
            }
            return this;
        }
        module.exports = mapSet;
    });
    var require$$0$8 = _mapSet && typeof _mapSet === "object" && "default" in _mapSet ? _mapSet["default"] : _mapSet;
    var _hashHas = __commonjs(function(module) {
        var nativeCreate = require$$0$10;
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function hashHas(hash, key) {
            return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
        }
        module.exports = hashHas;
    });
    var require$$0$16 = _hashHas && typeof _hashHas === "object" && "default" in _hashHas ? _hashHas["default"] : _hashHas;
    var _assocHas = __commonjs(function(module) {
        var assocIndexOf = require$$0$14;
        function assocHas(array, key) {
            return assocIndexOf(array, key) > -1;
        }
        module.exports = assocHas;
    });
    var require$$0$17 = _assocHas && typeof _assocHas === "object" && "default" in _assocHas ? _assocHas["default"] : _assocHas;
    var _mapHas = __commonjs(function(module) {
        var Map = require$$4$1, assocHas = require$$0$17, hashHas = require$$0$16, isKeyable = require$$0$9;
        function mapHas(key) {
            var data = this.__data__;
            if (isKeyable(key)) {
                return hashHas(typeof key == "string" ? data.string : data.hash, key);
            }
            return Map ? data.map.has(key) : assocHas(data.map, key);
        }
        module.exports = mapHas;
    });
    var require$$1$9 = _mapHas && typeof _mapHas === "object" && "default" in _mapHas ? _mapHas["default"] : _mapHas;
    var _hashGet = __commonjs(function(module) {
        var nativeCreate = require$$0$10;
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function hashGet(hash, key) {
            if (nativeCreate) {
                var result = hash[key];
                return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
        }
        module.exports = hashGet;
    });
    var require$$1$10 = _hashGet && typeof _hashGet === "object" && "default" in _hashGet ? _hashGet["default"] : _hashGet;
    var _assocGet = __commonjs(function(module) {
        var assocIndexOf = require$$0$14;
        function assocGet(array, key) {
            var index = assocIndexOf(array, key);
            return index < 0 ? undefined : array[index][1];
        }
        module.exports = assocGet;
    });
    var require$$0$18 = _assocGet && typeof _assocGet === "object" && "default" in _assocGet ? _assocGet["default"] : _assocGet;
    var _mapGet = __commonjs(function(module) {
        var Map = require$$4$1, assocGet = require$$0$18, hashGet = require$$1$10, isKeyable = require$$0$9;
        function mapGet(key) {
            var data = this.__data__;
            if (isKeyable(key)) {
                return hashGet(typeof key == "string" ? data.string : data.hash, key);
            }
            return Map ? data.map.get(key) : assocGet(data.map, key);
        }
        module.exports = mapGet;
    });
    var require$$2$2 = _mapGet && typeof _mapGet === "object" && "default" in _mapGet ? _mapGet["default"] : _mapGet;
    var _hashDelete = __commonjs(function(module) {
        var hashHas = require$$0$16;
        function hashDelete(hash, key) {
            return hashHas(hash, key) && delete hash[key];
        }
        module.exports = hashDelete;
    });
    var require$$1$11 = _hashDelete && typeof _hashDelete === "object" && "default" in _hashDelete ? _hashDelete["default"] : _hashDelete;
    var _assocDelete = __commonjs(function(module) {
        var assocIndexOf = require$$0$14;
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
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
    var require$$0$19 = _assocDelete && typeof _assocDelete === "object" && "default" in _assocDelete ? _assocDelete["default"] : _assocDelete;
    var _mapDelete = __commonjs(function(module) {
        var Map = require$$4$1, assocDelete = require$$0$19, hashDelete = require$$1$11, isKeyable = require$$0$9;
        function mapDelete(key) {
            var data = this.__data__;
            if (isKeyable(key)) {
                return hashDelete(typeof key == "string" ? data.string : data.hash, key);
            }
            return Map ? data.map["delete"](key) : assocDelete(data.map, key);
        }
        module.exports = mapDelete;
    });
    var require$$3$1 = _mapDelete && typeof _mapDelete === "object" && "default" in _mapDelete ? _mapDelete["default"] : _mapDelete;
    var _Hash = __commonjs(function(module) {
        var nativeCreate = require$$0$10;
        var objectProto = Object.prototype;
        function Hash() {}
        Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
        module.exports = Hash;
    });
    var require$$1$12 = _Hash && typeof _Hash === "object" && "default" in _Hash ? _Hash["default"] : _Hash;
    var _mapClear = __commonjs(function(module) {
        var Hash = require$$1$12, Map = require$$4$1;
        function mapClear() {
            this.__data__ = {
                hash: new Hash(),
                map: Map ? new Map() : [],
                string: new Hash()
            };
        }
        module.exports = mapClear;
    });
    var require$$4$2 = _mapClear && typeof _mapClear === "object" && "default" in _mapClear ? _mapClear["default"] : _mapClear;
    var _MapCache = __commonjs(function(module) {
        var mapClear = require$$4$2, mapDelete = require$$3$1, mapGet = require$$2$2, mapHas = require$$1$9, mapSet = require$$0$8;
        function MapCache(values) {
            var index = -1, length = values ? values.length : 0;
            this.clear();
            while (++index < length) {
                var entry = values[index];
                this.set(entry[0], entry[1]);
            }
        }
        MapCache.prototype.clear = mapClear;
        MapCache.prototype["delete"] = mapDelete;
        MapCache.prototype.get = mapGet;
        MapCache.prototype.has = mapHas;
        MapCache.prototype.set = mapSet;
        module.exports = MapCache;
    });
    var require$$1$5 = _MapCache && typeof _MapCache === "object" && "default" in _MapCache ? _MapCache["default"] : _MapCache;
    var memoize = __commonjs(function(module) {
        var MapCache = require$$1$5;
        var FUNC_ERROR_TEXT = "Expected a function";
        function memoize(func, resolver) {
            if (typeof func != "function" || resolver && typeof resolver != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) {
                    return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result);
                return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
        }
        memoize.Cache = MapCache;
        module.exports = memoize;
    });
    var require$$1$4 = memoize && typeof memoize === "object" && "default" in memoize ? memoize["default"] : memoize;
    var _stringToPath = __commonjs(function(module) {
        var memoize = require$$1$4, toString = require$$0$5;
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = memoize(function(string) {
            var result = [];
            toString(string).replace(rePropName, function(match, number, quote, string) {
                result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
            });
            return result;
        });
        module.exports = stringToPath;
    });
    var require$$0$4 = _stringToPath && typeof _stringToPath === "object" && "default" in _stringToPath ? _stringToPath["default"] : _stringToPath;
    var _castPath = __commonjs(function(module) {
        var isArray = require$$6, stringToPath = require$$0$4;
        function castPath(value) {
            return isArray(value) ? value : stringToPath(value);
        }
        module.exports = castPath;
    });
    var require$$6$1 = _castPath && typeof _castPath === "object" && "default" in _castPath ? _castPath["default"] : _castPath;
    var _baseGet = __commonjs(function(module) {
        var castPath = require$$6$1, isKey = require$$2$1;
        function baseGet(object, path) {
            path = isKey(path, object) ? [ path ] : castPath(path);
            var index = 0, length = path.length;
            while (object != null && index < length) {
                object = object[path[index++]];
            }
            return index && index == length ? object : undefined;
        }
        module.exports = baseGet;
    });
    var require$$0$3 = _baseGet && typeof _baseGet === "object" && "default" in _baseGet ? _baseGet["default"] : _baseGet;
    var _basePropertyDeep = __commonjs(function(module) {
        var baseGet = require$$0$3;
        function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path);
            };
        }
        module.exports = basePropertyDeep;
    });
    var require$$1$3 = _basePropertyDeep && typeof _basePropertyDeep === "object" && "default" in _basePropertyDeep ? _basePropertyDeep["default"] : _basePropertyDeep;
    var _baseProperty = __commonjs(function(module) {
        function baseProperty(key) {
            return function(object) {
                return object == null ? undefined : object[key];
            };
        }
        module.exports = baseProperty;
    });
    var require$$0$20 = _baseProperty && typeof _baseProperty === "object" && "default" in _baseProperty ? _baseProperty["default"] : _baseProperty;
    var property = __commonjs(function(module) {
        var baseProperty = require$$0$20, basePropertyDeep = require$$1$3, isKey = require$$2$1;
        function property(path) {
            return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
        }
        module.exports = property;
    });
    var require$$0$2 = property && typeof property === "object" && "default" in property ? property["default"] : property;
    var identity = __commonjs(function(module) {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    });
    var require$$2$3 = identity && typeof identity === "object" && "default" in identity ? identity["default"] : identity;
    var _matchesStrictComparable = __commonjs(function(module) {
        function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (object == null) {
                    return false;
                }
                return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
            };
        }
        module.exports = matchesStrictComparable;
    });
    var require$$0$21 = _matchesStrictComparable && typeof _matchesStrictComparable === "object" && "default" in _matchesStrictComparable ? _matchesStrictComparable["default"] : _matchesStrictComparable;
    var _isStrictComparable = __commonjs(function(module) {
        var isObject = require$$1$1;
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        module.exports = isStrictComparable;
    });
    var require$$1$13 = _isStrictComparable && typeof _isStrictComparable === "object" && "default" in _isStrictComparable ? _isStrictComparable["default"] : _isStrictComparable;
    var isString = __commonjs(function(module) {
        var isArray = require$$6, isObjectLike = require$$2;
        var stringTag = "[object String]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
        }
        module.exports = isString;
    });
    var require$$2$4 = isString && typeof isString === "object" && "default" in isString ? isString["default"] : isString;
    var isLength = __commonjs(function(module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        module.exports = isLength;
    });
    var require$$1$14 = isLength && typeof isLength === "object" && "default" in isLength ? isLength["default"] : isLength;
    var _isIndex = __commonjs(function(module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value, length) {
            value = typeof value == "number" || reIsUint.test(value) ? +value : -1;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return value > -1 && value % 1 == 0 && value < length;
        }
        module.exports = isIndex;
    });
    var require$$1$15 = _isIndex && typeof _isIndex === "object" && "default" in _isIndex ? _isIndex["default"] : _isIndex;
    var _getLength = __commonjs(function(module) {
        var baseProperty = require$$0$20;
        var getLength = baseProperty("length");
        module.exports = getLength;
    });
    var require$$2$5 = _getLength && typeof _getLength === "object" && "default" in _getLength ? _getLength["default"] : _getLength;
    var isArrayLike = __commonjs(function(module) {
        var getLength = require$$2$5, isFunction = require$$3, isLength = require$$1$14;
        function isArrayLike(value) {
            return value != null && isLength(getLength(value)) && !isFunction(value);
        }
        module.exports = isArrayLike;
    });
    var require$$3$4 = isArrayLike && typeof isArrayLike === "object" && "default" in isArrayLike ? isArrayLike["default"] : isArrayLike;
    var isArrayLikeObject = __commonjs(function(module) {
        var isArrayLike = require$$3$4, isObjectLike = require$$2;
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        module.exports = isArrayLikeObject;
    });
    var require$$0$23 = isArrayLikeObject && typeof isArrayLikeObject === "object" && "default" in isArrayLikeObject ? isArrayLikeObject["default"] : isArrayLikeObject;
    var isArguments = __commonjs(function(module) {
        var isArrayLikeObject = require$$0$23;
        var argsTag = "[object Arguments]";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectToString = objectProto.toString;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        function isArguments(value) {
            return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
        }
        module.exports = isArguments;
    });
    var require$$7 = isArguments && typeof isArguments === "object" && "default" in isArguments ? isArguments["default"] : isArguments;
    var _hasPath = __commonjs(function(module) {
        var castPath = require$$6$1, isArguments = require$$7, isArray = require$$6, isIndex = require$$1$15, isKey = require$$2$1, isLength = require$$1$14, isString = require$$2$4;
        function hasPath(object, path, hasFunc) {
            path = isKey(path, object) ? [ path ] : castPath(path);
            var result, index = -1, length = path.length;
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
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
        }
        module.exports = hasPath;
    });
    var require$$0$22 = _hasPath && typeof _hasPath === "object" && "default" in _hasPath ? _hasPath["default"] : _hasPath;
    var _baseHasIn = __commonjs(function(module) {
        function baseHasIn(object, key) {
            return key in Object(object);
        }
        module.exports = baseHasIn;
    });
    var require$$1$16 = _baseHasIn && typeof _baseHasIn === "object" && "default" in _baseHasIn ? _baseHasIn["default"] : _baseHasIn;
    var hasIn = __commonjs(function(module) {
        var baseHasIn = require$$1$16, hasPath = require$$0$22;
        function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
        }
        module.exports = hasIn;
    });
    var require$$3$3 = hasIn && typeof hasIn === "object" && "default" in hasIn ? hasIn["default"] : hasIn;
    var get = __commonjs(function(module) {
        var baseGet = require$$0$3;
        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
        }
        module.exports = get;
    });
    var require$$4$3 = get && typeof get === "object" && "default" in get ? get["default"] : get;
    var isTypedArray = __commonjs(function(module) {
        var isLength = require$$1$14, isObjectLike = require$$2;
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        function isTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }
        module.exports = isTypedArray;
    });
    var require$$0$25 = isTypedArray && typeof isTypedArray === "object" && "default" in isTypedArray ? isTypedArray["default"] : isTypedArray;
    var _WeakMap = __commonjs(function(module) {
        var getNative = require$$1$7, root = require$$0$6;
        var WeakMap = getNative(root, "WeakMap");
        module.exports = WeakMap;
    });
    var require$$1$17 = _WeakMap && typeof _WeakMap === "object" && "default" in _WeakMap ? _WeakMap["default"] : _WeakMap;
    var _Set = __commonjs(function(module) {
        var getNative = require$$1$7, root = require$$0$6;
        var Set = getNative(root, "Set");
        module.exports = Set;
    });
    var require$$2$7 = _Set && typeof _Set === "object" && "default" in _Set ? _Set["default"] : _Set;
    var _Promise = __commonjs(function(module) {
        var getNative = require$$1$7, root = require$$0$6;
        var Promise = getNative(root, "Promise");
        module.exports = Promise;
    });
    var require$$3$5 = _Promise && typeof _Promise === "object" && "default" in _Promise ? _Promise["default"] : _Promise;
    var _DataView = __commonjs(function(module) {
        var getNative = require$$1$7, root = require$$0$6;
        var DataView = getNative(root, "DataView");
        module.exports = DataView;
    });
    var require$$5 = _DataView && typeof _DataView === "object" && "default" in _DataView ? _DataView["default"] : _DataView;
    var _getTag = __commonjs(function(module) {
        var DataView = require$$5, Map = require$$4$1, Promise = require$$3$5, Set = require$$2$7, WeakMap = require$$1$17, toSource = require$$0$12;
        var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
        var dataViewTag = "[object DataView]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        function getTag(value) {
            return objectToString.call(value);
        }
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function(value) {
                var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : undefined;
                if (ctorString) {
                    switch (ctorString) {
                      case dataViewCtorString:
                        return dataViewTag;

                      case mapCtorString:
                        return mapTag;

                      case promiseCtorString:
                        return promiseTag;

                      case setCtorString:
                        return setTag;

                      case weakMapCtorString:
                        return weakMapTag;
                    }
                }
                return result;
            };
        }
        module.exports = getTag;
    });
    var require$$8 = _getTag && typeof _getTag === "object" && "default" in _getTag ? _getTag["default"] : _getTag;
    var _isPrototype = __commonjs(function(module) {
        var objectProto = Object.prototype;
        function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
        }
        module.exports = isPrototype;
    });
    var require$$0$27 = _isPrototype && typeof _isPrototype === "object" && "default" in _isPrototype ? _isPrototype["default"] : _isPrototype;
    var _baseTimes = __commonjs(function(module) {
        function baseTimes(n, iteratee) {
            var index = -1, result = Array(n);
            while (++index < n) {
                result[index] = iteratee(index);
            }
            return result;
        }
        module.exports = baseTimes;
    });
    var require$$4$5 = _baseTimes && typeof _baseTimes === "object" && "default" in _baseTimes ? _baseTimes["default"] : _baseTimes;
    var _indexKeys = __commonjs(function(module) {
        var baseTimes = require$$4$5, isArguments = require$$7, isArray = require$$6, isLength = require$$1$14, isString = require$$2$4;
        function indexKeys(object) {
            var length = object ? object.length : undefined;
            if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
                return baseTimes(length, String);
            }
            return null;
        }
        module.exports = indexKeys;
    });
    var require$$3$6 = _indexKeys && typeof _indexKeys === "object" && "default" in _indexKeys ? _indexKeys["default"] : _indexKeys;
    var _baseKeys = __commonjs(function(module) {
        var nativeKeys = Object.keys;
        function baseKeys(object) {
            return nativeKeys(Object(object));
        }
        module.exports = baseKeys;
    });
    var require$$4$6 = _baseKeys && typeof _baseKeys === "object" && "default" in _baseKeys ? _baseKeys["default"] : _baseKeys;
    var _getPrototype = __commonjs(function(module) {
        var nativeGetPrototype = Object.getPrototypeOf;
        function getPrototype(value) {
            return nativeGetPrototype(Object(value));
        }
        module.exports = getPrototype;
    });
    var require$$0$28 = _getPrototype && typeof _getPrototype === "object" && "default" in _getPrototype ? _getPrototype["default"] : _getPrototype;
    var _baseHas = __commonjs(function(module) {
        var getPrototype = require$$0$28;
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseHas(object, key) {
            return hasOwnProperty.call(object, key) || typeof object == "object" && key in object && getPrototype(object) === null;
        }
        module.exports = baseHas;
    });
    var require$$5$1 = _baseHas && typeof _baseHas === "object" && "default" in _baseHas ? _baseHas["default"] : _baseHas;
    var keys = __commonjs(function(module) {
        var baseHas = require$$5$1, baseKeys = require$$4$6, indexKeys = require$$3$6, isArrayLike = require$$3$4, isIndex = require$$1$15, isPrototype = require$$0$27;
        function keys(object) {
            var isProto = isPrototype(object);
            if (!(isProto || isArrayLike(object))) {
                return baseKeys(object);
            }
            var indexes = indexKeys(object), skipIndexes = !!indexes, result = indexes || [], length = result.length;
            for (var key in object) {
                if (baseHas(object, key) && !(skipIndexes && (key == "length" || isIndex(key, length))) && !(isProto && key == "constructor")) {
                    result.push(key);
                }
            }
            return result;
        }
        module.exports = keys;
    });
    var require$$0$26 = keys && typeof keys === "object" && "default" in keys ? keys["default"] : keys;
    var _equalObjects = __commonjs(function(module) {
        var baseHas = require$$5$1, keys = require$$0$26;
        var PARTIAL_COMPARE_FLAG = 2;
        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
            var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
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
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            var result = true;
            stack.set(object, other);
            var skipCtor = isPartial;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) {
                    var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                }
                if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = key == "constructor");
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                    result = false;
                }
            }
            stack["delete"](object);
            return result;
        }
        module.exports = equalObjects;
    });
    var require$$4$4 = _equalObjects && typeof _equalObjects === "object" && "default" in _equalObjects ? _equalObjects["default"] : _equalObjects;
    var _setToArray = __commonjs(function(module) {
        function setToArray(set) {
            var index = -1, result = Array(set.size);
            set.forEach(function(value) {
                result[++index] = value;
            });
            return result;
        }
        module.exports = setToArray;
    });
    var require$$0$29 = _setToArray && typeof _setToArray === "object" && "default" in _setToArray ? _setToArray["default"] : _setToArray;
    var _mapToArray = __commonjs(function(module) {
        function mapToArray(map) {
            var index = -1, result = Array(map.size);
            map.forEach(function(value, key) {
                result[++index] = [ key, value ];
            });
            return result;
        }
        module.exports = mapToArray;
    });
    var require$$1$18 = _mapToArray && typeof _mapToArray === "object" && "default" in _mapToArray ? _mapToArray["default"] : _mapToArray;
    var _arraySome = __commonjs(function(module) {
        function arraySome(array, predicate) {
            var index = -1, length = array.length;
            while (++index < length) {
                if (predicate(array[index], index, array)) {
                    return true;
                }
            }
            return false;
        }
        module.exports = arraySome;
    });
    var require$$0$30 = _arraySome && typeof _arraySome === "object" && "default" in _arraySome ? _arraySome["default"] : _arraySome;
    var _equalArrays = __commonjs(function(module) {
        var arraySome = require$$0$30;
        var UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2;
        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
            var index = -1, isPartial = bitmask & PARTIAL_COMPARE_FLAG, isUnordered = bitmask & UNORDERED_COMPARE_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
            }
            var stacked = stack.get(array);
            if (stacked) {
                return stacked == other;
            }
            var result = true;
            stack.set(array, other);
            while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index];
                if (customizer) {
                    var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                }
                if (compared !== undefined) {
                    if (compared) {
                        continue;
                    }
                    result = false;
                    break;
                }
                if (isUnordered) {
                    if (!arraySome(other, function(othValue) {
                        return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
                    })) {
                        result = false;
                        break;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                    result = false;
                    break;
                }
            }
            stack["delete"](array);
            return result;
        }
        module.exports = equalArrays;
    });
    var require$$2$8 = _equalArrays && typeof _equalArrays === "object" && "default" in _equalArrays ? _equalArrays["default"] : _equalArrays;
    var _Uint8Array = __commonjs(function(module) {
        var root = require$$0$6;
        var Uint8Array = root.Uint8Array;
        module.exports = Uint8Array;
    });
    var require$$3$7 = _Uint8Array && typeof _Uint8Array === "object" && "default" in _Uint8Array ? _Uint8Array["default"] : _Uint8Array;
    var _equalByTag = __commonjs(function(module) {
        var Symbol = require$$4, Uint8Array = require$$3$7, equalArrays = require$$2$8, mapToArray = require$$1$18, setToArray = require$$0$29;
        var UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2;
        var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
        var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
        function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                    return false;
                }
                object = object.buffer;
                other = other.buffer;

              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                    return false;
                }
                return true;

              case boolTag:
              case dateTag:
                return +object == +other;

              case errorTag:
                return object.name == other.name && object.message == other.message;

              case numberTag:
                return object != +object ? other != +other : object == +other;

              case regexpTag:
              case stringTag:
                return object == other + "";

              case mapTag:
                var convert = mapToArray;

              case setTag:
                var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                    return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                    return stacked == other;
                }
                bitmask |= UNORDERED_COMPARE_FLAG;
                stack.set(object, other);
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
    var require$$5$2 = _equalByTag && typeof _equalByTag === "object" && "default" in _equalByTag ? _equalByTag["default"] : _equalByTag;
    var _stackSet = __commonjs(function(module) {
        var MapCache = require$$1$5, assocSet = require$$0$13;
        var LARGE_ARRAY_SIZE = 200;
        function stackSet(key, value) {
            var data = this.__data__, array = data.array;
            if (array) {
                if (array.length < LARGE_ARRAY_SIZE - 1) {
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
    var require$$0$31 = _stackSet && typeof _stackSet === "object" && "default" in _stackSet ? _stackSet["default"] : _stackSet;
    var _stackHas = __commonjs(function(module) {
        var assocHas = require$$0$17;
        function stackHas(key) {
            var data = this.__data__, array = data.array;
            return array ? assocHas(array, key) : data.map.has(key);
        }
        module.exports = stackHas;
    });
    var require$$1$20 = _stackHas && typeof _stackHas === "object" && "default" in _stackHas ? _stackHas["default"] : _stackHas;
    var _stackGet = __commonjs(function(module) {
        var assocGet = require$$0$18;
        function stackGet(key) {
            var data = this.__data__, array = data.array;
            return array ? assocGet(array, key) : data.map.get(key);
        }
        module.exports = stackGet;
    });
    var require$$2$9 = _stackGet && typeof _stackGet === "object" && "default" in _stackGet ? _stackGet["default"] : _stackGet;
    var _stackDelete = __commonjs(function(module) {
        var assocDelete = require$$0$19;
        function stackDelete(key) {
            var data = this.__data__, array = data.array;
            return array ? assocDelete(array, key) : data.map["delete"](key);
        }
        module.exports = stackDelete;
    });
    var require$$3$8 = _stackDelete && typeof _stackDelete === "object" && "default" in _stackDelete ? _stackDelete["default"] : _stackDelete;
    var _stackClear = __commonjs(function(module) {
        function stackClear() {
            this.__data__ = {
                array: [],
                map: null
            };
        }
        module.exports = stackClear;
    });
    var require$$4$7 = _stackClear && typeof _stackClear === "object" && "default" in _stackClear ? _stackClear["default"] : _stackClear;
    var _Stack = __commonjs(function(module) {
        var stackClear = require$$4$7, stackDelete = require$$3$8, stackGet = require$$2$9, stackHas = require$$1$20, stackSet = require$$0$31;
        function Stack(values) {
            var index = -1, length = values ? values.length : 0;
            this.clear();
            while (++index < length) {
                var entry = values[index];
                this.set(entry[0], entry[1]);
            }
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        module.exports = Stack;
    });
    var require$$1$19 = _Stack && typeof _Stack === "object" && "default" in _Stack ? _Stack["default"] : _Stack;
    var _baseIsEqualDeep = __commonjs(function(module) {
        var Stack = require$$1$19, equalArrays = require$$2$8, equalByTag = require$$5$2, equalObjects = require$$4$4, getTag = require$$8, isArray = require$$6, isHostObject = require$$1$8, isTypedArray = require$$0$25;
        var PARTIAL_COMPARE_FLAG = 2;
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
            if (!objIsArr) {
                objTag = getTag(object);
                objTag = objTag == argsTag ? objectTag : objTag;
            }
            if (!othIsArr) {
                othTag = getTag(other);
                othTag = othTag == argsTag ? objectTag : othTag;
            }
            var objIsObj = objTag == objectTag && !isHostObject(object), othIsObj = othTag == objectTag && !isHostObject(other), isSameTag = objTag == othTag;
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack());
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
            }
            if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack());
                    return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
                }
            }
            if (!isSameTag) {
                return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
        }
        module.exports = baseIsEqualDeep;
    });
    var require$$2$6 = _baseIsEqualDeep && typeof _baseIsEqualDeep === "object" && "default" in _baseIsEqualDeep ? _baseIsEqualDeep["default"] : _baseIsEqualDeep;
    var _baseIsEqual = __commonjs(function(module) {
        var baseIsEqualDeep = require$$2$6, isObject = require$$1$1, isObjectLike = require$$2;
        function baseIsEqual(value, other, customizer, bitmask, stack) {
            if (value === other) {
                return true;
            }
            if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
                return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }
        module.exports = baseIsEqual;
    });
    var require$$0$24 = _baseIsEqual && typeof _baseIsEqual === "object" && "default" in _baseIsEqual ? _baseIsEqual["default"] : _baseIsEqual;
    var _baseMatchesProperty = __commonjs(function(module) {
        var baseIsEqual = require$$0$24, get = require$$4$3, hasIn = require$$3$3, isKey = require$$2$1, isStrictComparable = require$$1$13, matchesStrictComparable = require$$0$21;
        var UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2;
        function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
                return matchesStrictComparable(path, srcValue);
            }
            return function(object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
            };
        }
        module.exports = baseMatchesProperty;
    });
    var require$$3$2 = _baseMatchesProperty && typeof _baseMatchesProperty === "object" && "default" in _baseMatchesProperty ? _baseMatchesProperty["default"] : _baseMatchesProperty;
    var _arrayMap = __commonjs(function(module) {
        function arrayMap(array, iteratee) {
            var index = -1, length = array.length, result = Array(length);
            while (++index < length) {
                result[index] = iteratee(array[index], index, array);
            }
            return result;
        }
        module.exports = arrayMap;
    });
    var require$$0$33 = _arrayMap && typeof _arrayMap === "object" && "default" in _arrayMap ? _arrayMap["default"] : _arrayMap;
    var _baseToPairs = __commonjs(function(module) {
        var arrayMap = require$$0$33;
        function baseToPairs(object, props) {
            return arrayMap(props, function(key) {
                return [ key, object[key] ];
            });
        }
        module.exports = baseToPairs;
    });
    var require$$1$22 = _baseToPairs && typeof _baseToPairs === "object" && "default" in _baseToPairs ? _baseToPairs["default"] : _baseToPairs;
    var toPairs = __commonjs(function(module) {
        var baseToPairs = require$$1$22, keys = require$$0$26;
        function toPairs(object) {
            return baseToPairs(object, keys(object));
        }
        module.exports = toPairs;
    });
    var require$$0$32 = toPairs && typeof toPairs === "object" && "default" in toPairs ? toPairs["default"] : toPairs;
    var _getMatchData = __commonjs(function(module) {
        var isStrictComparable = require$$1$13, toPairs = require$$0$32;
        function getMatchData(object) {
            var result = toPairs(object), length = result.length;
            while (length--) {
                result[length][2] = isStrictComparable(result[length][1]);
            }
            return result;
        }
        module.exports = getMatchData;
    });
    var require$$1$21 = _getMatchData && typeof _getMatchData === "object" && "default" in _getMatchData ? _getMatchData["default"] : _getMatchData;
    var _baseIsMatch = __commonjs(function(module) {
        var Stack = require$$1$19, baseIsEqual = require$$0$24;
        var UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2;
        function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (index--) {
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                    return false;
                }
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                        return false;
                    }
                } else {
                    var stack = new Stack();
                    if (customizer) {
                        var result = customizer(objValue, srcValue, key, object, source, stack);
                    }
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                        return false;
                    }
                }
            }
            return true;
        }
        module.exports = baseIsMatch;
    });
    var require$$2$10 = _baseIsMatch && typeof _baseIsMatch === "object" && "default" in _baseIsMatch ? _baseIsMatch["default"] : _baseIsMatch;
    var _baseMatches = __commonjs(function(module) {
        var baseIsMatch = require$$2$10, getMatchData = require$$1$21, matchesStrictComparable = require$$0$21;
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
    var require$$4$8 = _baseMatches && typeof _baseMatches === "object" && "default" in _baseMatches ? _baseMatches["default"] : _baseMatches;
    var _baseIteratee = __commonjs(function(module) {
        var baseMatches = require$$4$8, baseMatchesProperty = require$$3$2, identity = require$$2$3, isArray = require$$6, property = require$$0$2;
        function baseIteratee(value) {
            if (typeof value == "function") {
                return value;
            }
            if (value == null) {
                return identity;
            }
            if (typeof value == "object") {
                return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
        }
        module.exports = baseIteratee;
    });
    var require$$1$2 = _baseIteratee && typeof _baseIteratee === "object" && "default" in _baseIteratee ? _baseIteratee["default"] : _baseIteratee;
    var _baseFindIndex = __commonjs(function(module) {
        function baseFindIndex(array, predicate, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while (fromRight ? index-- : ++index < length) {
                if (predicate(array[index], index, array)) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = baseFindIndex;
    });
    var require$$2$11 = _baseFindIndex && typeof _baseFindIndex === "object" && "default" in _baseFindIndex ? _baseFindIndex["default"] : _baseFindIndex;
    var _baseFind = __commonjs(function(module) {
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
    var require$$3$9 = _baseFind && typeof _baseFind === "object" && "default" in _baseFind ? _baseFind["default"] : _baseFind;
    var _createBaseEach = __commonjs(function(module) {
        var isArrayLike = require$$3$4;
        function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
                if (collection == null) {
                    return collection;
                }
                if (!isArrayLike(collection)) {
                    return eachFunc(collection, iteratee);
                }
                var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
                while (fromRight ? index-- : ++index < length) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                        break;
                    }
                }
                return collection;
            };
        }
        module.exports = createBaseEach;
    });
    var require$$0$34 = _createBaseEach && typeof _createBaseEach === "object" && "default" in _createBaseEach ? _createBaseEach["default"] : _createBaseEach;
    var _createBaseFor = __commonjs(function(module) {
        function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
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
    var require$$0$35 = _createBaseFor && typeof _createBaseFor === "object" && "default" in _createBaseFor ? _createBaseFor["default"] : _createBaseFor;
    var _baseFor = __commonjs(function(module) {
        var createBaseFor = require$$0$35;
        var baseFor = createBaseFor();
        module.exports = baseFor;
    });
    var require$$1$24 = _baseFor && typeof _baseFor === "object" && "default" in _baseFor ? _baseFor["default"] : _baseFor;
    var _baseForOwn = __commonjs(function(module) {
        var baseFor = require$$1$24, keys = require$$0$26;
        function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        module.exports = baseForOwn;
    });
    var require$$1$23 = _baseForOwn && typeof _baseForOwn === "object" && "default" in _baseForOwn ? _baseForOwn["default"] : _baseForOwn;
    var _baseEach = __commonjs(function(module) {
        var baseForOwn = require$$1$23, createBaseEach = require$$0$34;
        var baseEach = createBaseEach(baseForOwn);
        module.exports = baseEach;
    });
    var require$$4$9 = _baseEach && typeof _baseEach === "object" && "default" in _baseEach ? _baseEach["default"] : _baseEach;
    var find = __commonjs(function(module) {
        var baseEach = require$$4$9, baseFind = require$$3$9, baseFindIndex = require$$2$11, baseIteratee = require$$1$2, isArray = require$$6;
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
    var find$1 = find && typeof find === "object" && "default" in find ? find["default"] : find;
    var constant = __commonjs(function(module) {
        function constant(value) {
            return function() {
                return value;
            };
        }
        module.exports = constant;
    });
    var require$$1$25 = constant && typeof constant === "object" && "default" in constant ? constant["default"] : constant;
    var isBuffer = __commonjs(function(module, exports) {
        var constant = require$$1$25, root = require$$0$6;
        var objectTypes = {
            "function": true,
            object: true
        };
        var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType ? exports : undefined;
        var freeModule = objectTypes[typeof module] && module && !module.nodeType ? module : undefined;
        var moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : undefined;
        var Buffer = moduleExports ? root.Buffer : undefined;
        var isBuffer = !Buffer ? constant(false) : function(value) {
            return value instanceof Buffer;
        };
        module.exports = isBuffer;
    });
    var require$$4$10 = isBuffer && typeof isBuffer === "object" && "default" in isBuffer ? isBuffer["default"] : isBuffer;
    var isEmpty = __commonjs(function(module) {
        var getTag = require$$8, isArguments = require$$7, isArray = require$$6, isArrayLike = require$$3$4, isBuffer = require$$4$10, isFunction = require$$3, isObjectLike = require$$2, isString = require$$2$4, keys = require$$0$26;
        var mapTag = "[object Map]", setTag = "[object Set]";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var nonEnumShadows = !propertyIsEnumerable.call({
            valueOf: 1
        }, "valueOf");
        function isEmpty(value) {
            if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) {
                return !value.length;
            }
            if (isObjectLike(value)) {
                var tag = getTag(value);
                if (tag == mapTag || tag == setTag) {
                    return !value.size;
                }
            }
            for (var key in value) {
                if (hasOwnProperty.call(value, key)) {
                    return false;
                }
            }
            return !(nonEnumShadows && keys(value).length);
        }
        module.exports = isEmpty;
    });
    var isEmpty$1 = isEmpty && typeof isEmpty === "object" && "default" in isEmpty ? isEmpty["default"] : isEmpty;
    function lookup(val, reverse, list, keyOne, keyTwo) {
        reverse = reverse || false;
        if (isNil$1(val)) return "";
        if (!require$$2$4(val)) return val;
        var lookupKey, outputKey;
        if (reverse) {
            lookupKey = keyTwo;
            outputKey = keyOne;
        } else {
            lookupKey = keyOne;
            outputKey = keyTwo;
        }
        var match = find$1(list, [ lookupKey, val ]);
        if (!match) return val;
        var newVal = match[outputKey];
        if (isEmpty$1(newVal)) return val;
        return newVal;
    }
    var AP_STATES = [ {
        state: "Alabama",
        ap: "Ala.",
        usps: "AL"
    }, {
        state: "Alaska",
        ap: "Alaska",
        usps: "AK"
    }, {
        state: "Arizona",
        ap: "Ariz.",
        usps: "AZ"
    }, {
        state: "Arkansas",
        ap: "Ark.",
        usps: "AR"
    }, {
        state: "California",
        ap: "Calif.",
        usps: "CA"
    }, {
        state: "Colorado",
        ap: "Colo.",
        usps: "CO"
    }, {
        state: "Connecticut",
        ap: "Conn.",
        usps: "CT"
    }, {
        state: "Delaware",
        ap: "Del.",
        usps: "DE"
    }, {
        state: "District of Columbia",
        ap: "D.C.",
        usps: "DC"
    }, {
        state: "Florida",
        ap: "Fla.",
        usps: "FL"
    }, {
        state: "Georgia",
        ap: "Ga.",
        usps: "GA"
    }, {
        state: "Hawaii",
        ap: "Hawaii",
        usps: "HI"
    }, {
        state: "Idaho",
        ap: "Idaho",
        usps: "ID"
    }, {
        state: "Illinois",
        ap: "Ill.",
        usps: "IL"
    }, {
        state: "Indiana",
        ap: "Ind.",
        usps: "IN"
    }, {
        state: "Iowa",
        ap: "Iowa",
        usps: "IA"
    }, {
        state: "Kansas",
        ap: "Kan.",
        usps: "KS"
    }, {
        state: "Kentucky",
        ap: "Ky.",
        usps: "KY"
    }, {
        state: "Louisiana",
        ap: "La.",
        usps: "LA"
    }, {
        state: "Maine",
        ap: "Maine",
        usps: "ME"
    }, {
        state: "Maryland",
        ap: "Md.",
        usps: "MD"
    }, {
        state: "Massachusetts",
        ap: "Mass.",
        usps: "MA"
    }, {
        state: "Michigan",
        ap: "Mich.",
        usps: "MI"
    }, {
        state: "Minnesota",
        ap: "Minn.",
        usps: "MN"
    }, {
        state: "Mississippi",
        ap: "Miss.",
        usps: "MS"
    }, {
        state: "Missouri",
        ap: "Mo.",
        usps: "MO"
    }, {
        state: "Montana",
        ap: "Mont.",
        usps: "MT"
    }, {
        state: "Nebraska",
        ap: "Neb.",
        usps: "NE"
    }, {
        state: "Nevada",
        ap: "Nev.",
        usps: "NV"
    }, {
        state: "New Hampshire",
        ap: "N.H.",
        usps: "NH"
    }, {
        state: "New Jersey",
        ap: "N.J.",
        usps: "NJ"
    }, {
        state: "New Mexico",
        ap: "N.M.",
        usps: "NM"
    }, {
        state: "New York",
        ap: "N.Y.",
        usps: "NY"
    }, {
        state: "North Carolina",
        ap: "N.C.",
        usps: "NC"
    }, {
        state: "North Dakota",
        ap: "N.D.",
        usps: "ND"
    }, {
        state: "Ohio",
        ap: "Ohio",
        usps: "OH"
    }, {
        state: "Oklahoma",
        ap: "Okla.",
        usps: "OK"
    }, {
        state: "Oregon",
        ap: "Ore.",
        usps: "OR"
    }, {
        state: "Pennsylvania",
        ap: "Pa.",
        usps: "PA"
    }, {
        state: "Rhode Island",
        ap: "R.I.",
        usps: "RI"
    }, {
        state: "South Carolina",
        ap: "S.C.",
        usps: "SC"
    }, {
        state: "South Dakota",
        ap: "S.D.",
        usps: "SD"
    }, {
        state: "Tennessee",
        ap: "Tenn.",
        usps: "TN"
    }, {
        state: "Texas",
        ap: "Texas",
        usps: "TX"
    }, {
        state: "Utah",
        ap: "Utah",
        usps: "UT"
    }, {
        state: "Vermont",
        ap: "Vt.",
        usps: "VT"
    }, {
        state: "Virginia",
        ap: "Va.",
        usps: "VA"
    }, {
        state: "Washington",
        ap: "Wash.",
        usps: "WA"
    }, {
        state: "West Virginia",
        ap: "W.Va.",
        usps: "WV"
    }, {
        state: "Wisconsin",
        ap: "Wis.",
        usps: "WI"
    }, {
        state: "Wyoming",
        ap: "Wyo.",
        usps: "WY"
    }, {
        state: "American Samoa",
        ap: "",
        usps: "AS"
    }, {
        state: "Guam",
        ap: "",
        usps: "GU"
    }, {
        state: "Northern Mariana Islands",
        ap: "",
        usps: "MP"
    }, {
        state: "Puerto Rico",
        ap: "",
        usps: "PR"
    }, {
        state: "U.S. Minor Outlying Islands",
        ap: "",
        usps: "UM"
    }, {
        state: "U.S. Virgin Islands",
        ap: "",
        usps: "VI"
    } ];
    function apstate(val, reverse) {
        return lookup(val, reverse, AP_STATES, "state", "ap");
    }
    var _isFinite = __commonjs(function(module) {
        var root = require$$0$6;
        var nativeIsFinite = root.isFinite;
        function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
        }
        module.exports = isFinite;
    });
    var isFinite = _isFinite && typeof _isFinite === "object" && "default" in _isFinite ? _isFinite["default"] : _isFinite;
    function numberWithCommas(n) {
        var parts = n.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function intcomma(val) {
        if (isNil$1(val)) return "";
        var convertedVal = +val;
        if (!isFinite(convertedVal)) return val;
        return numberWithCommas(convertedVal);
    }
    var SUFFIXES = [ "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion" ];
    function getLengthOfNumber(n) {
        return Math.ceil(Math.log(n + 1) / Math.LN10);
    }
    function intword(val) {
        if (isNil$1(val)) return "";
        var convertedVal = +val;
        if (!isInteger$1(convertedVal)) return val;
        if (convertedVal < 1e6) return convertedVal;
        var numDigits = getLengthOfNumber(convertedVal) - 1;
        var exponent = numDigits - numDigits % 3;
        var new_val = convertedVal / Math.pow(10, exponent);
        new_val = Math.round(new_val * 10) / 10;
        return new_val + " " + SUFFIXES[Math.floor(exponent / 3) - 2];
    }
    var _baseValues = __commonjs(function(module) {
        var arrayMap = require$$0$33;
        function baseValues(object, props) {
            return arrayMap(props, function(key) {
                return object[key];
            });
        }
        module.exports = baseValues;
    });
    var require$$1$26 = _baseValues && typeof _baseValues === "object" && "default" in _baseValues ? _baseValues["default"] : _baseValues;
    var values = __commonjs(function(module) {
        var baseValues = require$$1$26, keys = require$$0$26;
        function values(object) {
            return object ? baseValues(object, keys(object)) : [];
        }
        module.exports = values;
    });
    var require$$0$36 = values && typeof values === "object" && "default" in values ? values["default"] : values;
    var _indexOfNaN = __commonjs(function(module) {
        function indexOfNaN(array, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 0 : -1);
            while (fromRight ? index-- : ++index < length) {
                var other = array[index];
                if (other !== other) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = indexOfNaN;
    });
    var require$$0$37 = _indexOfNaN && typeof _indexOfNaN === "object" && "default" in _indexOfNaN ? _indexOfNaN["default"] : _indexOfNaN;
    var _baseIndexOf = __commonjs(function(module) {
        var indexOfNaN = require$$0$37;
        function baseIndexOf(array, value, fromIndex) {
            if (value !== value) {
                return indexOfNaN(array, fromIndex);
            }
            var index = fromIndex - 1, length = array.length;
            while (++index < length) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }
        module.exports = baseIndexOf;
    });
    var require$$4$11 = _baseIndexOf && typeof _baseIndexOf === "object" && "default" in _baseIndexOf ? _baseIndexOf["default"] : _baseIndexOf;
    var includes = __commonjs(function(module) {
        var baseIndexOf = require$$4$11, isArrayLike = require$$3$4, isString = require$$2$4, toInteger = require$$1, values = require$$0$36;
        var nativeMax = Math.max;
        function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
                fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        module.exports = includes;
    });
    var includes$1 = includes && typeof includes === "object" && "default" in includes ? includes["default"] : includes;
    var SUFFIXES$1 = [ "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th" ];
    function ordinal(val) {
        if (isNil$1(val)) return "";
        var convertedVal = +val;
        if (!isInteger$1(convertedVal)) return val;
        if (includes$1([ 11, 12, 13 ], convertedVal % 100)) return convertedVal + SUFFIXES$1[0];
        return convertedVal + SUFFIXES$1[convertedVal % 10];
    }
    function postal(val, reverse) {
        return lookup(val, reverse, AP_STATES, "state", "usps");
    }
    exports.apnumber = apnumber;
    exports.apstate = apstate;
    exports.intcomma = intcomma;
    exports.intword = intword;
    exports.ordinal = ordinal;
    exports.postal = postal;
});