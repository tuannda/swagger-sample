FROM node:14-alpine

LABEL org.opencontainers.image.authors="tuannda586@gmail.com"

ENV NODE_ENV=production
ENV PORT 3000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE ${PORT}

CMD [ "node", "app.js" ]