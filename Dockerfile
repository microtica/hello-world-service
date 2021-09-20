FROM node:12-alpine

ADD . /app

WORKDIR /app

RUN npm install --production

CMD ["node", "index.js"]
