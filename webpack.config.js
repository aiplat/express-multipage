const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var forUglifyJS = {
  compress: {
    properties: false,
    warnings: false
  },
  output: {
    beautify: true,
    quote_keys: true
  },
  mangle: {
    screw_ie8: false
  },
  sourceMap: false
};

// var glob = require('glob');
// var getEntry = (globPath) => {
//   var entries = {},
//     basename, tmp, pathname;

//   glob.sync(globPath).forEach(function (entry) {
//     basename = path.basename(entry, path.extname(entry));
//     tmp = entry.split('/').splice(-3);
//     pathname = basename;
//     entries[pathname] = entry;
//   });

//   return entries;
// }

var cmfunc = require('./routes_config/cmfunc');
var entryes = cmfunc.getEntry('./views_actions/single/*.js');

const config = {
  entry: entryes,
  output: {
    path: __dirname + '/views_assets/bundle',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(forUglifyJS),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin({
      filename: '[name]',
      allChunks: true,
      ignoreOrder: true,
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