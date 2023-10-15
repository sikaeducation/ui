#!/bin/bash

npx concurrently -k -s first -n "Storybook,Component Tests\" -c "bgGray.white,auto" \
	"npx http-server storybook-static --port 6006 --silent" \
	"npx wait-on tcp:127.0.0.1:6006 && test-storybook --url http://127.0.0.1:6006"
