FROM node:14

WORKDIR /usr/src/app

COPY db /usr/src/app

COPY models /usr/src/app

COPY router /usr/src/app

COPY app.js /usr/src/app

COPY package.json /usr/src/app

RUN npm install

CMD npm run start

EXPOSE 3000

