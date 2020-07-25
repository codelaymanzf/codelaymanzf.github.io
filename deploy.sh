#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run docs:build
npx vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.codelayman.top' > CNAME

git init
git config --local user.name zhangfeng
git config --local user.email zf_0719@126.com
# git remote add origin git@github.com:codelaymanzf/codelaymanzf.github.io.git
git add -A
git commit -m 'docs: add blog'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:codelaymanzf/codelaymanzf.github.io.git  master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:codelaymanzf/blog.git master:gh-pages

# 切回上次所在目录
cd -