FROM node:20-alpine as release

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ ./

CMD ["npm", "start"]
