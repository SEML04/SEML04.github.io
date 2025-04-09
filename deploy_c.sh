#!/bin/bash

echo "📦 提交源文件到 GitHub..."
git add .
git commit -m "update post"
git push origin source

echo "⚙️ 生成静态网页..."
hexo clean
hexo g

echo "🚀 部署到 GitHub Pages..."
hexo d
