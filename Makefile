.SILENT:
.PHONY: build

default: install build serve

## Install dependencies
install:
	npm install

## Build
build:
	npx webpack --mode=production

## Start watcher and server
start:
	npx webpack serve --mode=development
