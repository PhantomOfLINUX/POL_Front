FROM node:20-alpine as release

WORKDIR /app

COPY package.json package-lock.json ./
COPY ./.next/ ./
COPY ./public ./

RUN npm ci

CMD ["npm", "start"]
