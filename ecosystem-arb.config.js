module.exports = {
    apps: [
        {
            name: 'rpc_proxy_service_arb',
            max_memory_restart: '800M',
            autorestart: true,
            script: './src/index.js',
            out_file: '/dev/null',
            error_file: '/dev/null',
            env: {
                PORT: 3001,
                NODE_ENV: 'production',
                SERVICE_NAME: 'arb-rpc',
                RPC_ORIGIN: 'https://arb1.arbitrum.io/rpc',
                IS_ENABLE_ETHERJS: 'true',
            },
        },
    ],
}
// pm2 start ecosystem-bsc.config.js
// pm2 start ecosystem-arb.config.js
// pm2 start ecosystem.config.js
// pm2 restart
// pm2 stop all
// pm2 delete all
