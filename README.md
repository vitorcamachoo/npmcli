{
  "name": "npm-cli",
  "version": "0.0.1",
  "description": "This module offer a set of helpers to apply over an node application.",
  "main": "index.js",
  "scripts": {
    "yarn:install": "yarn",
    "yarn:upgrade": "yarn upgrade",
    "yarn:help": "yarn --help",
    "clean": "rm -rf dist",
    "copy:dist": "cp package.json README.md",
    "build": "npm run clean && babel src -d dist && npm run copy:dist",
    "start": "cross-env NODE_ENV=development index.js -x npm run build",
    "prepublish": "npm run build && publish"
  },
  "repository": {
    "url": "https://github.com/vitorcamachoo/npm-cli",
    "type": "git"
  },
  "preferGlobal": true,
  "author": "vitorcamachoo",
  "license": "MIT",
  "dependencies": {
    "inquirer": "1.2.2",
    "ramda": "0.22.1"
  },
  "devDependencies": {
    "babel-cli": "6.18.0",
    "babel-plugin-module-resolver": "2.3.0",
    "babel-plugin-transform-object-rest-spread": "6.16.0",
    "babel-preset-latest": "6.16.0",
    "babel-register": "6.16.3",
    "nodemon": "1.11.0"
  }
}
