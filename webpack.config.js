const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    imports: './src/scripts/imports.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    alias: {
      jquery: 'jquery/src/jquery',
    },
    modules: ['node_modules', 'src'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: devMode ? ExtractTextPlugin.extract({
        fallback: 'style-loader?sourceMap',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              minimize: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              minimize: {
                discardComments: {
                  removeAll: true
                }
              }
            }
          }, 
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: (loader) => [
                require('precss'),
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader?sourceMap',
          {
              loader: 'sass-resources-loader',
                options: {
                  resources: [
                  './src/style/_variables.scss',
                  './src/style/_global.scss'
                ]
              }
            }
        ]
        }) : [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: 'imports-loader?this=>window'
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
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
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
}
