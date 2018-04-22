// Hack the webpack config to load Preact instead of React
module.exports = webpackConfig =>
	(webpackConfig.resolve.alias = Object.assign({}, webpackConfig.resolve.alias, {
		react: 'preact-compat',
		'react-dom': 'preact-compat'
	}));
