module.exports = {
    apps: [
        {
            name: 'rpc_proxy_service',
            max_memory_restart: '900M',
            autorestart: true,
            script: './src/index.js',
            out_file: '/dev/null',
            error_file: '/dev/null',
            env_bsc: {
                PORT: 3000,
                NODE_ENV: 'production',
                SERVICE_NAME: 'bsc-rpc',
                RPC_ORIGIN: 'https://bsc-dataseed.binance.org',
                IS_ENABLE_ETHERJS: 'true',
            },
            env_arb: {
                PORT: 3001,
                NODE_ENV: 'production',
                SERVICE_NAME: 'arb-rpc',
                RPC_ORIGIN: 'https://bsc-dataseed.binance.org',
                IS_ENABLE_ETHERJS: 'true',
            },
        },
    ],
}
// pm2 start ecosystem.config.js --env bsc
// pm2 start ecosystem.config.js --env arb
// pm2 start ecosystem.config.js
// pm2 restart
// pm2 stop all
// pm2 delete all
