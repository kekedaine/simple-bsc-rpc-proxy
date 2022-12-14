const _ = require('lodash')

/**
 * Class representing a batch executor
 * @param {number} max size of batch
 * @param {number} timeout in ms
 * @param {function} batchFunc function to be called
 * @returns
 */
module.exports = function (size, timeout, batchFunc) {
    let batch = []
    let counter = 0

    // Create an executor function
    const execBatchFunc = async () => {
        // Reset the batch
        const tmp = batch
        batch = []

        // Process the batch
        await batchFunc(tmp)
        counter += tmp.length
        // console.log(`Processed ${tmp.length} records`)
    }

    // Create a throttled executor function
    const throttledFunc = _.throttle(execBatchFunc, timeout, {
        leading: false,
        trailing: true,
    })

    return {
        /**
         * Push item to batch
         * @param {any} item
         */
        push(item) {
            batch.push(item)
            if (batch.length >= size) {
                this.flush()
            } else {
                throttledFunc()
            }
        },

        async flush() {
            return throttledFunc.flush()
        },

        getCounter() {
            return counter
        },
    }
}
