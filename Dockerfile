FROM node:alpine
ADD https://gitlab.com/turmundo/gipsi/api/tree/points_svc_dev /var/www/
WORKDIR /var/www/
# RUN npm install
# EXPOSE 3030
# CMD npm start
