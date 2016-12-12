#!/usr/bin/env node

if (process.env.NODE_ENV === 'development')
	require('babel-register')();

var builder = require('./builder');
builder.start();
