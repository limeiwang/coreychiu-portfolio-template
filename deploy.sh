#!/bin/bash
set -e

SERVER="root@81.70.89.70"
REMOTE_DIR="/opt/blog"
TAR_FILE="/tmp/blog.tar.gz"
PROJECT_DIR="/Users/limeiwang/product/我的博客/coreychiu-portfolio-template"

echo "📦 1/4 打包项目..."
COPYFILE_DISABLE=1 tar --no-xattrs --exclude='node_modules' --exclude='.next' --exclude='.git' --exclude='.DS_Store' \
  -czf "$TAR_FILE" \
  -C "$PROJECT_DIR" .

echo "📤 2/4 上传到服务器..."
scp "$TAR_FILE" $SERVER:$REMOTE_DIR/

echo "🔨 3/4 安装依赖 & 构建..."
ssh $SERVER "cd $REMOTE_DIR && rm -rf node_modules .next && tar -xzf blog.tar.gz && npm install && npm run build && rm -rf .next/cache"

echo "🚀 4/4 重启服务..."
ssh $SERVER "pm2 restart blog && sleep 2 && rm -rf /www/server/nginx/proxy_cache_dir/* && pm2 status"

echo "✅ 博客部署完成"
