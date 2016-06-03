'use strict'
let path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(gif|png)$/,
        loader: 'url',
        query: {
          limit: 10240,
        },
      },
      {
        test: /\.jpe?g$/,
        loader: 'file',
      },
      {
        test: /\.(otf|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 10240,
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
    ],
  },
}
