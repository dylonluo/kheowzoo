#!/usr/bin/bash
echo "Reload server content in a click\n"
echo "grab un tasa de cafe por favor\n"
cd kheowzoo-fullstack_v3

#git pull


echo "Yes we're here, let's get to it...\n"
pm2 kill
pm2 delete all

echo "cleaning up...\m"
sudo rm -rf .next/
npm install --legacy-peer-deps

echo "just a moment...\n"

npm run build

echo "let's go....\n"

pm2 start npm --name "kheowzoo" -- start

pm2 save
pm2 startup

clear

echo "done."
