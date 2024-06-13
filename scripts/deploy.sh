#!/bin/bash
cd /home/ubuntu/bigmelo-web
git stash
git stash drop
git reset --hard origin/main
git pull origin --rebase
npm i
npm audit fix
sudo npm run build
sudo rm -R /var/www/html/bigmelo-web/dist/
sudo cp -R dist/ /var/www/html/bigmelo-web/