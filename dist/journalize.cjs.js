'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

var index$1 = isDate;

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var parseTokenDateTimeDelimeter = /[T ]/;
var parseTokenPlainTime = /:/;

// year tokens
var parseTokenYY = /^(\d{2})$/;
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
];

var parseTokenYYYY = /^(\d{4})/;
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
];

// date tokens
var parseTokenMM = /^-(\d{2})$/;
var parseTokenDDD = /^-?(\d{3})$/;
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
var parseTokenWww = /^-?W(\d{2})$/;
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/;

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/;
var parseTokenTimezoneZ = /^(Z)$/;
var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (index$1(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits;
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
  } else {
    additionalDigits = Number(additionalDigits);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(parseTokenDateTimeDelimeter);
  var timeString;

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits];
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = parseTokenHH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

var index = parse;

/**
 * Map of AP month abbreviations. Note that they are zero-indexed due to
 * JavaScript's life choices. Exported for testing purposes.
 *
 * @private
 * @type {object}
 */
var AP_MONTHS = {
  0: 'Jan.',
  1: 'Feb.',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug.',
  8: 'Sept.',
  9: 'Oct.',
  10: 'Nov.',
  11: 'Dec.'
};

/**
 * Returns an AP-formatted month string that corresponds with the supplied
 * Date, timestamp or date string. Relies on date-fns/parse to smooth over
 * browser ISO 8601 parsing inconsistencies. If an `input` is not passed, it
 * will use the result of `new Date();`.
 *
 * @param  {Date|Number|String} [input] JavaScript Date object, numerical
 * timestamp or ISO 8601 string, defaults to current date if not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apmonth(new Date(2016, 10, 8));
 * // returns 'Nov.'
 *
 * // The string parser, however, isn't as silly
 * journalize.apmonth('2016-11-08');
 * // returns 'Nov.'
 *
 * // Accounts for the non-abbreviated months, too
 * journalize.apmonth('2016-06-04');
 * // returns 'July'
 *
 * // Uses the current date if no parameter is passed
 * journalize.apmonth();
 * // returns 'July' (pretend it is actually July)
 */
function apmonth(input) {
  var date = index(input || new Date());
  return AP_MONTHS[date.getMonth()];
}

/**
 * Returns an AP-formatted date string that corresponds with the supplied
 * Date, timestamp or date string. Relies on date-fns/parse to smooth over
 * browser ISO 8601 parsing inconsistencies. If an `input` is not passed, it
 * will use the result of `new Date();`.
 *
 * @param  {Date|Number|String} [input] JavaScript Date object, numerical
 * timestamp or ISO 8601 string, defaults to current date if not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apdate(new Date(2016, 10, 8));
 * // returns 'Nov. 8, 2016'
 *
 * // The string parser, however, isn't as silly
 * journalize.apdate('2016-11-08');
 * // returns 'Nov. 8, 2016'
 *
 * // Accounts for the non-abbreviated months, too
 * journalize.apdate('2016-06-04');
 * // returns 'July 4, 2016'
 *
 * // Uses the current date if no parameter is passed
 * journalize.apdate();
 * // returns 'July 4, 2016' (pretend it is actually July 4, 2016)
 */
function apdate(input) {
  var date = index(input || new Date());

  var month = apmonth(date);
  var dayOfMonth = date.getDate();
  var year = date.getFullYear();

  return month + ' ' + dayOfMonth + ', ' + year;
}

/**
 * Returns true if `value` is null or undefined;
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
function isNil(value) {
  return value == null;
}

/**
 * Returns true if `value` is a valid string.
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Returns true if `value` is a finite number.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
function _isFinite(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Returns true if `value` is an integer.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 *
 * @private
 * @param  {*}  value
 * @return {Boolean}
 */
function isInteger(value) {
  return _isFinite(value) && Math.floor(value) === value;
}

/**
 * A for-loop version of Array.prototype.find so IE and friends can play.
 *
 * @private
 * @param  {Array} arr
 * @param  {Function} predicate
 * @return {*|undefined}
 * @throws {TypeError} Argument predicate must be a function
 */
function find(arr, predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
}

/**
 * List of spelled out numbers per AP style.
 * @private
 * @type {Array}
 */
var AP_NUMBERS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

/**
 * Converts an integer to string representation per AP style rules. If an
 * integer is not one that would be converted, it is returned in its original
 * form.
 *
 * If a non-integer is given, it will be returned in its original form as
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
function apnumber(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  var convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val;

  // if `convertedVal` is not between 0 and 10, return `val`
  if (convertedVal <= 0 || convertedVal >= 10) return val;

  return AP_NUMBERS[convertedVal - 1];
}

/**
 * Searches a list of objects for a `val` that matches the value of `key_one`.
 * Then, it returns the value of `key_two`. If `reverse` is true, it does the
 * opposite.
 *
 * This is a helper function for other methods that all work similarly.
 *
 * @private
 * @param  {String} val
 * @param  {Boolean} [reverse=false]
 * @param  {Array} list
 * @param  {String} key_one
 * @param  {String} key_two
 * @return {String}
 */
function lookup(val, reverse, list, keyOne, keyTwo) {
  // if reverse is not provided, it is set to false
  reverse = reverse || false;

  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  // if `val` is not a string, abort and return `val`
  if (!isString(val)) return val;

  var lookupKey, outputKey;

  // if `reverse` is true, flip the key and value
  if (reverse) {
    lookupKey = keyTwo;
    outputKey = keyOne;
  } else {
    lookupKey = keyOne;
    outputKey = keyTwo;
  }

  // look for a match in the list
  var match = find(list, function(el) {
    return el[lookupKey] === val;
  });

  // if no match is found, return the original `val`
  if (!match) return val;

  // get the output value from the `match` object
  var newVal = match[outputKey];

  // if `newVal` is empty, return the original `val`
  if (newVal.length === 0 || isNil(newVal)) return val;

  return newVal;
}

/**
 * A list of state names and their AP abbreviations and USPS postal codes.
 *
 * Sources:
 * https://github.com/wireservice/lookup/blob/master/states/ap.csv
 * https://github.com/wireservice/lookup/blob/master/states/usps.csv
 *
 * @private
 * @type {Array}
 */
var AP_STATES = [
  {
    state: 'Alabama',
    ap: 'Ala.',
    usps: 'AL'
  },
  {
    state: 'Alaska',
    ap: 'Alaska',
    usps: 'AK'
  },
  {
    state: 'Arizona',
    ap: 'Ariz.',
    usps: 'AZ'
  },
  {
    state: 'Arkansas',
    ap: 'Ark.',
    usps: 'AR'
  },
  {
    state: 'California',
    ap: 'Calif.',
    usps: 'CA'
  },
  {
    state: 'Colorado',
    ap: 'Colo.',
    usps: 'CO'
  },
  {
    state: 'Connecticut',
    ap: 'Conn.',
    usps: 'CT'
  },
  {
    state: 'Delaware',
    ap: 'Del.',
    usps: 'DE'
  },
  {
    state: 'District of Columbia',
    ap: 'D.C.',
    usps: 'DC'
  },
  {
    state: 'Florida',
    ap: 'Fla.',
    usps: 'FL'
  },
  {
    state: 'Georgia',
    ap: 'Ga.',
    usps: 'GA'
  },
  {
    state: 'Hawaii',
    ap: 'Hawaii',
    usps: 'HI'
  },
  {
    state: 'Idaho',
    ap: 'Idaho',
    usps: 'ID'
  },
  {
    state: 'Illinois',
    ap: 'Ill.',
    usps: 'IL'
  },
  {
    state: 'Indiana',
    ap: 'Ind.',
    usps: 'IN'
  },
  {
    state: 'Iowa',
    ap: 'Iowa',
    usps: 'IA'
  },
  {
    state: 'Kansas',
    ap: 'Kan.',
    usps: 'KS'
  },
  {
    state: 'Kentucky',
    ap: 'Ky.',
    usps: 'KY'
  },
  {
    state: 'Louisiana',
    ap: 'La.',
    usps: 'LA'
  },
  {
    state: 'Maine',
    ap: 'Maine',
    usps: 'ME'
  },
  {
    state: 'Maryland',
    ap: 'Md.',
    usps: 'MD'
  },
  {
    state: 'Massachusetts',
    ap: 'Mass.',
    usps: 'MA'
  },
  {
    state: 'Michigan',
    ap: 'Mich.',
    usps: 'MI'
  },
  {
    state: 'Minnesota',
    ap: 'Minn.',
    usps: 'MN'
  },
  {
    state: 'Mississippi',
    ap: 'Miss.',
    usps: 'MS'
  },
  {
    state: 'Missouri',
    ap: 'Mo.',
    usps: 'MO'
  },
  {
    state: 'Montana',
    ap: 'Mont.',
    usps: 'MT'
  },
  {
    state: 'Nebraska',
    ap: 'Neb.',
    usps: 'NE'
  },
  {
    state: 'Nevada',
    ap: 'Nev.',
    usps: 'NV'
  },
  {
    state: 'New Hampshire',
    ap: 'N.H.',
    usps: 'NH'
  },
  {
    state: 'New Jersey',
    ap: 'N.J.',
    usps: 'NJ'
  },
  {
    state: 'New Mexico',
    ap: 'N.M.',
    usps: 'NM'
  },
  {
    state: 'New York',
    ap: 'N.Y.',
    usps: 'NY'
  },
  {
    state: 'North Carolina',
    ap: 'N.C.',
    usps: 'NC'
  },
  {
    state: 'North Dakota',
    ap: 'N.D.',
    usps: 'ND'
  },
  {
    state: 'Ohio',
    ap: 'Ohio',
    usps: 'OH'
  },
  {
    state: 'Oklahoma',
    ap: 'Okla.',
    usps: 'OK'
  },
  {
    state: 'Oregon',
    ap: 'Ore.',
    usps: 'OR'
  },
  {
    state: 'Pennsylvania',
    ap: 'Pa.',
    usps: 'PA'
  },
  {
    state: 'Rhode Island',
    ap: 'R.I.',
    usps: 'RI'
  },
  {
    state: 'South Carolina',
    ap: 'S.C.',
    usps: 'SC'
  },
  {
    state: 'South Dakota',
    ap: 'S.D.',
    usps: 'SD'
  },
  {
    state: 'Tennessee',
    ap: 'Tenn.',
    usps: 'TN'
  },
  {
    state: 'Texas',
    ap: 'Texas',
    usps: 'TX'
  },
  {
    state: 'Utah',
    ap: 'Utah',
    usps: 'UT'
  },
  {
    state: 'Vermont',
    ap: 'Vt.',
    usps: 'VT'
  },
  {
    state: 'Virginia',
    ap: 'Va.',
    usps: 'VA'
  },
  {
    state: 'Washington',
    ap: 'Wash.',
    usps: 'WA'
  },
  {
    state: 'West Virginia',
    ap: 'W.Va.',
    usps: 'WV'
  },
  {
    state: 'Wisconsin',
    ap: 'Wis.',
    usps: 'WI'
  },
  {
    state: 'Wyoming',
    ap: 'Wyo.',
    usps: 'WY'
  },
  {
    state: 'American Samoa',
    ap: '',
    usps: 'AS'
  },
  {
    state: 'Guam',
    ap: '',
    usps: 'GU'
  },
  {
    state: 'Northern Mariana Islands',
    ap: '',
    usps: 'MP'
  },
  {
    state: 'Puerto Rico',
    ap: '',
    usps: 'PR'
  },
  {
    state: 'U.S. Minor Outlying Islands',
    ap: '',
    usps: 'UM'
  },
  {
    state: 'U.S. Virgin Islands',
    ap: '',
    usps: 'VI'
  }
];

/**
 * Converts state names into AP abbreviations, and back. If the supplied
 * string has no match, or if there is a match and the lookup is empty, the
 * original value is returned. If the value is not a string, the original will
 * also be returned.
 *
 * If `reverse` is true, `apstate` will convert an abbreviation back to a full
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
function apstate(val, reverse) {
  return lookup(val, reverse, AP_STATES, 'state', 'ap');
}

/**
 * Returns an AP-formatted time string that corresponds with the supplied
 * Date, timestamp or datetime string. Relies on date-fns/parse to smooth over
 * ISO 8601 parsing inconsistencies. If an `input` is not passed, it will use
 * the result of `new Date();`.
 *
 * @param  {Date|Number|String} [input] JavaScript Date object, numerical
 * timestamp or ISO 8601 string, defaults to current date if not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Bright and early
 * journalize.aptime(new Date(2016, 10, 8, 6, 30));
 * // returns '6:30 a.m.'
 *
 * // It can handle `p.m.` too
 * journalize.aptime(new Date(2016, 10, 8, 16, 30));
 * // returns '4:30 p.m.'
 *
 * // Much better to write and pass around in ISO 8601
 * journalize.aptime('2016-11-08T16:30');
 * // returns '4:30 p.m.'
 *
 * // Minutes are left off if zero
 * journalize.aptime('2016-11-08T16:00');
 * // returns '4 p.m.'
 *
 * // Also understands midnight...
 * journalize.aptime('2016-11-08T00:00');
 * // returns 'midnight'
 *
 * // ...and noon
 * journalize.aptime('2016-11-08T12:00');
 * // returns 'noon'
 *
 * // Uses the current time if no parameter is passed
 * journalize.aptime();
 * // returns '6:45 p.m.' (pretend it is actually 6:45 p.m. right now)
 *
 */
function aptime(input) {
  var date = index(input || new Date());

  var hours = date.getHours();
  var minutes = date.getMinutes();

  var minutesAreZero = minutes === 0;

  if (minutesAreZero) {
    if (hours === 0) return 'midnight';
    if (hours === 12) return 'noon';
  }

  var period, hour;

  if (hours < 12) {
    period = 'a.m.';
    hour = hours;
  } else {
    period = 'p.m.';
    hour = hours - 12;
  }

  if (minutesAreZero) {
    return hour + ' ' + period;
  }

  var minute = minutes < 10 ? '0' + minutes : minutes;
  return hour + ':' + minute + ' ' + period;
}

/**
 * Converts a number to include commas, if necessary.
 *
 * Source: http://stackoverflow.com/a/2901298
 *
 * @private
 * @param  {Number|String} n
 * @return {String}
 */
function numberWithCommas(n) {
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
function intcomma(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  var convertedVal = +val;

  // if `convertedVal` is not a number, don't waste time converting it
  if (!_isFinite(convertedVal)) return val;

  return numberWithCommas(convertedVal);
}

/**
 * Array of suffixes to be used by intword.
 * @private
 * @type {Array}
 */
var SUFFIXES = [
  'million',
  'billion',
  'trillion',
  'quadrillion',
  'quintillion',
  'sextillion',
  'septillion',
  'octillion',
  'nonillion',
  'decillion'
];

/**
 * Returns the number of digits found in a number. Accounts for exponents, too.
 *
 * @private
 * @param  {Number} n
 * @return {Number}
 */
function getLengthOfNumber(n) {
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
function intword(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  var convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val;

  // if `convertedVal` is less than 1 million, no conversion is needed
  if (convertedVal < 1000000) return val;

  // get the number of digits in the number, and substract remainder to get
  // exponent value
  var numDigits = getLengthOfNumber(convertedVal) - 1;
  var exponent = numDigits - numDigits % 3;

  // calculate the rounded version of `convertedVal`
  var newVal = convertedVal / Math.pow(10, exponent);
  newVal = Math.round(newVal * 10) / 10;

  return newVal + ' ' + SUFFIXES[Math.floor(exponent / 3) - 2];
}

/**
 * A list of suffixes for conversions.
 * @private
 * @type {Array}
 */
var SUFFIXES$1 = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

/**
 * A list of funky English ordinals.
 * @private
 * @type {Array}
 */
var ENGLISH_ORDINAL_EXCEPTIONS = [11, 12, 13];

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
function ordinal(val) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return '';

  var convertedVal = +val;

  // if `convertedVal` is not an integer, return `val`
  if (!isInteger(convertedVal)) return val;

  // if `convertedVal` is 11, 12 or 13, English gets weird
  if (ENGLISH_ORDINAL_EXCEPTIONS.indexOf(convertedVal % 100) > -1)
    return convertedVal + SUFFIXES$1[0];

  return convertedVal + SUFFIXES$1[convertedVal % 10];
}

/**
 * Converts state and U.S. territory names into USPS postal codes, and back. If
 * the supplied string has no match, or if there is a match and the lookup is
 * empty, the original value is returned. If the value is not a string, the
 * original will also be returned.
 *
 * If `reverse` is true, `postal` will convert a postal code back to a full
 * string.
 *
 * @param  {String} val
 * @param  {Boolean} [reverse=false]
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.postal('Arizona');
 * // returns 'AZ'
 *
 * journalize.postal('District of Columbia');
 * // returns 'DC'
 *
 * journalize.postal('Texas');
 * // returns 'TX'
 *
 * journalize.postal('Ontario');
 * // returns 'Ontario'
 *
 * journalize.postal('DC', true);
 * // returns 'District of Columbia'
 */
function postal(val, reverse) {
  return lookup(val, reverse, AP_STATES, 'state', 'usps');
}

exports.apdate = apdate;
exports.apmonth = apmonth;
exports.apnumber = apnumber;
exports.apstate = apstate;
exports.aptime = aptime;
exports.intcomma = intcomma;
exports.intword = intword;
exports.ordinal = ordinal;
exports.postal = postal;
