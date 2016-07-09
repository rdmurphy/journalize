(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : factory(global.journalize = global.journalize || {});
})(this, function(exports) {
    "use strict";
    function find(array, predicate, context) {
        if (typeof Array.prototype.find === "function") {
            return array.find(predicate, context);
        }
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }
        var list = Object(array);
        var len = list.length;
        for (var i = 0; i < len; i++) {
            if (predicate.call(context, list[i], i, list)) {
                return array[i];
            }
        }
        return undefined;
    }
    var isFiniteNumber = Number.isFinite || function(value) {
        typeof value === "number" && isFinite(value);
    };
    var isInteger = Number.isInteger || function(value) {
        isFiniteNumber(value) && Math.floor(value) === value;
    };
    function isNil(value) {
        return value == null;
    }
    function isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    var AP_NUMBERS = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    function apnumber(val) {
        if (isNil(val)) return "";
        var convertedVal = +val;
        if (!isInteger(convertedVal)) return val;
        if (convertedVal <= 0 || convertedVal >= 10) return val;
        return AP_NUMBERS[convertedVal - 1];
    }
    function lookup(val, reverse, list, keyOne, keyTwo) {
        reverse = reverse || false;
        if (isNil(val)) return "";
        if (!isString(val)) return val;
        var lookupKey, outputKey;
        if (reverse) {
            lookupKey = keyTwo;
            outputKey = keyOne;
        } else {
            lookupKey = keyOne;
            outputKey = keyTwo;
        }
        var match = find(list, function(obj) {
            return obj[lookupKey] === val;
        });
        if (!match) return val;
        var newVal = match[outputKey];
        if (!newVal) return val;
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
    function numberWithCommas(n) {
        var parts = n.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function intcomma(val) {
        if (isNil(val)) return "";
        var convertedVal = +val;
        if (!isFiniteNumber(convertedVal)) return val;
        return numberWithCommas(convertedVal);
    }
    var SUFFIXES = [ "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion" ];
    function getLengthOfNumber(n) {
        return Math.ceil(Math.log(n + 1) / Math.LN10);
    }
    function intword(val) {
        if (isNil(val)) return "";
        var convertedVal = +val;
        if (!isInteger(convertedVal)) return val;
        if (convertedVal < 1e6) return convertedVal;
        var numDigits = getLengthOfNumber(convertedVal) - 1;
        var exponent = numDigits - numDigits % 3;
        var newVal = convertedVal / Math.pow(10, exponent);
        newVal = Math.round(newVal * 10) / 10;
        return newVal + " " + SUFFIXES[Math.floor(exponent / 3) - 2];
    }
    var SUFFIXES$1 = [ "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th" ];
    function ordinal(val) {
        if (isNil(val)) return "";
        var convertedVal = +val;
        if (!isInteger(convertedVal)) return val;
        if ([ 11, 12, 13 ].indexOf(convertedVal % 100) !== -1) return convertedVal + SUFFIXES$1[0];
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
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});