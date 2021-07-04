FROM centos/nodejs-10-centos7

ENV PORT 8080

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .

EXPOSE ${PORT}

CMD ["node", "./src/index.js"]

