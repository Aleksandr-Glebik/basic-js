const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resultArr: [],
    getLength() {
       return this.resultArr.length
    },
    addLink(value) {
        this.resultArr.push(`( ${value} )`)
        return this
    },
    removeLink(position) {
        let index = position - 1
        if (this.resultArr[index] == undefined) {
            this.resultArr = []
            throw new Error("You can't remove incorrect link!")
        } else {
            this.resultArr.splice(index, 1)
            return this
        }
    },
    reverseChain() {
        this.resultArr.reverse()
        return this
    },
    finishChain() {
        const result = this.resultArr.join('~~')
        this.resultArr = []
        return result
    }
};

module.exports = {
  chainMaker
};
