import {
  isNil
} from './utils';

/**
 * List of possible formats
 * @private
 * @type {Array}
 */
const TYPES = ['state', 'abbrev', 'ap'];

/**
 * List of state mappings
 * @private
 * @type {Array}
 */
const MAPPINGS = {
  state: {
    Alabama: {
      abbrev: 'AL',
      ap: 'Ala.',
    },
    Alaska: {
      abbrev: 'AK',
      ap: 'Alaska',
    },
    Arizona: {
      abbrev: 'AZ',
      ap: 'Ariz.',
    },
    Arkansas: {
      abbrev: 'AR',
      ap: 'Ark.',
    },
    California: {
      abbrev: 'CA',
      ap: 'Calif.',
    },
    Colorado: {
      abbrev: 'CO',
      ap: 'Colo.',
    },
    Connecticut: {
      abbrev: 'CT',
      ap: 'Conn.',
    },
    Delaware: {
      abbrev: 'DE',
      ap: 'Del.',
    },
    'District of Columbia': {
      abbrev: 'DC',
      ap: 'D.C.',
    },
    Florida: {
      abbrev: 'FL',
      ap: 'Fla.',
    },
    Georgia: {
      abbrev: 'GA',
      ap: 'Ga.',
    },
    Hawaii: {
      abbrev: 'HI',
      ap: 'Hawaii',
    },
    Idaho: {
      abbrev: 'ID',
      ap: 'Idaho',
    },
    Illinois: {
      abbrev: 'IL',
      ap: 'Ill.',
    },
    Indiana: {
      abbrev: 'IN',
      ap: 'Ind.',
    },
    Iowa: {
      abbrev: 'IA',
      ap: 'Iowa',
    },
    Kansas: {
      abbrev: 'KS',
      ap: 'Kan.',
    },
    Kentucky: {
      abbrev: 'KY',
      ap: 'Ky.',
    },
    Louisiana: {
      abbrev: 'LA',
      ap: 'La.',
    },
    Maine: {
      abbrev: 'ME',
      ap: 'Maine',
    },
    Maryland: {
      abbrev: 'MD',
      ap: 'Md.',
    },
    Massachusetts: {
      abbrev: 'MA',
      ap: 'Mass.',
    },
    Michigan: {
      abbrev: 'MI',
      ap: 'Mich.',
    },
    Minnesota: {
      abbrev: 'MN',
      ap: 'Minn.',
    },
    Mississippi: {
      abbrev: 'MS',
      ap: 'Miss.',
    },
    Missouri: {
      abbrev: 'MO',
      ap: 'Mo.',
    },
    Montana: {
      abbrev: 'MT',
      ap: 'Mont.',
    },
    Nebraska: {
      abbrev: 'NE',
      ap: 'Neb.',
    },
    Nevada: {
      abbrev: 'NV',
      ap: 'Nev.',
    },
    'New Hampshire': {
      abbrev: 'NH',
      ap: 'N.H.',
    },
    'New Jersey': {
      abbrev: 'NJ',
      ap: 'N.J.',
    },
    'New Mexico': {
      abbrev: 'NM',
      ap: 'N.M.',
    },
    'New York': {
      abbrev: 'NY',
      ap: 'N.Y.',
    },
    'North Carolina': {
      abbrev: 'NC',
      ap: 'N.C.',
    },
    'North Dakota': {
      abbrev: 'ND',
      ap: 'N.D.',
    },
    Ohio: {
      abbrev: 'OH',
      ap: 'Ohio',
    },
    Oklahoma: {
      abbrev: 'OK',
      ap: 'Okla.',
    },
    Oregon: {
      abbrev: 'OR',
      ap: 'Ore.',
    },
    Pennsylvania: {
      abbrev: 'PA',
      ap: 'Pa.',
    },
    'Rhode Island': {
      abbrev: 'RI',
      ap: 'R.I.',
    },
    'South Carolina': {
      abbrev: 'SC',
      ap: 'S.C.',
    },
    'South Dakota': {
      abbrev: 'SD',
      ap: 'S.D.',
    },
    Tennessee: {
      abbrev: 'TN',
      ap: 'Tenn.',
    },
    Texas: {
      abbrev: 'TX',
      ap: 'Texas',
    },
    Utah: {
      abbrev: 'UT',
      ap: 'Utah',
    },
    Vermont: {
      abbrev: 'VT',
      ap: 'Vt.',
    },
    Virginia: {
      abbrev: 'VA',
      ap: 'Va.',
    },
    Washington: {
      abbrev: 'WA',
      ap: 'Wash.',
    },
    'West Virginia': {
      abbrev: 'WV',
      ap: 'W.Va.',
    },
    Wisconsin: {
      abbrev: 'WI',
      ap: 'Wis.',
    },
    Wyoming: {
      abbrev: 'WY',
      ap: 'Wyo.',
    },
  },
  abbrev: {
    AL: {
      state: 'Alabama',
      ap: 'Ala.',
    },
    AK: {
      state: 'Alaska',
      ap: 'Alaska',
    },
    AZ: {
      state: 'Arizona',
      ap: 'Ariz.',
    },
    AR: {
      state: 'Arkansas',
      ap: 'Ark.',
    },
    CA: {
      state: 'California',
      ap: 'Calif.',
    },
    CO: {
      state: 'Colorado',
      ap: 'Colo.',
    },
    CT: {
      state: 'Connecticut',
      ap: 'Conn.',
    },
    DE: {
      state: 'Delaware',
      ap: 'Del.',
    },
    DC: {
      state: 'District of Columbia',
      ap: 'D.C.',
    },
    FL: {
      state: 'Florida',
      ap: 'Fla.',
    },
    GA: {
      state: 'Georgia',
      ap: 'Ga.',
    },
    HI: {
      state: 'Hawaii',
      ap: 'Hawaii',
    },
    ID: {
      state: 'Idaho',
      ap: 'Idaho',
    },
    IL: {
      state: 'Illinois',
      ap: 'Ill.',
    },
    IN: {
      state: 'Indiana',
      ap: 'Ind.',
    },
    IA: {
      state: 'Iowa',
      ap: 'Iowa',
    },
    KS: {
      state: 'Kansas',
      ap: 'Kan.',
    },
    KY: {
      state: 'Kentucky',
      ap: 'Ky.',
    },
    LA: {
      state: 'Louisiana',
      ap: 'La.',
    },
    ME: {
      state: 'Maine',
      ap: 'Maine',
    },
    MD: {
      state: 'Maryland',
      ap: 'Md.',
    },
    MA: {
      state: 'Massachusetts',
      ap: 'Mass.',
    },
    MI: {
      state: 'Michigan',
      ap: 'Mich.',
    },
    MN: {
      state: 'Minnesota',
      ap: 'Minn.',
    },
    MS: {
      state: 'Mississippi',
      ap: 'Miss.',
    },
    MO: {
      state: 'Missouri',
      ap: 'Mo.',
    },
    MT: {
      state: 'Montana',
      ap: 'Mont.',
    },
    NB: {
      state: 'Nebraska',
      ap: 'Neb.',
    },
    NV: {
      state: 'Nevada',
      ap: 'Nev.',
    },
    NH: {
      state: 'New Hampshire',
      ap: 'N.H.',
    },
    NJ: {
      state: 'New Jersey',
      ap: 'N.J.',
    },
    NM: {
      state: 'New Mexico',
      ap: 'N.M.',
    },
    NY: {
      state: 'New York',
      ap: 'N.Y.',
    },
    NC: {
      state: 'North Carolina',
      ap: 'N.C.',
    },
    ND: {
      state: 'North Dakota',
      ap: 'N.D.',
    },
    OH: {
      state: 'Ohio',
      ap: 'Ohio',
    },
    OK: {
      state: 'Oklahoma',
      ap: 'Okla.',
    },
    OR: {
      state: 'Oregon',
      ap: 'Ore.',
    },
    PA: {
      state: 'Pennsylvania',
      ap: 'Pa.',
    },
    RI: {
      state: 'Rhode Island',
      ap: 'R.I.',
    },
    SC: {
      state: 'South Carolina',
      ap: 'S.C.',
    },
    SD: {
      state: 'South Dakota',
      ap: 'S.D.',
    },
    TN: {
      state: 'Tennessee',
      ap: 'Tenn.',
    },
    TX: {
      state: 'Texas',
      ap: 'Texas',
    },
    UT: {
      state: 'Utah',
      ap: 'Utah',
    },
    VT: {
      state: 'Vermont',
      ap: 'Vt.',
    },
    VA: {
      state: 'Virginia',
      ap: 'Va.',
    },
    WA: {
      state: 'Washington',
      ap: 'Wash.',
    },
    WV: {
      state: 'West Virginia',
      ap: 'W.Va.',
    },
    WI: {
      state: 'Wisconsin',
      ap: 'Wis.',
    },
    WY: {
      state: 'Wyoming',
      ap: 'Wyo.',
    },
  },
  ap: {
    'Ala.': {
      state: 'Alabama',
      abbrev: 'AL',
    },
    Alaska: {
      state: 'Alaska',
      abbrev: 'AK',
    },
    'Ariz.': {
      state: 'Arizona',
      abbrev: 'AZ',
    },
    'Ark.': {
      state: 'Arkansas',
      abbrev: 'AR',
    },
    'Calif.': {
      state: 'California',
      abbrev: 'CA',
    },
    'Colo.': {
      state: 'Colorado',
      abbrev: 'CO',
    },
    'Conn.': {
      state: 'Connecticut',
      abbrev: 'CT',
    },
    'Del.': {
      state: 'Delaware',
      abbrev: 'DE',
    },
    'D.C.': {
      state: 'District of Columbia',
      abbrev: 'DC',
    },
    'Fla.': {
      state: 'Florida',
      abbrev: 'FL',
    },
    'Ga.': {
      state: 'Georgia',
      abbrev: 'GA',
    },
    Hawaii: {
      state: 'Hawaii',
      abbrev: 'HI',
    },
    Idaho: {
      state: 'Idaho',
      abbrev: 'ID',
    },
    'Ill.': {
      state: 'Illinois',
      abbrev: 'IL',
    },
    'Ind.': {
      state: 'Indiana',
      abbrev: 'IN',
    },
    Iowa: {
      state: 'Iowa',
      abbrev: 'IA',
    },
    'Kan.': {
      state: 'Kansas',
      abbrev: 'KS',
    },
    'Ky.': {
      state: 'Kentucky',
      abbrev: 'KY',
    },
    'La.': {
      state: 'Louisiana',
      abbrev: 'LA',
    },
    Maine: {
      state: 'Maine',
      abbrev: 'ME',
    },
    'Md.': {
      state: 'Maryland',
      abbrev: 'MD',
    },
    'Mass.': {
      state: 'Massachusetts',
      abbrev: 'MA',
    },
    'Mich.': {
      state: 'Michigan',
      abbrev: 'MI',
    },
    'Minn.': {
      state: 'Minnesota',
      abbrev: 'MN',
    },
    'Miss.': {
      state: 'Mississippi',
      abbrev: 'MS',
    },
    'Mo.': {
      state: 'Missouri',
      abbrev: 'MO',
    },
    'Mont.': {
      state: 'Montana',
      abbrev: 'MT',
    },
    'Neb.': {
      state: 'Nebraska',
      abbrev: 'NE',
    },
    'Nev.': {
      state: 'Nevada',
      abbrev: 'NV',
    },
    'N.H.': {
      state: 'New Hampshire',
      abbrev: 'NH',
    },
    'N.J.': {
      state: 'New Jersey',
      abbrev: 'NJ',
    },
    'N.M.': {
      state: 'New Mexico',
      abbrev: 'NM',
    },
    'N.Y.': {
      state: 'New York',
      abbrev: 'NY',
    },
    'N.C.': {
      state: 'North Carolina',
      abbrev: 'NC',
    },
    'N.D.': {
      state: 'North Dakota',
      abbrev: 'ND',
    },
    Ohio: {
      state: 'Ohio',
      abbrev: 'Ohio',
    },
    'Okla.': {
      state: 'Oklahoma',
      abbrev: 'OK',
    },
    'Ore.': {
      state: 'Oregon',
      abbrev: 'OR',
    },
    'Pa.': {
      state: 'Pennsylvania',
      abbrev: 'PA',
    },
    'R.I.': {
      state: 'Rhode Island',
      abbrev: 'RI',
    },
    'S.C.': {
      state: 'South Carolina',
      abbrev: 'SC',
    },
    'S.D.': {
      state: 'South Dakota',
      abbrev: 'SD',
    },
    'Tenn.': {
      state: 'Tennessee',
      abbrev: 'TN',
    },
    Texas: {
      state: 'Texas',
      abbrev: 'TX',
    },
    Utah: {
      state: 'Utah',
      abbrev: 'UT',
    },
    'Vt.': {
      state: 'Vermont',
      abbrev: 'VT',
    },
    'Va.': {
      state: 'Virginia',
      abbrev: 'VA',
    },
    'Wash.': {
      state: 'Washington',
      abbrev: 'WA',
    },
    'W.Va.': {
      state: 'West Virginia',
      abbrev: 'WV',
    },
    'Wis.': {
      state: 'Wisconsin',
      abbrev: 'WI',
    },
    'Wyo.': {
      state: 'Wyoming',
      abbrev: 'WY',
    },
  },
};

