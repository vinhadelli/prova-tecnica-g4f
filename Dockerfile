FROM node:20.13.0-alpine3.18 AS base

FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

FROM base AS production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN node ace build

FROM base
ENV NODE_ENV=production
ENV PORT=3333
ENV HOST=0.0.0.0
ENV APP_KEY=LHwQFa8DH5QfKwl5uYGiuXRQlNabE8rq
ENV LOG_LEVEL=info
# ENV ENV_PATH=build/.env
WORKDIR /app
# COPY ./.env ./build
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
#limpando a base de dados por se tratar de um ambiente simulado.
RUN node ace migration:fresh --force
RUN node ace db:seed
EXPOSE 3333
CMD ["node", "./bin/server.js"]
