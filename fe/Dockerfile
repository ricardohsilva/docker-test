FROM node:16.14.2

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY . /app/

EXPOSE 8080

CMD ["yarn", "start"]