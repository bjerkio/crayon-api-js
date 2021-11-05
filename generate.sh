#!/bin/bash

# Prereq: brew install openapi-generator

openapi-generator \
    generate \
    -i openapi.json \
    -g typescript-fetch \
    --config config.json
