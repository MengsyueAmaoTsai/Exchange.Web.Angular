FROM node:21-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm i

COPY . .
RUN pnpm run build

FROM node:21-alpine AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist

RUN npm install -g pnpm && pnpm i --prod

EXPOSE 4000
ENTRYPOINT [ "pnpm", "start" ]
