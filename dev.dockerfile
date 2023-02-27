FROM node:18 as dev-runner
RUN mkdir -p /app
WORKDIR /app

COPY package.json package.json
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
