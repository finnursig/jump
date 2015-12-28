var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	//devtool: 'eval',

	entry: [
		'./src/client.js'
	],

	output: {
        path: path.join(__dirname, 'public', 'assets'),
		filename: '[name].js',
		sourceMapFilename: '[name].map'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}

	// resolve: {
	// 	modulesDirectories: ['web_modules', 'node_modules', 'less', './src/js/components', './src/js'],
	// 	extensions: ['', '.js', '.less']
	// },

	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin(),
	// 	new webpack.NoErrorsPlugin(),
	// 	new webpack.ProvidePlugin({
	// 		React: 'react',
	// 		$: 'jquery'
	// 	})
	// ]
};
