FROM node:14-alpine as build

WORKDIR /app/api-gateway

COPY dist package.json /app/api-gateway/

RUN yarn install --production

COPY . .

EXPOSE 4000

CMD ["node", "dist/main"]