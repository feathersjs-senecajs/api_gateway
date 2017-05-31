FROM node:alpine
COPY . /var/www/
WORKDIR /var/www/gipsi/
RUN npm install
EXPOSE 3030
