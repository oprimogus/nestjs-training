#!/bin/bash

npm install
npm run build
npm run migrate:run
npm run start:dev