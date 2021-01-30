var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	context: __dirname,

	entry: './client/index.js',
	output: {
		path: path.resolve('./static/'),
		filename: "[name]-bundle.js",
	},

	plugins: [
	new BundleTracker({filename: './webpack-stats.json'}),
	new ESLintPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development'),
			BASE_URL: JSON.stringify('http://127.0.0.1:3000/'),
		}
	})
	],

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					sourceMaps: true,
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [],
				},
			}
		},
		{
			test: /\.(scss|css)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.html$/,
			loader: "html-loader",
		}
		]
	},
devServer: {
    contentBase: path.join(__dirname, './static'),
    compress: true,
    port: 5001,
    writeToDisk: true
  }
}
