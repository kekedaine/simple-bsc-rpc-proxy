## Simple BSC RPC proxy

```
sudo apt-get install nodejs
npm i pm2 -g
```

```
cp .env.example .env
pm2 start
```

```
pm2 start ecosystem.config.js
pm2 restart
pm2 stop all
pm2 delete all
pm2 logs


pm2 startup
pm2 save
systemctl start pm2-root.service
systemctl status pm2-root.service

```