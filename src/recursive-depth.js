const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(arr) {
    this.arr = arr
    this.current = 1
    this.maxNum = 0
  }

  calculateDepth(arr = this.arr, current = this.current, maxNum = this.maxNum) {
    if (current > maxNum) {
        maxNum = current
    }
    for (let item of arr) {
        if (Array.isArray(item)) {
            maxNum = this.calculateDepth(item, (current + 1), maxNum)
        }
    }
    return maxNum
}
}

module.exports = {
  DepthCalculator
};
