exports.arrayToObject = (array, key) =>
    array.reduce((obj, item) => {
        obj[item[key]] = item

        return obj
    }, {})
