FROM nginx:alpine
COPY site /usr/share/nginx/html
CAT /etc/nginx/conf.d/default.conf