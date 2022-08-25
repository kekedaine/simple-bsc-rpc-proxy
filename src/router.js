const { Router } = require('express')
const RpcProxyCtl = require('./controllers/rpc-proxy')

const hpr = (middleware) => async (req, res, next) => {
    try {
        await middleware(req, res, next)
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const router = Router()

router.get(
    '/health',
    hpr((req, res) => {
        res.json({
            is_success: true,
            message: 'ok',
        })
    })
)

router.post('/', hpr(RpcProxyCtl.post))
router.get(
    '/',
    hpr((req, res) => {
        res.status(200).send()
    })
)

module.exports = router
