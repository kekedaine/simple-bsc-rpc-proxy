const express = require('express')
const cors = require('cors')
const compression = require('compression')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

const app = express()

const route = require('./router')

const RpcProxyCtl = require('./controllers/rpc-proxy')

app.use(errorhandler())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(compression())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000,
    })
)

app.use('/', route)

app.get('/healthz', (req, res) => {
    res.json({
        is_success: true,
        message: 'ok',
        requestStats: Object.fromEntries(Object.entries(RpcProxyCtl.requestStats).sort()),
    })
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(400).json({
        is_success: false,
        message: err.message,
    })
})

app.listen(process.env.PORT, () => {
    console.log('http service app is running on port:', process.env.PORT)
})
module.exports = app
