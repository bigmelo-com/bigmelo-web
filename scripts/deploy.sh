#!/bin/bash
cd /home/ubuntu/bigmelo-web
npm run build
sudo rm -R /var/www/html/bigmelo-web/dist/
sudo cp -R dist/ /var/www/html/bigmelo-web/