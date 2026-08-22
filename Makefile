install:
	npm ci

build:
	npx gulp build

start:
	npx browser-sync start --server build --files build

.PHONY: install build start
