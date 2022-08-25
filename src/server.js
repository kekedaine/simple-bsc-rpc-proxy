const express = require('express')
const cors = require('cors')
const compression = require('compression')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

const app = express()

const route = require('./router')

app.use(errorhandler())
app.use(bodyParser.json())
app.use(compression())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/', route)

app.get('/healthz', (req, res) => {
    res.json({
        is_success: true,
        message: 'ok',
    })
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(400).json({
        is_success: false,
        message: err.message,
    })
})

app.listen(3000, () => {
    console.log('http service app is running on port 3000')
})
module.exports = app
