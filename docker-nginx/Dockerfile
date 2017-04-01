# docker rm -f webapp | true
# docker build --rm --force-rm -t webapp -f config/nginx/Dockerfile . -f docker-nginx/Dockerfile
# docker run -d -p 80:80 --name webapp webapp
FROM nginx:1.10.3-alpine
COPY dist /usr/share/nginx/html
COPY docker-nginx/default.conf /etc/nginx/conf.d/default.conf
