#!/bin/bash
cd /home/ubuntu/bigmelo-web
git fetch origin
sudo git reset --hard origin/main
git pull --rebase origin main
npm i
npm audit fix
sudo npm run build
sudo rm -R /var/www/html/bigmelo-web/dist/
sudo cp -R dist/ /var/www/html/bigmelo-web/