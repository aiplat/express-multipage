const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
}

var cmfunc = require('../src/plugins/cmfunc');
var entryes = cmfunc.getEntry('./src/actions/*.js');

const config = {
  entry: entryes,
  output: {
    path: path.join(__dirname, '../src/assets/bundle'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(forUglifyJS),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin({
      filename: '[name]',
      allChunks: false,
      ignoreOrder: false,
    }),
  ],
  externals: {
    jquery: 'window.$',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: __dirname,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['latest'],
        }
      },
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'css-loader?-importLoaders=1',
        use: 'postcss-loader',
      }),
    },
    {
      test: /\.json$/,
      use: ['json-loader'],
    },
    {
      test: /\.node$/,
      use: ['node-loader'],
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    },
    ],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = config;