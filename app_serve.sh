#!/bin/bash

git pull
npm i
sleep 1
pm2 restart ecosystem-bsc.config.js
pm2 restart ecosystem-arb.config.js