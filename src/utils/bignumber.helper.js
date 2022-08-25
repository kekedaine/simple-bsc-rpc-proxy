/* eslint-disable no-restricted-syntax */
const { BigNumber } = require('ethers')
const _ = require('lodash')

exports.bnMinBy = (arr, key) => {
    let min = arr[0]
    for (const item of arr) {
        const itemValueBN = BigNumber.from(_.get(item, key))
        const minValueBN = BigNumber.from(_.get(min, key))
        if (itemValueBN.lt(minValueBN)) {
            min = item
        }
    }

    return min
}

exports.bnMaxBy = (arr, key) => {
    let max = arr[0]
    for (const item of arr) {
        const itemValueBN = BigNumber.from(_.get(item, key))
        const maxValueBN = BigNumber.from(_.get(max, key))
        if (itemValueBN.gt(maxValueBN)) {
            max = item
        }
    }

    return max
}

exports.isSameTransaction = (transactionList) => {
    const first = transactionList[0]
    for (const trx of transactionList) {
        if (trx.blockNumber !== first.blockNumber && trx.transactionIndex !== first.transactionIndex) {
            return false
        }
    }

    return true
}
