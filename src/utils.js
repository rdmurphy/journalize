export function find (array, predicate, context) {
  if (typeof Array.prototype.find === 'function') {
    return array.find(predicate, context)
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function')
  }

  var list = Object(array)
  var len = list.length

  for (var i = 0; i < len; i++) {
    if (predicate.call(context, list[i], i, list)) {
      return array[i]
    }
  }

  return undefined
}

export var isFiniteNumber = Number.isFinite || function (value) {
  typeof value === 'number' && isFinite(value)
}

export var isInteger = Number.isInteger || function (value) {
  isFiniteNumber(value) && Math.floor(value) === value
}

export function isNil (value) {
  return value == null
}

export function isString (value) {
  return typeof value === 'string' || value instanceof String
}
