// borrowed from https://github.com/reactjs/redux/blob/v3.4.0/build/use-lodash-es.js
module.exports = function () {
  return {
    visitor: {
      ImportDeclaration (path) {
        var source = path.node.source
        source.value = source.value.replace(/^lodash($|\/)/, 'lodash-es$1')
      }
    }
  }
}
