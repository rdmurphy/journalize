import isInteger from 'lodash/isInteger';
import isNil from 'lodash/isNil';

export default function intword (val) {
  if (isNil(val)) return '';

  var convertedVal = +val;

  if (!isInteger(convertedVal)) return val;
  if (convertedVal < 1000000) return convertedVal;

  return convertedVal;
}
