import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import isString from 'lodash/isString'

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
export default function lookup (val, reverse, list, keyOne, keyTwo) {
  // if reverse is not provided, it is set to false
  reverse = reverse || false

  // if `val` is undefined or null, return an empty string
  if (isNil(val)) return ''

  // if `val` is not a string, abort and return `val`
  if (!isString(val)) return val

  var lookupKey, outputKey

  // if `reverse` is true, flip the key and value
  if (reverse) {
    lookupKey = keyTwo
    outputKey = keyOne
  } else {
    lookupKey = keyOne
    outputKey = keyTwo
  }

  // look for a match in the list
  var match = find(list, [lookupKey, val])

  // if no match is found, return the original `val`
  if (!match) return val

  // get the output value from the `match` object
  var newVal = match[outputKey]

  // if `newVal` is empty, return the original `val`
  if (isEmpty(newVal)) return val

  return newVal
}
