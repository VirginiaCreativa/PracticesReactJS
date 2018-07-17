const path = require('path');
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.jsx',
		imports: './src/scripts/imports.js',
		another: './src/another-module.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
         jquery: "jquery/src/jquery"
      }
   },
   devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
		port: 3000
	},
   module: {
		rules: [
		   {
		       test: /\.(js|jsx)$/,
		       loader: 'babel-loader',
		       exclude: /node_modules/
		   },
		   {
				test: /(\.css|\.scss)$/,
				exclude: /node_modules/,
				use: [
				{
					loader: 'style-loader', // inject CSS to page
				}, 
				{
					loader: 'css-loader', // translates CSS into CommonJS modules
					options: { 
		     			importLoaders: 1,
		     			minimize: true,
		     			modules: true,
		            sourceMap: true
		     		}
				}, 
				{
					loader: 'postcss-loader', // Run post css actions
					options: {
					plugins: function () { // post css plugins, can be exported to postcss.config.js
						return [
							require('precss'),
							require('autoprefixer')
						];
					}
				}
				}, 
				{
					loader: 'sass-loader' // compiles Sass to CSS
				},
				{
					loader: 'sass-resources-loader',
		          options: {
		            resources: ['./src/style/_variables.scss', './src/style/global.scss'],
					}
		     	}	
				]
			},
		   {
		       test: /\.(png|svg|jpe?g|gif|ico)$/,
		       loader: 'url-loader?limit=8000&name=images/[name].[ext]'
		   },
		   {
		      test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
		      loader: "imports-loader?this=>window"
				},
				{
				test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
				loader: 'file-loader?name=./fonts/[name].[ext]'
			},
		]
   },
	plugins: [
	  	new HtmlWebpackPlugin({
	      template: __dirname + '/src/index.html',
	      filename: 'index.html',
	      inject: 'body',
	      title: 'Practices ReactJS',
			minify: {
				collapseWhitespace: true
			}
	  }),
	  	new BrowserSyncPlugin({
	      host: 'localhost',
	      files: [
				'./**/*.html',
				'./*.html',
				'./**/*.js',
				'./*.js',
				'./**/*.scss',
				'./*.scss',
				'./**/*.css',			
				'./*.css'			
			],
			port: 9000,
			server: { baseDir: ['dist'] } 
	   }),
	]
};