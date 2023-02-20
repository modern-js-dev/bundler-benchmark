const { resolve } = require("path");
const isProd = process.env.NODE_ENV === "production";
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@internal": resolve(__dirname, "src/rome/internal"),
			// rome: resolve(__dirname, "src/rome/internal/virtual-packages/rome"),
		},
	},
	output: {},
	builtins: { treeShaking: isProd, progress: {}, minify: isProd },
	stats: {
		warnings: false,
	},
	optimization: {
		sideEffects: false,
		// splitChunks: false
	},
	module: {},
};