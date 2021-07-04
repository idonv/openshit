FROM node:16.3-alpine3.11

ENV PORT 8080

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .

EXPOSE ${PORT}

CMD ["node", "./src/index.js"]