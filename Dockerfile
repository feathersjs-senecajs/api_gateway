FROM node:alpine
ENV NODE_ENV production
WORKDIR /var/www/gipsi/src/
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
CMD npm start
