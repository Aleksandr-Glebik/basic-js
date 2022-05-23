const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = []

  if (str.length === 0 ) {
      return ''
  } else if (str.length > 0) {
      let arr = str.split('')

      for (let i = 0; i < arr.length; i++) {
          let lengthI = arr.filter((item) => item === arr[i]).length

          if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
              result.push(arr[i])
          } else if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
              if (arr[i] === arr[i + 1] && arr[i + 1] !== undefined) {
                  result.push(`${lengthI}${arr[i]}`)
              } else if (arr[i] === arr[i + 1] && arr[i + 1] === undefined && arr[i] !== arr[i - 1]) {
                  result.push(`${arr[i]}`)
              } else if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
                  result.push(`${arr[i]}`)
              }
          }
      }
      // console.log('result', result);
      let returnResult = result.filter((el, ind) => {
          return result.indexOf(el) == ind
      })
      // console.log('returnResult', returnResult.join(''));
      return returnResult.join('')
  }
}


module.exports = {
  encodeLine
};
