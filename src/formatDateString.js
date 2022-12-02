/**
 * Given a string date (YYYYMMDD) argument with hyphens or slashes,
 * split the date into an array of strings to properly format the input
 * into a new Date object
 *
 * @param {string | Date} date
 * @returns {Date}
 */
export default function (date) {
  if (typeof date !== 'object') {
    // checks for YYYY-MM-DD
    const ymdRe = /\w{4}-\w{1,2}-\w{1,2}/;
    // checks for MM-DD-YYYY
    const mdyRe = /\w{1,2}-\w{1,2}-\w{4}/;
    // checks for MM/DD/YYYY or DD/MM/YYYY
    const mdySlashRe = /\w{1,2}\/\w{1,2}\/\w{4}/;
    // selects hyphen (-) or slash (/)
    const toSplitRe = /[-|\/]/;

    const isIso = ymdRe.test(date);
    const isStandard = mdyRe.test(date);
    const isSlash = mdySlashRe.test(date);

    // split the string
    if (isIso || isStandard || mdySlashRe)
      return new Date(date.split(toSplitRe));
  }
  return date;
}
