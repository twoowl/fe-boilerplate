FROM node:18-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
RUN chown nginx.nginx /usr/share/nginx/html/ -R
