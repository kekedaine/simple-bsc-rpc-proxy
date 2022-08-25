module.exports = {
    apps: [
        {
            name: 'rpc_proxy_service',
            max_memory_restart: '900M',
            port: 3000,
            autorestart: true,
            script: './src/index.js',
            out_file: '/dev/null',
            error_file: '/dev/null',
        },
    ],
}
// pm2 start ecosystem.config.js
// pm2 restart
// pm2 stop all
// pm2 delete all
