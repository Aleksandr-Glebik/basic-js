const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNums = n.toString().split('').map((el) => +el)
  // console.log('arrNums', arrNums)
  let newArrNums = arrNums.map((el, ind) => {
      let newArr = arrNums.slice()
      newArr.splice(ind, 1)
      return +newArr.join('')
  })
  // console.log(newArrNums.sort((a, b) => a - b).reverse()[0])
  return newArrNums.sort((a, b) => a - b).reverse()[0]
}

module.exports = {
  deleteDigit
};
