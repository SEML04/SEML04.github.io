git checkout source
git add .
git commit -m "name"
git push origin source -f
hexo clean
hexo g
hexo d
hexo s



chmod +x preview-post.sh
chmod +x deploy.sh
./preview-post.sh hello-world
./deploy.sh