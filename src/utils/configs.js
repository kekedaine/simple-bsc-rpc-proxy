require('dotenv-safe').config({ path: '.env' })

if (!process.env.SERVICE_NAME) throw new Error('Config Not Found')

module.exports = {
    SERVICE_NAME: process.env.SERVICE_NAME,
    NODE_ENV: process.env.NODE_ENV,
    RPC_ORIGIN: process.env.RPC_ORIGIN,
}
