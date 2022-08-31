/* eslint-disable camelcase */
/* eslint-disable no-shadow */
const axios = require('axios')

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let id = randomInteger(100, 9999)

const requestStats = {}
exports.requestStats = requestStats
exports.post = async (req, res) => {
    const { body, headers } = req

    // console.log('body', body)
    // console.log('headers', headers)

    if (body.id) {
        id += 1
        body.id = id
    }

    const data = await axios({
        method: 'post',
        url: 'https://bsc-dataseed.binance.org',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    })

    if (!requestStats[body.method]) {
        requestStats[body.method] = {
            ok: 0,
            non_ok: 0,
        }
    }

    if (data.status === 200) {
        requestStats[body.method].ok += 1
    } else {
        requestStats[body.method].non_ok += 1
    }

    // console.log(data)
    // console.log(data.status)
    // console.log(data.data)

    res.status(data.status).json(data.data)
}
