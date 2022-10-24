#!/usr/bin/make
# Makefile readme (ru): <http://linux.yaroslavl.ru/docs/prog/gnu_make_3-79_russian_manual.html>
# Makefile readme (en): <https://www.gnu.org/software/make/manual/html_node/index.html#SEC_Contents>

SHELL = /bin/sh

IMAGES_PREFIX := $(shell basename $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST)))))

# Important: Local images naming should be in docker-compose naming style

APP_CONTAINER_NAME := react-nextjs-app

docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)
docker_sync_bin := $(shell command -v docker-sync 2> /dev/null)

.PHONY : help up down \
		start-sync stop-sync clean-sync rebuild-sync \
		shell install build \
		prod dev test inspect
.DEFAULT_GOAL := help

# This will output the help for each task. thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# --- [ Development tasks ] -------------------------------------------------------------------------------------------

up:
	$(docker_compose_bin) up -d

down: ## Stop all started for development containers
	$(docker_compose_bin) down

copy-modules:
	docker cp nextjs-tpl-vlm:/app_sync/node_modules ./../../src/

start-sync: ## Start Docker Sync service for volumes sync on OSX
	$(docker_sync_bin) start

stop-sync: ## Stop Docker Sync service for volumes sync on OSX
	$(docker_sync_bin) stop

clean-sync: ## Remove Docker Sync container & data for volumes sync on OSX
	$(docker_sync_bin) clean

rebuild-sync: clean-sync start-sync ## Full rebuild index of current docker-sync process

shell: ## Start shell into application container
	$(docker_compose_bin) exec "$(APP_CONTAINER_NAME)" /bin/sh

start-mockserver: up ## Start mockserver
	$(docker_compose_bin) -f "docker-compose-mockserver.yml" up -d

stop-mockserver: up ## Stop mockserver
	$(docker_compose_bin) -f "docker-compose-mockserver.yml" down

install-async: up ## Install dependency
	$(docker_compose_bin) exec "$(APP_CONTAINER_NAME)" npm ci

install: install-async copy-modules

build: up ## Build
	$(docker_compose_bin) exec "$(APP_CONTAINER_NAME)" npm run build

prod: up ## Start production server
	$(docker_compose_bin) exec "$(APP_CONTAINER_NAME)" npm run start

dev: up ## Node dev frontend
	$(docker_compose_bin) exec "$(APP_CONTAINER_NAME)" npm run dev
