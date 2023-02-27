#----- BEGIN BUILDER STEP

FROM node:18-alpine as builder

# Create application folder
RUN mkdir -p /app
WORKDIR /app

# Copy package.json and package-lock.json and build dependencies.
COPY package*.json /app
RUN npm install

# Copy needed files to build
COPY ./tsconfig.json /app/tsconfig.json
COPY ./.env /app/.env
COPY ./public /app/public
COPY ./src /app/src

# Run the production build
RUN npm run build

#----- BEGIN SERVER STEP

FROM docker.io/nginx:stable-alpine as server

# You dont need bash unless you are trying to debug:
# docker run --rm -i -t boilerplate/test /bin/sh --login
RUN apk add --no-cache bash 

# Inject the NGINX configuration file.
COPY ./server/nginx.conf /etc/nginx/nginx.conf

# Copies the production build of the React app from the builer
COPY --from=builder /app/build /usr/share/nginx/html

# Expose ports
EXPOSE 80

# When SSL is supported uncomment the following line:
# EXPOSE 443

# Add the NGINX user access to the files.
RUN chown nginx.nginx /usr/share/nginx/html/ -R
