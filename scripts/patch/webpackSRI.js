const SriPlugin = require('webpack-subresource-integrity');

module.exports = webpackConfig => {
	webpackConfig.plugins.push(
		new SriPlugin({
			hashFuncNames: ['sha384'],
			enabled: true
		})
	);
	webpackConfig.output.crossOriginLoading = 'anonymous';
};
