'use strict';

var isNil = require('lodash/isNil');
var isEqual = require('lodash/isEqual');
var isDate = require('lodash/isDate');
var isInteger = require('lodash/isInteger');
var isEmpty = require('lodash/isEmpty');

var AP_MONTHS = ['Jan.','Feb.','March','April','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'];

module.exports = function  (val) {

  var dateObj = new Date(Date.parse(val));
  var currentYear = new Date().getFullYear();
  var day = dateObj.getDate();
  var month = AP_MONTHS[dateObj.getMonth()];
  var year = dateObj.getFullYear();

  // If 'val' is within current year,
  // remove year from date output.
  // Ex: March 7, 2016 => March 7
  if(isEqual(dateObj.getFullYear(), currentYear)) return month + ' ' + day;

  // If 'val' is undefined or null,
  // return an empty string.
  if (isNil(val)) return '';

  // If 'val' is not a valid date,
  // return msg.
  if(!isDate(dateObj)) return 'Not a date';

  // If 'val' is an integer,
  // return msg.
  if (isInteger(val)) return 'Not a date';

  // If 'val' is an integer,
  // return empty string.
  if (isEmpty(val)) return '';

  return month + ' ' + day + ', ' + year;
};
