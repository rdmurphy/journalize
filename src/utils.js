export function isNil (val) {
  return val == null
}

export function isString (val) {
  return typeof val === 'string'
}

export var isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value)
}

export var isInteger = Number.isInteger || function (value) {
  return isFinite(value) && Math.floor(value) === value
}

export function find (arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i]
    }
  }
  return undefined
}
