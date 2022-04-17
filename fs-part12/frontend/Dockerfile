FROM node:14 as build-stage

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm ci && \
	npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

EXPOSE 80