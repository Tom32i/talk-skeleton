.SILENT:
.PHONY: build

default: install build serve

## Install dependencies
install:
	npm install

## Build
build:
	npm run build

## Start watcher and server
start:
	npm run start
