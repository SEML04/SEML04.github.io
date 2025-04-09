#!/bin/bash
echo "🚿 清理缓存..."
hexo clean

echo "⚙️ 重新生成页面..."
hexo g

echo "🚀 启动本地预览服务器（端口4000）..."
hexo s
