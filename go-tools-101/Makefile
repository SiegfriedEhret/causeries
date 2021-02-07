all: help

install: ## Install backslide
	@npm i -g backslide

serve: ## Launch the dev server
	@bs serve

build: ## Build the presentation
	@bs export

help: ## Print this message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: build install serve