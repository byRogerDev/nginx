FROM nginx:alpine
COPY site /usr/share/nginx/html
RUN cat /etc/nginx/conf.d/default.conf