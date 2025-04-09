#!/bin/bash

POST_NAME=$1

if [ -z "$POST_NAME" ]; then
  echo "❌ 请传入文章名（不含.md 后缀）"
  exit 1
fi

echo "🚿 清理缓存..."
hexo clean

echo "⚙️ 重新生成页面..."
hexo g

echo "🚀 启动本地服务器..."
hexo s &

sleep 2  # 等待服务器启动

# 打开浏览器定位文章页面
xdg-open "http://localhost:4000/$(date +%Y/%m/%d)/$POST_NAME/"
