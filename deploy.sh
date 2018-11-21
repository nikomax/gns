#!/usr/bin/env bash
rm -rf ./dist
npm run build
cd dist
cp index.html 404.html
git init
git remote add origin https://github.com/nikomax-gns/nikomax-gns.github.io.git
git add -A
git commit -m "Build"
git push -f origin master
