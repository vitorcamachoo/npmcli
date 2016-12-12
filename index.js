#!/usr/bin/env node

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  require('babel-register');
  require('./src/builder').start()
} else {
  require('./builder').start()
}
