const path = require('path');

module.exports = {
	entry: "./index.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, './dist/assets'),
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react", {
							plugins: [
								"@babel/plugin-proposal-class-properties"
							]
						}]
					}
				}
			}
		]
	},


	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		sourceMap: true,
	// 		warnings: false,
	// 		mangle: true
	// 	})
	// ]
}
