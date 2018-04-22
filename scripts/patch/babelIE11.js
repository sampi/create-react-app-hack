// Hack babel to build for IE11 instead of IE9
module.exports = babelConfig => {
	const presets = babelConfig.presets;
	presets.forEach((preset, i) => {
		if (!Array.isArray(preset)) {
			return;
		}
		preset.forEach((p, j) => {
			if (p.targets && p.targets.ie) {
				presets[i][j].ie = 11;
			}
		});
	});
};
