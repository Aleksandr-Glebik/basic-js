const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [].concat(arr)

    for (let i= 0; i < newArr.length; i++) {
        if (typeof newArr[i] === 'number') {
            continue
        } else if (typeof newArr[i] === 'string') {
            if (newArr[i] == '--discard-next') {
                newArr.splice(i, 1)
                newArr.splice(i + 1, 1)
            } else if (newArr[i] == '--discard-prev') {
                newArr.splice(i, 1)
                newArr.splice(i - 1, 1)
            } else if (newArr[i] == '--double-next') {
                newArr.splice(i, 1)
                newArr.splice(i + 1, 0, newArr[i])
            } else if (newArr[i] == '--double-next') {
                newArr.splice(i, 1)
                newArr.splice(i - 1, 0, 1)
            }
        }
    }
    console.log('result newArr', newArr);
    return newArr
} else {
    throw new Error("'arr' parameter must be an instance of the Array!")
}
}

module.exports = {
  transform
};
