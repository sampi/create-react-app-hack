#!/usr/bin/env node

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

// Load the create-react-app config.
const jestConfig = require('react-scripts/scripts/utils/createJestConfig');

// Map React's testing classes to Preact
const newJestConfig = function() {
	const config = jestConfig.apply(this, arguments);
	config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
		'^react-dom/server$': '<rootDir>/node_modules/preact-render-to-string/dist/index.js',
		'^react-dom/test-utils$': '<rootDir>/node_modules/preact-test-utils/lib/index.js',
		'^react-dom$': '<rootDir>/node_modules/preact-compat-enzyme/lib/index.js',
		'^react-test-renderer/shallow$': '<rootDir>/node_modules/preact-test-utils/lib/index.js',
		'^react-test-renderer$': '<rootDir>/node_modules/preact-test-utils/lib/index.js',
		'^react-addons-test-utils$': '<rootDir>/node_modules/preact-test-utils/lib/index.js',
		'^react$': '<rootDir>/node_modules/preact-compat-enzyme/lib/index.js'
	});
	return config;
};

// HACK ALERT!
module.constructor._cache[
	require.resolve('react-scripts/scripts/utils/createJestConfig')
].exports = newJestConfig;

// Run the build.
require('react-scripts/scripts/test');
