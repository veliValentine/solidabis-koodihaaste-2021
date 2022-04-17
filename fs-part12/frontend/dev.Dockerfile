FROM node:14

WORKDIR /usr/src/app

EXPOSE 3000

COPY --chown=node:node . .

RUN npm install

USER node

CMD ["npm", "start"]