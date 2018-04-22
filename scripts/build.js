#!/usr/bin/env node

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpackPreact = require('./patch/webpackPreact');
const webpackConfig = require('react-scripts/config/webpack.config.prod');
webpackPreact(webpackConfig);

require('react-scripts/scripts/build');
