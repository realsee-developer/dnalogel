#!/usr/bin/env sh

# 发生错误时终止
set -e

rm -rf online
rm -rf test

# 构建
yarn run build:examples

# 移动数据文件夹
cp -r examples/dnalogel/open-works online/dnalogel/

# 创建 test 目录并移动 build 后的代码到 test 目录
mkdir -p test
mv -f online test

# 进入构建文件夹
cd test

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'test'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:realsee-developer/dnalogel.git main:online

cd -
