ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS build
WORKDIR /app

# Install Dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && \
  pnpm i

# Build for Production
COPY . .
RUN pnpm run build

FROM node:${NODE_VERSION} AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist ./

RUN npm install -g pnpm && \
  pnpm i --prod

EXPOSE 4000
ENTRYPOINT [ "node", "richillcapital-exchange-web/server/server.mjs" ]
