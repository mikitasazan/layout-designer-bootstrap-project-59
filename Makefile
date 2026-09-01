install:
	npm ci

build:
	npx gulp build

start:
	npx browser-sync start --server build --files build --no-notify

.PHONY: install build start
