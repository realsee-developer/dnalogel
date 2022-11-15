#!/usr/bin/env sh

# 发生错误时终止
set -e

rm -rf online

mkdir -p online/dnalogel

# 移动数据文件夹
cp -r open-works online/dnalogel/

cp -r dist/* online/dnalogel/

# 进入构建文件夹
cd online/dnalogel

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:realsee-developer/dnalogel.git main:gh-pages

cd -
