#!/usr/bin/env node

try {
	require('babel-register');
	require('./src/builder').start()
} catch (e) {
	require('./builder').start()
}
