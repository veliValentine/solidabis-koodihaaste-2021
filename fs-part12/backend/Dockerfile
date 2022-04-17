FROM node:14

WORKDIR /usr/src/app

EXPOSE 3001
ENV PORT=3001

COPY --chown=node:node . .

RUN npm ci --production

USER node

CMD ["npm", "start"]