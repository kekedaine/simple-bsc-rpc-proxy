#!/bin/bash

git pull
sleep 1
pm2 restart ecosystem-bsc.config.js
pm2 restart ecosystem-arb.config.js