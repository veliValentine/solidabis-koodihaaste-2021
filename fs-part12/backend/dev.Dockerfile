FROM node:12

WORKDIR /usr/src/app

EXPOSE 3001
ENV PORT=3001

COPY --chown=node:node . .

RUN npm ci

USER node

CMD ["npm", "run", "dev"]