const _ = require('lodash');

var apdate = function (val) {

  var AP_MONTHS = ["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];

  var dateObj = new Date(Date.parse(val));

  var day = dateObj.getDate();
  var month = AP_MONTHS[dateObj.getMonth()];
  var year = dateObj.getFullYear();


  // OPTIONAL: Remove 2016 for current year in output.
  var currentYear = new Date().getFullYear();

  if(_.isEqual(dateObj.getFullYear(), currentYear)) return month + ' ' + day;

  // If 'val' is undefined or null,
  // return an empty string.
  if (_.isNil(val)) return '';

  // If 'val' is not a valid date,
  // return msg.
  if(!_.isDate(dateObj)) return 'Not a date';

  // If 'val' is an integer,
  // return msg.
  if (_.isInteger(val)) return 'Not a date';

  // If 'val' is an integer,
  // return empty string.
  if (_.isEmpty(val)) return '';

  return month + " " + day + ', ' + year;
};


module.exports = apdate;
