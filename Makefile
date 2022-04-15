default:
	rm -rf node_modules
	cd examples && rm -rf node_modules
	cd plugins && rm -rf node_modules dist libs docs
	yarn
	yarn bootstrap
	yarn build:plugins
	yarn start:examples
