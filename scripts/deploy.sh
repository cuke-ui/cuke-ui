#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "start build..."
# 生成静态文件
yarn build:docs

echo "√ build success"

# 进入生成的文件夹
cd .out

echo "start publish..."
# 提交到  gh-pages
git config  --get remote.origin.url
git init
git config user.name "cuke-ui"
git config user.email "1359518268@qq.com"
git add .
git commit -m 'docs:deploy'

git push --force --quiet git@github.com:cuke-ui/cuke-ui.git master:gh-pages

echo "√ publish success"

cd -