const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./build/react_redux/components/app.js",
	output: {
	    path: path.resolve('./build'),
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
	    	},
	    	{
			    test: /\.css$/,
			    use: [{ // The order of 'style-loader' & 'css-loader' is VERY important!!
			        loader: 'style-loader', // inject CSS..<style></style>..to index.html
			    }, {
			        loader: 'css-loader', // converts CSS file to JS object
			    }]
			},
			{
			    test: /\.scss$/,
			    use: [{ // The order of 'style-loader' & 'css-loader' is VERY important!!
			        loader: 'style-loader', // inject CSS..<style></style>..to index.html
			    }, {
			        loader: 'css-loader', // converts CSS file to JS object
			    }, {
			        loader: 'sass-loader', // compiles Sass to CSS
			    }]
			}
	    ]
	},
	plugins: [
	    new UglifyJsPlugin(),
	    new HtmlWebpackPlugin({
	        // injects bundle.js to our new index.html
	    	inject: false,
	    	// copys the content of the existing index.html to the new /build index.html
	    	template:  path.resolve('./index.md')
		})
	],
	optimization: { // These values here for splitChunks are all defaults, but I'm leaving them here for now.
		splitChunks: {
		    chunks: "async",
		    minSize: 30000,
		    minChunks: 1,
		    maxAsyncRequests: 5,
		    maxInitialRequests: 3,
		    automaticNameDelimiter: '~',
		    name: true,
		    cacheGroups: {
		        vendors: {
		            test: /[\\/]node_modules[\\/]/,
		            priority: -10
		        },
		    default: {
		            minChunks: 2,
		            priority: -20,
		            reuseExistingChunk: true
		        }
		    }
		}
	},
	performance: {
	   hints: false
	}
}
