#!/bin/bash

rm -rf dist/
mkdir dist
cp background.js manifest.json dist/

# i need to zip it

cd dist
zip -r ../release.zip *
cd ..

