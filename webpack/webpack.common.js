var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  debug: true,
  entry: {
    'vendor': './browser/js/vendor.js',
    'app': './browser/js/app.js'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)([\?]?.*)$/,
        loader: 'url-loader?limit=30000&name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new ExtractTextPlugin('style.css')
  ]
};
