.SILENT:
.PHONY: build

default: install build serve

## Install dependencies
install:
	npm install

## Start watcher
watch:
	npx webpack --watch --mode=development

## Build
build:
	npx webpack --mode=production

## Serve
serve:
	npx http-server ./build