/**
 * Converts a state name to its abbreviation or AP style, and vice versa. If a
 * state could not be converted, it is returned in its original form.
 *
 * If a non-integer is given, it will be returned in its original form as
 * well.
 *
 * @param  {string} val
 * @param {string} from
 * @param {string} to
 * @return {string}
 * @example
 *
 * var journalize = require('journalize');
 *
 * journalize.apstate('New York', 'state', 'ap');
 * // returns 'N.Y.'
 *
 * journalize.apstate('Wisconsin', 'state', 'abbrev');
 * // returns 'WI'
 *
 * journalize.apstate('CA', 'abbrev', 'ap');
 * // returns 'Calif.'
 *
 * journalize.apstate('SD', 'abbrev', 'state');
 * // returns 'South Dakota'
 *
 * journalize.apstate('Ariz.', 'ap', 'abbrev');
 * // returns 'AZ'
 *
 * journalize.apstate('N.H.', 'ap', 'state');
 * // returns 'New Hampshire
 */
export default function apstate(val, from, to) {
  // if `val` is undefined or null, return an empty string
  if (isNil(val) || isNil(from) || isNil(to)) return '';

  //if `from` is not a valid type`
  if (!TYPES.includes(from)) {
    throw new Error("the <to> parameter must be 'state', 'abbrev', or 'ap'");
  }

  //if `to` is not a valid type`
  if (!TYPES.includes(to)) {
    throw new Error("the <from> parameter must be 'state', 'abbrev', or 'ap'");
  }

  //if `from` and `val` are mismatched, i.e. N.H. is not a state, it is an abbrev
  if (isNil(MAPPINGS[from][val])) {
    throw new Error(`${val} is not a valid ${from}`);
  }

  return MAPPINGS[from][val][to];
}
