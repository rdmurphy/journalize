const assert = require('assert');
const _ = require('lodash');
const apdate = require('./apdate');

describe('apdate', function() {

  it('should correctly convert a string date to AP formatted date.', function () {

    const testList = ['12/25/1945', '03/07/1992', 'December 2, 2001', '1992-2-4'];
    const results = ['Dec. 25, 1945','March 7, 1992', 'Dec. 2, 2001', 'Feb. 4, 1992'];

    testList.forEach(function(i, idx) {
      assert.deepEqual(apdate(i), results[idx]);
    });

  });

  it('should convert today\'s date to show only month and date.', function () {

      const testVal = 'April 4, 2016';
      const result = 'April 4';

      assert.deepEqual(apdate(testVal), result);

  });

  it('should convert throw an error if given an integer.', function () {

      const testVal = 1;
      const result = 'Not a date';

      assert.deepEqual(apdate(testVal), result);

  });

  it('should return an empty string if input is undefined or null.', function () {

      const testNull= null;
      const testVal= undefined;
      const result = '';

      assert.deepEqual(apdate(testVal), result);
      assert.deepEqual(apdate(testNull), result);

  });

  it('should return an empty string if input is empty.', function () {

      const testVal = '';
      const result = '';

      assert.deepEqual(apdate(testVal), result);

  });

});
