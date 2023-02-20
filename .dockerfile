FROM node:18-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY ./tsconfig.json /app/tsconfig.json
COPY ./.env /app/.env
COPY ./public /app/public
COPY ./src /app/src
RUN npm run build

#-----

FROM docker.io/nginx:stable-alpine as server

COPY ./server/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
RUN chown nginx.nginx /usr/share/nginx/html/ -R
