#!/usr/bin/env node

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const babelIE11 = require('./patch/babelIE11');
const babelConfig = require('babel-preset-react-app');
babelIE11(babelConfig);

const webpackPreact = require('./patch/webpackPreact');
const webpackConfig = require('react-scripts/config/webpack.config.dev');
webpackPreact(webpackConfig);

require('react-scripts/scripts/start');
