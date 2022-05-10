# Stage 1: Установка зависимостей
FROM node:14-alpine AS deps

LABEL org.opencontainers.image.authors="av@anclaev.com"
LABEL maintrainer="anclaev"
LABEL description="anclaev-com"

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --silent

# Stage 2: Сборка проекта
FROM node:14-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

# Stage 3: Запуск приложения
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html