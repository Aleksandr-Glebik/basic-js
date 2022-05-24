const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let newArr = []
  let newArrAddition = []

  let repeat = options.repeatTimes || 1
  let separator = options.separator || '+'

  let addition = options.addition || ''
  let additionRepeat = options.additionRepeatTimes || 0
  let additionSeparator = options.additionSeparator || '|'

  for (let j = 0; j < additionRepeat; j++) {
      newArrAddition.push(addition)
  }
  let additionRes = newArrAddition.join(additionSeparator)
  // console.log('additionRes', additionRes);

  for (let i = 0; i < repeat; i++) {
      newArr.push(str + additionRes)
  }

  let result = newArr.join(separator)
  // console.log('result', result);
  return result
}

module.exports = {
  repeater
};
