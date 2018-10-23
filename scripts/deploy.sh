#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "start build..."
# 生成静态文件
yarn build:doc

echo "√ build success"

# 进入生成的文件夹
cd _site

echo "start publish..."
# 提交到  gh-pages
git init
git add -A
git commit -m 'docs:deploy'

git push -f git@github.com:cuke-ui/cuke-ui.git master:gh-pages

echo "√ publish success"

cd -