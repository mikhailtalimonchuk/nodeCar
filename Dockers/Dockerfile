FROM node:14.18.0-alpine as base

WORKDIR /app

FROM base as production
COPY package* ./
ENV NODE_PATH=./build

RUN npm run build

CMD ["npm", "start"]

FROM base as dev

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]