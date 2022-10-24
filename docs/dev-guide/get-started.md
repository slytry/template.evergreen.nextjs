# [Оглавление](../../README.md) / Инструкция по запуску приложения

## 1. Перейти в директорию dev-окружения.

```bash
$ cd docker/dev
```

## 2. Создать файл окружения.

```bash
$ cp .env.example .env
```

## 3. Заполнить переменные окружения.

```bash
# Main proxy server docker network name

FRONTEND_NETWORK_NAME=proxy-network

# Application layer docker network name

BACKEND_NETWORK_NAME=applications-network

# Docker compose project name. Domain name of site

COMPOSE_PROJECT_NAME=nextjs.chulakov.local

# Node.js application port

PORT=3010

# Host url with protocol

HOST_URL=http://localhost:3010

# Адрес API при выполнении запросов с клиента (браузера)

CLIENT_API_URL=http://localhost:1090

# Адрес API при выполнении запросов на сервере (Node.js)

SSR_API_URL=http://nextjschulakovlocal_mockserver-srv_1:1080

# Prefix for static files path

ASSET_PREFIX="";
```

## 4. Запустить docker-sync.

```bash
make start-sync
```

## 5. Установить все пакеты для запуска приложения внутри контейнера.

```bash
make install
```

## 6. Запустить приложение в dev-режиме.

```bash
make dev
```

## 7. Перейти на 'http://localhost:3010/'.
