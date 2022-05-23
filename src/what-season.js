const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  } else if (date instanceof Date) {
    const seasons = ['spring', 'summer', 'autumn', 'winter']
    let num = date.getMonth()

    if (num === 11 || num === 0 || num === 1) {
        return seasons[3]
    } else if (num === 2 || num === 3 || num === 4) {
        return seasons[0]
    } else if (num === 5 || num === 6 || num === 7) {
        return seasons[1]
    } else if (num === 8 || num === 9 || num === 10) {
        return seasons[2]
    }
  }
}

module.exports = {
  getSeason
};
