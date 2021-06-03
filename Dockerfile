FROM node:12
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN cd ./client; npm install; npm run build
RUN npm install --production
COPY . .
CMD ["node", "index.js"]
