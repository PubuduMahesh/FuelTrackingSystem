# base image
FROM node:latest as node

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY . .

EXPOSE 4200
#CMD ["npm", "start"]
CMD ng serve --host 0.0.0.0