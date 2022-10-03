#!/bin/bash
npm i
sleep 1
pm2 restart ecosystem-bsc.config.js
pm2 restart ecosystem-arb.config.js
pm2 startup
pm2 save
systemctl start pm2-root.service
systemctl status pm2-root.service