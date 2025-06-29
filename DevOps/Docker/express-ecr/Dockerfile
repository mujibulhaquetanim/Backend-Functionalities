# stage 1

FROM node:lts-alpine3.21 as builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY src/ src/
COPY tsconfig.json tsconfig.json

RUN npm run build

# stage 2

FROM node:lts-alpine3.21 as runner

WORKDIR /app

COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules/ node_modules/
COPY --from=builder build/dist/ dist/

CMD [ "npm", "start" ]