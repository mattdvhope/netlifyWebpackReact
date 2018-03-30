var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./webpack/index.js",
	output: {
	    path: path.resolve('./'),
	    filename: 'bundle.js'
	},
	module: {
	    rules: [
	    	{
	      		test: /\.js$/,
	      		exclude: /node_modules/,
	      		use: {
	        		loader: 'babel-loader',
	        		options: {
	          			presets: ['env', 'react']
	        		}
	      		}
	    	}
	    ]
	},
	plugins: [
	    new UglifyJsPlugin(),
	    new HtmlWebpackPlugin({
	        // injects bundle.js to our new index.html
	    	inject: true,
	    	// copys the content of the existing index.html to the new /build index.html
	    	template:  path.resolve('./index.html'),
	    })
	]
}
