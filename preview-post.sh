#!/bin/bash

# Step 1: 检查是否提供了文章名称参数
if [[ -z "$1" ]]; then
  echo "❌ 请提供文章名称，格式： ./preview-post.sh <article-name>"
  exit 1
fi

# Step 2: 确定文章文件名（带 .md 后缀）
MD_FILE="source/_posts/$1.md"

# Step 3: 检查文件是否存在
if [[ ! -f "$MD_FILE" ]]; then
  echo "❌ 找不到文章 $1，请检查文章名是否正确"
  exit 1
fi

# Step 4: 提取文件名（不带 .md 后缀）
POST_NAME=$(basename "$MD_FILE" .md)

# Step 5: 从 front-matter 中提取日期，并格式化为 YYYY/MM/DD
DATE=$(grep -m 1 '^date:' "$MD_FILE" | sed 's/^date: //')
if [[ -z "$DATE" ]]; then
  echo "❌ 在文章中找不到 'date' 字段"
  exit 1
fi

# 格式化日期：将空格替换为斜杠（/）
FORMATTED_DATE=$(echo "$DATE" | sed 's/\([0-9]\{4\}\)-\([0-9]\{2\}\)-\([0-9]\{2\}\) \([0-9]*\):\([0-9]*\):\([0-9]*\)/\1\/\2\/\3/')

# Step 6: 重新生成 Hexo 站点
echo "⚙️ 生成页面..."
hexo g

# Step 7: 启动 Hexo 本地预览服务器
echo "🚀 启动 Hexo 本地服务器..."
hexo s &

# Step 8: 等待 Hexo 启动
sleep 2

# Step 9: 拼接网址
URL="http://localhost:4000/$FORMATTED_DATE/$POST_NAME/"

# Step 10: 打开浏览器（适配 Windows）
echo "🌐 正在打开：$URL"

# 根据不同操作系统选择打开浏览器的方法
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
  explorer "$URL"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open "$URL"
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open "$URL"
else
  echo "📎 请手动打开浏览器访问：$URL"
fi
