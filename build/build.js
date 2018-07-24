var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var cmnode = require('../src/plugins/cmnode');
var path = require('path');

var forUglifyJS = {
  mangle: {
    screw_ie8: false
  },
  mangleProperties: {
    screw_ie8: false
  },
  compress: {
    screw_ie8: false,
    properties: false,
    warnings: false
  },
  output: {
    screw_ie8: false,
    beautify: true,
    quote_keys: true
  },
  sourceMap: false
};
var entryes = cmnode.getEntry('./src/actions/*.js');
var config = {
  entry: entryes,
  output: {
    path: path.join(__dirname, '../src/assets/bundle'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.svg/, loader: 'svg-url-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(forUglifyJS)
  ]
};
module.exports = config;