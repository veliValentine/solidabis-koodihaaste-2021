From node:12
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm run client-build
RUN npm install --production
COPY . .
CMD ["node", "index.js"]
